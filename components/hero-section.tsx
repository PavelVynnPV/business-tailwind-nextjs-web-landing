import Image from "next/image";
import Wrapper from "./layout/wrapper";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white relative">
      <Image fill className="object-cover" src="/hero.jpeg" alt="hero" />
      <Wrapper
        className="flex items-center justify-end min-h-[676px]
     md:h-screen lg:h-[80vh] relative"
      >
        <div className="text-right">
          <h1
            data-aos="fade-right"
            data-aos-delay="150"
            className="hyphens-auto font-georgia text-6xl md:text-7xl
        lg:text-8xl leading-[1.1]"
          >
            Start and Grow
            <span className="md:block">
              Your <span className="">Business</span>
            </span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="250"
            className="mt-5 text-lg font-open-sans md:w-[55%] ml-auto"
          >
            Want to be an entrepreneurs? Learn how to get started on your
            business in 10 steps
          </p>
          <Button data-aos="fade-right" data-aos-delay="350" className="mt-5">
            read more
          </Button>
        </div>
      </Wrapper>
    </section>
  );
}
