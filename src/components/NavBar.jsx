import { cn } from "/src/lib/utils.js";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", section: "hero" },
  { name: "About", section: "about" },
  { name: "Experiences", section: "experiences" },
  { name: "Skills", section: "skills" },
  { name: "Projects", section: "projects" },
  { name: "Interests", section: "interests" },
  { name: "Contact", section: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      if (sectionId === 'hero') {
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      } else {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-[2000] transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <button
          className="text-xl font-bold text-primary flex items-center cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Sophia Dadla </span>{" "}
          </span>
        </button>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <button
              key={key}
              onClick={() => scrollToSection(item.section)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <button
                key={key}
                onClick={() => {
                  scrollToSection(item.section);
                  setIsMenuOpen(false);
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};