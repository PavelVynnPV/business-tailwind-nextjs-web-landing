import H3 from "@/components/h3";
import Wrapper from "@/components/layout/wrapper";
import P from "@/components/p";
import Image from "next/image";

export type Client = {
  id: string;
  imageUrl: string;
  altText: string;
};

export const clients: Client[] = [
  { id: "client1", imageUrl: "/client1.png", altText: "Client 1 logo" },
  { id: "client2", imageUrl: "/client2.png", altText: "Client 2 logo" },
  { id: "client3", imageUrl: "/client3.png", altText: "Client 3 logo" },
  { id: "client4", imageUrl: "/client4.png", altText: "Client 4 logo" },
  { id: "client5", imageUrl: "/client5.png", altText: "Client 5 logo" },
];

export default function CustomersSection() {
  return (
    <section className="py-20 bg-[#e5e5e5]">
      <Wrapper>
        <div className="text-center">
          <H3>Our Customers</H3>
          <P className="mt-5 md:w-[60%] mx-auto">
            Market research helps you find customers for your business.
            Competitive analysis helps you make your business unique. Combine
            them to find a competitive advantage for your small business.
          </P>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-20">
          {clients.map((client) => (
            <div className="relative w-[160px] h-[40px]" key={client.id}>
              <Image fill className="object-contain" src={client.imageUrl} alt={client.altText}/>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
