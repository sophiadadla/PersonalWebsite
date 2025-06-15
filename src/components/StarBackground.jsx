import { useEffect, useState, useRef } from "react";

const pastelColorSets = [
  ['rgba(255, 192, 203, 0.7)', 'rgba(173, 216, 230, 0.7)'],
  ['rgba(144, 238, 144, 0.7)', 'rgba(221, 160, 221, 0.7)'],
  ['rgba(255, 255, 153, 0.7)', 'rgba(255, 223, 186, 0.7)'],
  ['rgba(204, 204, 255, 0.7)', 'rgba(255, 192, 203, 0.7)'],
  ['rgba(173, 216, 230, 0.7)', 'rgba(144, 238, 144, 0.7)'],
  ['rgba(221, 160, 221, 0.7)', 'rgba(255, 255, 153, 0.7)'],
  ['rgba(255, 223, 186, 0.7)', 'rgba(204, 204, 255, 0.7)'],
];

const parseRgba = (rgbaString) => {
  if (typeof rgbaString !== 'string') {
    console.error("parseRgba: Input is not a string, received:", rgbaString);
    return { r: 0, g: 0, b: 0, a: 0 };
  }

  const match = rgbaString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.?\d*))?\)/);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
      a: match[4] ? parseFloat(match[4]) : 1,
    };
  } else {
    console.error("parseRgba: No regex match found for string:", rgbaString);
    return { r: 0, g: 0, b: 0, a: 0 };
  }
};

const getRgbValues = (rgbaString) => {
  const parsed = parseRgba(rgbaString);
  return `${parsed.r}, ${parsed.g}, ${parsed.b}`;
};

const generateRandomPercentage = (min = 10, max = 90) => {
  return `${Math.floor(Math.random() * (max - min)) + min}%`;
};

const FADE_COLOR_DURATION = 8000;
const FADE_IN_OUT_DURATION = 5000;
const BLOB_ACTIVE_DURATION = 10000;
const TOTAL_BLOB_LIFESPAN = FADE_IN_OUT_DURATION * 2 + BLOB_ACTIVE_DURATION;
const MAX_BLOBS = 6;

const generateBlobData = (id, appearTimeOffset = 0) => {
  return {
    id: id || Date.now() + Math.random(),
    size: Math.random() * 250 + 200,
    x: Math.random() * 100,
    y: Math.random() * 100,
    initialPulseOpacity: Math.random() * 0.5 + 0.5,
    animationDuration: Math.random() * 4 + 2,
    colorIndex: Math.floor(Math.random() * pastelColorSets.length),
    fadeStartTime: performance.now() - (Math.random() * FADE_COLOR_DURATION),
    fadeDuration: FADE_COLOR_DURATION,

    borderRadius: `${generateRandomPercentage()} ${generateRandomPercentage()} ${generateRandomPercentage()} ${generateRandomPercentage()} / ${generateRandomPercentage()} ${generateRandomPercentage()} ${generateRandomPercentage()} ${generateRandomPercentage()}`,

    appearTime: performance.now() + appearTimeOffset,
    totalLifeSpan: TOTAL_BLOB_LIFESPAN,
    fadeInOutDuration: FADE_IN_OUT_DURATION,
  };
};

export const StarBackground = () => {
  const [blobs, setBlobs] = useState([]);
  const animationFrameRef = useRef();
  const currentBlobsRef = useRef([]);
  const debugBlobIdRef = useRef(null);

  useEffect(() => {
    const initialBlobs = Array.from({ length: MAX_BLOBS }, (_, i) =>
      generateBlobData(i, -(i * TOTAL_BLOB_LIFESPAN / MAX_BLOBS))
    );
    currentBlobsRef.current = initialBlobs;
    setBlobs(initialBlobs);

    const animate = (currentTime) => {
      const nextBlobs = [];
      let blobsToReplaceCount = 0;

      currentBlobsRef.current.forEach((blob) => {
        const elapsedTimeColor = currentTime - blob.fadeStartTime;
        const colorFadeProgress = (elapsedTimeColor % blob.fadeDuration) / blob.fadeDuration;

        const lifeTimeElapsed = currentTime - blob.appearTime;
        let currentDisplayOpacity = 1;

        if (lifeTimeElapsed < blob.fadeInOutDuration) {
          currentDisplayOpacity = lifeTimeElapsed / blob.fadeInOutDuration;
        } else if (lifeTimeElapsed > (blob.totalLifeSpan - blob.fadeInOutDuration)) {
          currentDisplayOpacity = 1 - ((lifeTimeElapsed - (blob.totalLifeSpan - blob.fadeInOutDuration)) / blob.fadeInOutDuration);
        }

        const finalDisplayOpacity = Math.max(0, Math.min(1, currentDisplayOpacity * blob.initialPulseOpacity));

        if (lifeTimeElapsed >= blob.totalLifeSpan) {
          blobsToReplaceCount++;
        } else {
          nextBlobs.push({
            ...blob,
            fadeProgress: colorFadeProgress,
            displayOpacity: finalDisplayOpacity,
          });
        }
      });

      for (let i = 0; i < blobsToReplaceCount; i++) {
        nextBlobs.push(generateBlobData(null, 0));
      }

      while (nextBlobs.length < MAX_BLOBS) {
        nextBlobs.push(generateBlobData(null, 0));
      }

      currentBlobsRef.current = nextBlobs;
      setBlobs(nextBlobs);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const resizeHandler = () => {
      const newBlobsOnResize = Array.from({ length: MAX_BLOBS }, (_, i) =>
        generateBlobData(i, -(i * TOTAL_BLOB_LIFESPAN / MAX_BLOBS))
      );
      currentBlobsRef.current = newBlobsOnResize;
      setBlobs(newBlobsOnResize);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const getColor = (blob) => {
    const [color1String, color2String] = pastelColorSets[blob.colorIndex % pastelColorSets.length];

    const rgba1 = parseRgba(color1String);
    const rgba2 = parseRgba(color2String);

    let currentProgress = blob.fadeProgress;

    let r, g, b, a;
    if (currentProgress <= 0.5) {
      const segmentProgress = currentProgress * 2;
      r = Math.round(rgba1.r + (rgba2.r - rgba1.r) * segmentProgress);
      g = Math.round(rgba1.g + (rgba2.g - rgba1.g) * segmentProgress);
      b = Math.round(rgba1.b + (rgba2.b - rgba1.b) * segmentProgress);
      a = rgba1.a + (rgba2.a - rgba1.a) * segmentProgress;
    } else {
      const segmentProgress = (currentProgress - 0.5) * 2;
      r = Math.round(rgba2.r + (rgba1.r - rgba2.r) * segmentProgress);
      g = Math.round(rgba2.g + (rgba1.g - rgba2.g) * segmentProgress);
      b = Math.round(rgba2.b + (rgba1.b - rgba2.b) * segmentProgress);
      a = rgba2.a + (rgba1.a - rgba2.a) * segmentProgress;
    }

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {blobs.map((blob) => {
        const currentColor = getColor(blob);
        return (
          <div
            key={blob.id}
            className="star"
            style={{
              width: blob.size + "px",
              height: blob.size + "px",
              left: blob.x + "%",
              top: blob.y + "%",
              opacity: blob.displayOpacity,
              animationDuration: blob.animationDuration + "s",
              backgroundColor: currentColor,
              borderRadius: blob.borderRadius,
              '--blob-color-rgb': getRgbValues(currentColor),
            }}
          />
        );
      })}
    </div>
  );
};