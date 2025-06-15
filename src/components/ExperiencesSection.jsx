import { useToast } from "@/hooks/use-toast";

export const ExperiencesSection = () => {
  const { toast } = useToast();

  return (
    <section id="experiences" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl"> {/* This container centers the whole section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
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
          <div style={{padding: "30px"}}> {/* This div wraps the text content */}
            <h3 className="text-2xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis" style={{textAlign: "left"}}>
              Software Engineering Intern at Lockheed Martin
            </h3>
            <p className="text-muted-foreground" style={{textAlign: "left"}}>
              info about internship
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
          <div style={{padding: "30px"}}> {/* This div wraps the text content */}
            <h3 className="text-2xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis" style={{textAlign: "left"}}>
              Software Engineering Intern at KidzHack
            </h3>
            <p className="text-muted-foreground" style={{textAlign: "left"}}>
              info about internship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};