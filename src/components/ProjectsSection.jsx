import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BeachLens",
    description: "Real-time Red Tide & algae bloom alerts to help Florida travelers plan safe beach trips.",
    image: "BSLogo.png",
    tags: ["React.js", "Python", "Supabase"],
    demoUrl: "https://bloomsight-webapp-mvp.vercel.app/",
    githubUrl: "https://github.com/theinquisitorjif/bloomsight_webapp_mvp",
  },
  {
    id: 2,
    title: "GatorGoalMate",
    description: "Social media platform for students to set, track, and achieve their academic, personal, and fitness goals.",
    image: "GatorGoalMateLogo (1).png",
    tags: ["React.js", "Node.js", "MongoDB"],
    demoUrl: "https://youtu.be/Cqd6nSOu-go?si=MLLt9eKrTsEsZPK6",
    githubUrl: "https://github.com/lmdulick/GatorGoalMate",
  },
  {
    id: 3,
    title: "TEMPER",
    description:
      "REST API and GUI for a risk-management temperature monitoring system, integrated with an NTI sensor. ",
    image: "internss.jpg",
    tags: ["React.js", "Python Flask", "PostgreSQL"],
  },
  {
    id: 4,
    title: "PowerPace",
    description:
      "Web application for hybrid athletes to monitor strength and cardio activities using their data from the Strava API.",
    image: "powerpacelogo.png",
    tags: ["React.js", "Java Spring Boot"],
    // demoUrl: "#",
    githubUrl: "https://github.com/sophiadadla/PowerPace",
  },
  {
    id: 5,
    title: "CineMatch",
    description:
      "Movie recommendation web application that utilizes the OMDb API to suggest movies based on user preferences.",
    image: "cinematch.png",
    tags: ["React.js", "C++"],
    demoUrl: "https://youtu.be/UmoFKLQDUPE",
    githubUrl: "https://github.com/Lyra126/movieRecs",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl items-center items-justify-center flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold mb-11 text-center">
          {" "}
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-col items-center justify-center justify-items-center">
          {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col items-center justify-items-center"
          >
            <div className="h-48 overflow-hidden justify-center flex items-center justify-items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
             { project.id != 3 ? (
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
                ) : (<div className="flex justify-between items-center">
                  <div className="flex space-x-3"></div>
                </div>)}

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