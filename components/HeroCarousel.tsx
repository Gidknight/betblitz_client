"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { heroImages } from "@/constants";

const HeroCarousel = () => {
  return (
    <div className="w-full">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image.imgSrc}
            alt={image.description}
            width={800}
            height={600}
            className="object-cover w-100 h-40 md:max-w-[400px] "
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
