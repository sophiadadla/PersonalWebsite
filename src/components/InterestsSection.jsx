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
        <p className="mb-8 max-w-2xl m-auto">Outside of coding, I'm passionate about staying active—whether that's hiking with my family, surfing, or attending my local run club. I'm also a devoted Florida Gators fan and matcha lover.</p>
        <div className="gallery mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          <img src="IMG_1424.jpg"></img>
          <img src="IMG_0227.JPG"></img>
          <img src="DSCN0126.JPG"></img>
          <img src="272b9136-5d8c-48c6-94a8-a40bc094e0c0.jpg"></img>
          <img src="IMG_3370.jpg"></img>
          <img src="IMG_3539.JPG"></img>
          <img src="IMG_3356.jpg"></img>
          <img src="IMG_2748.jpg"></img>
          <img src="7908693121584155030.JPG"></img>
        </div>
      </div>
    </section>
  );
};