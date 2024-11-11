import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import carousel1 from "../assets/bg2.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel6.jpg";

export function HomeCarousel() {
  const imagesArr = [
    {
      id: 1,
      url: carousel1,
    },
    {
      id: 4,
      url: carousel4,
    },
    {
      id: 5,
      url: carousel5,
    },
  ];

  return (
    <Carousel
      className="w-full md:h-[80vh] h-[60vh] max-h-screen overflow-hidden"
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1, opacity: "0.65" }}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="h-full w-full">
        {imagesArr.map((item) => (
          <CarouselItem key={item.id} className="h-full w-full">
            <div className="w-full h-full">
              <Card className="w-full h-full shadow-none">
                <CardContent className="flex h-full items-center justify-center p-0">
                  <img
                    src={item.url}
                    alt={`Slide ${item.id}`}
                    className="w-full h-[60vh] md:h-[80vh] object-cover bg-center bg-no-repeat"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
