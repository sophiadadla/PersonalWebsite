import React, { useState, useEffect } from 'react';
import { Briefcase, Code, User, Clock } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

export const AboutSection = () => {
  const myLocation = [28.7499, -81.3323];
  const defaultZoom = 7;

  const ufLocation = [29.6483, -82.3486]; 

  const [currentTime, setCurrentTime] = useState('');
  const [timezoneName, setTimezoneName] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true, 
      };

      const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
      setCurrentTime(formattedTime);

      const tz = Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).formatToParts(now)
                  .find(part => part.type === 'timeZoneName');
      setTimezoneName(tz ? tz.value : '');
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    
    if (element) {
      const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
    }
  };

  const pulsatingCircleIcon = L.divIcon({
    className: 'pulsating-circle-marker',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  });

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer & Student
            </h3>
            <div>
              <p className="text-muted-foreground">
                I'm a fourth-year Computer Science student at the University of Florida's Herbert Wertheim College of Engineering.
              </p>
              <br></br>
              <p className="text-muted-foreground">
              Through course-work, personal projects, and internships at Lockheed Martin, I've been a valuable member of teams of all sizes. I've contributed to software projects from ideation to deployment, deepening my appreciation for the full development lifecycle. I'm especially passionate about front-end development and UI/UX design, and I thrive in environments where I can collaborate with others to bring intuitive, high-impact products to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button
                onClick={scrollToContact}
                className="cosmic-button"
              >
                Get In Touch
              </button>

              <a
                href="/Dadla+Sophia+UFlorida+Resume+2025.pdf"
                download="Dadla_Sophia_UFlorida_Resume_2025.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">

            {/* --- MAP SECTION --- */}
            <div className="gradient-border p-0 card-hover overflow-hidden" style={{ height: '300px', width: '100%' }}>
              <MapContainer
                center={myLocation}
                zoom={defaultZoom}
                scrollWheelZoom={true}
                className="h-full w-full rounded-md relative"
                zoomControl={false} 
              >
                <div className="absolute top-4 right-4 z-[1000] px-2 py-1 bg-background/80 rounded-md shadow-md text-xs text-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <p className="leading-tight">{currentTime} <span className="text-muted-foreground">{timezoneName}</span></p>
                </div>

                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                {/* Marker for current location */}
                <Marker position={myLocation} icon={pulsatingCircleIcon}>
                    <Tooltip className="leaflet-tooltip-custom">
                        Where I'm from! <br /> Lake Mary, FL
                    </Tooltip>
                </Marker>

                {/* Marker for University of Florida */}
                <Marker position={ufLocation} icon={pulsatingCircleIcon}>
                  <Tooltip className="leaflet-tooltip-custom">
                    I go to school here!<br />University of Florida
                  </Tooltip>
                </Marker>
              </MapContainer>
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
    </section>
  );
};