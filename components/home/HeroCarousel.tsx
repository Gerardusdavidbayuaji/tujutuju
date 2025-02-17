import { heroCarousel } from "@/utils/mocks/NavigationHandler";
import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";

function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {heroCarousel.map((item, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={item}
                      alt="hero"
                      className="w-full h-[24rem] rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
