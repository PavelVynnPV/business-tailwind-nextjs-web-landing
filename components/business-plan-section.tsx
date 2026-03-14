import H3 from "./h3";
import P from "./p";
import { Button } from "./ui/button";

export default function BusinessPlanSection() {
  return (
    <div className="py-20 bg-[#e5e5e5] min-h-[60vh] flex items-center">
      <div className="text-center wrapper">
        <H3>Write Your Business Plan</H3>
        <P className="mt-5 md:w-[60%] mx-auto">
          {" "}
          Market research helps you find customers for your business.
          Competitive analysis helps you make your business unique. Combine them
          to find a competitive advantage for your small business.
        </P>
        <Button className="mt-8" variant="secondary">
          read more
        </Button>
      </div>
    </div>
  );
}
