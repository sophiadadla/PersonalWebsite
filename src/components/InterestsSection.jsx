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
        <p className="mb-8">Info about my hobbies</p>
        <div className="gallery mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          <img src="public\IMG_1424.jpg"></img>
          <img src="public\IMG_0227.JPG"></img>
          <img src="public\DSCN0126.JPG"></img>
          <img src="public\272b9136-5d8c-48c6-94a8-a40bc094e0c0.jpg"></img>
          <img src="public\IMG_3370.jpg"></img>
          <img src="public\IMG_3539.JPG"></img>
          <img src="public\IMG_3356.jpg"></img>
          <img src="public\IMG_2748.jpg"></img>
          <img src="public\7908693121584155030.JPG"></img>
        </div>
      </div>
    </section>
  );
};