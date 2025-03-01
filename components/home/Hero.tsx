import Link from "next/link";

import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-semibold text-4xl tracking-tight sm:text-6xl">
          Step Up Your Game.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          We offer the perfect fit for speed, control, and comfort. Explore our
          curated collection of the latest brands and styles, engineered to
          elevate your performance on the pitch. Gear up, dominate the field,
          and make every step count.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
