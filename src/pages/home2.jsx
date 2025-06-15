import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { InterestsSection } from "../components/InterestsSection";
import { ExperiencesSection } from "../components/ExperiencesSection";

export const Home = () => {
    return( 
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBackground />
            <Navbar/>
            <ThemeToggle/>
            <main>
                <HeroSection/>
                <AboutSection />
                <ExperiencesSection/>
                <SkillsSection />
                <ProjectsSection/>
                <InterestsSection/>
                <ContactSection/>
            </main>
        </div>
    );
}