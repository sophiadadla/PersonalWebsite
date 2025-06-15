import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const InterestsSection = () => {
  const { toast } = useToast();

  return (
    <section id="interests" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Hobbies & Interests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        </div>
      </div>
    </section>
  );
};