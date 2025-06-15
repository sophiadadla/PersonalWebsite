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
import { FadeIn } from "../components/FadeIn";


export const Home = () => {
    return( 
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBackground />
            <Navbar/>
            <ThemeToggle/>
            <main>
                <FadeIn>
                    <HeroSection/>
                </FadeIn>
                <FadeIn>
                    <AboutSection />
                </FadeIn>
                <FadeIn>
                    <ExperiencesSection/>
                </FadeIn>
                <FadeIn>
                    <SkillsSection />
                </FadeIn>
                <FadeIn>
                    <ProjectsSection/>
                </FadeIn>
                <FadeIn>
                    <InterestsSection/>
                </FadeIn>
                <FadeIn>
                    <ContactSection/>
                </FadeIn>
            </main>
        </div>
    );
}