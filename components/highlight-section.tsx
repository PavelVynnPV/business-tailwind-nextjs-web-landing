import { Button } from "@/components/ui/button";
import Image from "next/image";

export type HighlightItem = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
};
export const highlightItems: HighlightItem[] = [
  {
    id: "1",
    title: "National Small Business Week 2019",
    description:
      "The SBA highlights outstanding entrepreneurs, small business owners, and others from all 50 states and U.S. territories.",
    buttonText: "read more",
  },
  {
    id: "2",
    title: "How We Help Small Businesses",
    description:
      "The SBA highlights outstanding entrepreneurs, small business owners, and others from all 50 states and U.S. territories.",
    buttonText: "read more",
  },
];

export default function HighlightSection() {
  return (
    <section
      className="relative md:h-[70vh] py-20 flex
   flex-col gap-8 md:flex-row items-center"
    >
      <Image
        fill
        className="object-cover"
        src="/highlight-bg.jpeg"
        alt="highlight"
      />
      <div className="bg-black/40 absolute inset-0"></div>
      {highlightItems.map((item) => (
        <div
          key={item.id}
          className="relative w-full text-white px-4 py-7 text-center"
        >
          <h3 className="text-5xl md:w-[60%] mx-auto font-georgia">
            {item.title}
          </h3>
          <p className="mt-5 md:w-[60%] mx-auto">{item.description}</p>
          <Button className="mt-5">{item.buttonText}</Button>
        </div>
      ))}
    </section>
  );
}
