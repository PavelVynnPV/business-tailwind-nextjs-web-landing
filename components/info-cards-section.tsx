'use client'

import Wrapper from "@/components/layout/wrapper";
import P from "@/components/p";
import Image from "next/image";

import Tilt from "react-parallax-tilt";

export type InfoCard = {
  id: string;
  type: "image" | "text";
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  bgColor?: string;
};
export const infoCards: InfoCard[] = [
  {
    id: "1",
    type: "image",
    src: "/1.jpeg",
    alt: "Image 1",
  },
  {
    id: "2",
    type: "text",
    title: "Market Research and Competitive Analysis",
    description:
      "Market research blends consumer behavior and economic trends to confirm and improve your business idea. It’s crucial to understand your consumer base from the outset. Market research lets you reduce risks even while your business is still just a gleam in your eye.",
    bgColor: "#FECF42",
  },
  {
    id: "3",
    type: "image",
    src: "/2.jpeg",
    alt: "Image 2",
  },
  {
    id: "4",
    type: "image",
    src: "/3.jpeg",
    alt: "Image 3",
  },
  {
    id: "5",
    type: "image",
    src: "/4.jpeg",
    alt: "Image 4",
  },
  {
    id: "6",
    type: "text",
    title: "Use Competitive Analysis To Find a Market Advantage",
    description:
      "Your competitive analysis should identify your competition by product line or service and market segment. Assess the following characteristics of the competitive landscape.",
    bgColor: "#5ce0d8",
  },
];

export default function InfoCardsSection() {
  return (
    <section className="py-20 bg-[#292f33]">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [auto-rows:auto]">
          {infoCards.map((card) => {
            if (card.type === "image") {
              return (
                <Tilt>
                  <div className="relative min-h-[320px]" key={card.id}>
                    <Image
                      fill
                      src={card.src!}
                      alt={card.alt || ""}
                      className="object-cover"
                    />
                  </div>
                </Tilt>
              );
            } else if (card.type === "text") {
              return (
                <Tilt>
                  {" "}
                  <div
                    key={card.id}
                    className="p-8 min-h-[320px] flex items-center justify-center"
                    style={{ backgroundColor: card.bgColor }}
                  >
                    <div>
                      <h4 className="text-2xl font-georgia">{card.title}</h4>
                      <P className="mt-5">{card.description}</P>
                    </div>
                  </div>
                </Tilt>
              );
            }
          })}
        </div>
      </Wrapper>
    </section>
  );
}
