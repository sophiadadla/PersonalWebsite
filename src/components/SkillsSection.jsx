const skillNames = [
  "C++",
  "Python",
  "Java",
  "JavaScript",
  "HTML/CSS",
  "React.js",
  "SQL",
  "MATLAB",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>
        <br></br>
        <div className="grid lg:grid-cols-4 gap-x-9 gap-y-11">
          {skillNames.map((name, key) => (
            <div
              key={key}
              className="rounded-lg card mx-auto" 
            >
              <h3 className="font-semibold text-lg"> {name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};