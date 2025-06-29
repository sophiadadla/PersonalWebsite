import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GatorGoalMate",
    description: "Social media platform for students to set, track, and achieve their academic, personal, and fitness goals.",
    image: "GatorGoalMateLogo (1).png",
    tags: ["React.js", "Node.js", "MongoDB"],
    demoUrl: "https://youtu.be/Cqd6nSOu-go?si=MLLt9eKrTsEsZPK6",
    githubUrl: "https://github.com/lmdulick/GatorGoalMate",
  },
  {
    id: 2,
    title: "TEMPER",
    description:
      "in progress :)",
    image: "",
    tags: ["React.js", "skil22", "skill3"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "RunWise",
    description:
      "coming soon...",
    image: "",
    tags: ["React.js", "Java", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-11 text-center">
          {" "}
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-48 overflow-hidden justify-center items-center flex">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-auto h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground text-sm">
                  No Image
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.id}-${tag}`}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sophiadadla"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};