import { MENU } from "@/lib/constants";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="h-[100svh] relative">
      <Image
        src="/assets/images/event-background.jpg"
        alt=""
        priority
        fill
        className="object-cover"
      />
      <div className="absolute p-5 bg-black/60 inset-0 flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl md:text-3xl text-center lg:text-5xl font-bold font-serif">
          Ready to attend your next event?
        </h1>
        <p className="text-center mt-1 md:text-lg text-white max-w-prose">
          Discover exciting events near you and beyond with our comprehensive
          events website.
        </p>
        <div className="flex gap-5 mt-8">
          <Button as={Link} color="primary" href={MENU[1].route}>{MENU[1].value}</Button>
          <Button variant="ghost" color="primary" className="">
            Create Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
