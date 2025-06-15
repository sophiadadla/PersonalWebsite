import { useEffect, useRef, useState } from "react";

const clsx = (...args) => {
  let classNames = '';
  for (const arg of args) {
    if (typeof arg === 'string' && arg) {
      classNames += (classNames ? ' ' : '') + arg;
    } else if (typeof arg === 'object' && arg !== null) {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          classNames += (classNames ? ' ' : '') + key;
        }
      }
    }
  }
  return classNames;
};


export const FadeIn = ({
  children,
  duration = 0,
  className,
}) => { 
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, duration);
          observer.unobserve(elementRef.current);
        }
      },
      {
        threshold: 0.1, 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [duration]); 

  return (
    <div
      ref={elementRef}
      className={clsx(
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8",
        className 
      )}
    >
      {children}
    </div>
  );
};