import { useToast } from "@/hooks/use-toast";

export const ExperiencesSection = () => {
  const { toast } = useToast();

  return (
    <section id="experiences" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Professional Experiences
        </h2>

        {/* Lockheed Martin Experience */}
        <div className="flex items-start space-x-6 mb-12" style={{alignItems: "center"}}>
          <img
            className="image-style w-[350px] flex-shrink-0"
            src="lockheed-martin.png"
            style={{
              width: "300px"
            }}
            onClick={() => window.open('https://www.lockheedmartin.com/en-us/index.html', '_blank')}
          ></img>
          <div style={{padding: "30px"}} className="big-card"> 
            <h3 className="text-2xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis mb-3" style={{textAlign: "left"}}>
              Software Engineering Intern at Lockheed Martin
            </h3>
            <h4 className="mb-1 font-bold text-left text-primary ml-2.5">
              Summer 2025
            </h4>
              <ul className="text-muted-foreground" style={{textAlign: "left"}}>
                <li>
                  •	Contributed to the codebase of a simulation configuration tool used in naval training, developing in a Linux environment
                </li>
                <li>
                  •	Redesigned and implemented multiple interfaces for a more intuitive UI/UX with React.js and HTML/CSS
                </li>
                <li>
                  •	Validated application functionality by creating automated unit tests using Robot Framework with Python/Selenium
                </li>
                <li>
                  •	Travelled to training site to support clients and gather feedback on a new C2 system in order to improve UI/UX 
                </li>                
              </ul>
            <h4 className="mb-1 font-bold text-left text-primary ml-2.5">
              Summer 2024
            </h4>
              <ul className="text-muted-foreground mb-3" style={{textAlign: "left"}}>
                <li>
                  • Worked with R&D group to improve UI/UX of an existing DoD-facing unit visualization web app used in naval training
                </li>
                <li>
                  • Collaborated with ONR representative, implementing 3 DoD-requested UI features in JavaScript and HTML/CSS
                </li>
                <li>
                  • Created a customizable radio emission heatmap via image processing methods, increasing rendering speed by 50% 
                </li>
                <li>
                  • Improved a 30+ button toolbar with Bootstrap, adding a collapsible modal organization feature to minimize screen clutter 
                </li>
                <li>
                  • Worked in an Agile environment with 20+ engineers to fulfill client requests on-time, managing project with GitLab
                </li>
              </ul>
          </div>
        </div>

        {/* KidzHack Experience */}
        <div className="flex items-start space-x-6"  style={{alignItems: "center"}}>
          <img
            className="image-style w-[230px] flex-shrink-0" 
            src="kidzhack.png"
            style={{
              width: "300px"
            }}
            onClick={() => window.open('https://www.kidzhack.com/', '_blank')}
          ></img>
          <div style={{padding: "30px"}} className="big-card">
            <h3 className="text-2xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis mb-3" style={{textAlign: "left"}}>
              Software Engineering Intern at KidzHack
            </h3>
            <h4 className="mb-1 font-bold text-left text-primary ml-2.5">
              Spring 2024
            </h4>
              <ul className="text-muted-foreground" style={{textAlign: "left"}}>
                <li>
                  • Implemented a scalable, cloud-based backend that monitors ~5.5K students' well-being across 10+ US middle schools
                </li>
                <li>
                  • Developed 4 AWS Lambda functions to process ~20K daily HTTP requests from the Angular front-end
                </li>
                <li>
                  • Configured an API Gateway to enable secure communication between user submissions and AWS Lambda functions
                </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
};