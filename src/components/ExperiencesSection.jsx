import { useToast } from "@/hooks/use-toast";

export const ExperiencesSection = () => {
  const { toast } = useToast();

  return (
    <section id="experiences" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl"> {/* This container centers the whole section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Professional Experiences
        </h2>

        {/* Lockheed Martin Experience */}
        <div className="flex items-start space-x-6 mb-12" style={{alignItems: "center"}}> {/* Changed to items-start for top alignment */}
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
            <p className="text-muted-foreground" style={{textAlign: "left"}}>
              <ul>
                <li>
                  • in progress
                </li>
              </ul>
            </p>
            <h4 className="mb-1 font-bold text-left text-primary ml-2.5">
              Summer 2024
            </h4>
            <p className="text-muted-foreground" style={{textAlign: "left"}}>
              <ul className="mb-3">
                <li>
                  • Collaborated with ONR representative to enhance military training simulation, implementing 3 UI features in JavaScript
                </li>
                <li>
                  • Created a customizable radio emission heatmap via image-processing, using data structures to speed up rendering by 50%  
                </li>
                <li>
                  • Improved a DoD-facing 30+ button toolbar with Bootstrap, adding a collapsible modal feature to cut screen clutter by 15%  
                </li>
                <li>
                  • Worked on an Agile team of 20+ engineers to fulfill customer requests on-time, utilizing GitLab for project management
                </li>
              </ul>
            </p>
          </div>
        </div>

        {/* KidzHack Experience */}
        <div className="flex items-start space-x-6"  style={{alignItems: "center"}}> {/* Changed to items-start for top alignment */}
          <img
            className="image-style w-[230px] flex-shrink-0" // Explicit width and prevents shrinking
            src="kidzhack.png"
            style={{
              width: "300px"
            }}
            onClick={() => window.open('https://www.kidzhack.com/', '_blank')}
          ></img>
          <div style={{padding: "30px"}} className="big-card"> {/* This div wraps the text content */}
            <h3 className="text-2xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis mb-3" style={{textAlign: "left"}}>
              Software Engineering Intern at KidzHack
            </h3>
            <h4 className="mb-1 font-bold text-left text-primary ml-2.5">
              Spring 2024
            </h4>
            <p className="text-muted-foreground" style={{textAlign: "left"}}>
              <ul>
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
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};