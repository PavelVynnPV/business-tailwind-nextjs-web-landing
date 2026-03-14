import Image from "next/image";
import H3 from "./h3";
import P from "./p";

export default function ContactSection() {
  return <section>
    <div className="relative h-[60vh]">
      <Image fill className="object-cover object-top" src="/contact-bg.jpeg" alt=""/>
    </div>
    <div className="grid gap-6 py-20 bg-[#01355a] text-white text-center">
      <Image className="mx-auto" src="/contact.png" alt="" height={130} width={100}/>
    <H3>
      Contact Us
    </H3>
    <P>
      3021 NE 50th Oklahoma City, OK 73121 <br />
      Toll Free: 800-283-3558,
      <br />
      506-427-8688
    </P>
    </div>
  </section>;
}
