import Image from "next/image";
import { Button } from "./ui/button";

export default function () {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full min-h-[400px] md:min-h-auto">
        <Image fill className="object-cover" src="/person.jpeg" alt="person" />
      </div>
      <div className="w-full bg-[#01345b] text-white text-center">
        <div className="py-28 px-12">
          <h3 className="text-5xl leading-[1.1] hyphens-auto">
            How We Help Small Business
          </h3>
          <p className="mt-5 hyphens-auto">
            It&apos;s crucial to understand your consumer base from the outset.
            Market research lets you reduce risks even while your business is
            still just a gleam in your eye. Gather demographic information to
            better understand opportunities and limitations for gaining
            customers.
          </p>
          <Button className="mt-14" variant={"secondary"}>
            read more
          </Button>
        </div>
      </div>
    </div>
  );
}
