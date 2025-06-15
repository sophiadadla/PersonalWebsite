import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "C++", logo: ""},
  { name: "Python", logo: ""},
  { name: "Java", logo: ""},
  { name: "JavaScript", logo: ""},
  { name: "HTML/CSS", logo: ""},
  { name: "React.js", logo: ""},
  { name: "SQL", logo: ""},
  { name: "MATLAB", logo: ""},
];


export const SkillsSection = () => {

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>
        <div className="grid lg:grid-cols-4 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="rounded-lg card"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};