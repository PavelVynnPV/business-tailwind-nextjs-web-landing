import { BarChart2, Brain, FileText, LucideIcon, Rocket } from "lucide-react";

export type BusinessStep = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cardColor: string;
  iconColor: string;
};

export const businessSteps: BusinessStep[] = [
  {
    id: "plan",
    title: "Plan Your Business",
    description:
      "Combine them to find a competitive advantage for your small business.",
    icon: FileText,
    cardColor: "#313538",
    iconColor: "#f7ca56",
  },
  {
    id: "launch",
    title: "Launch Your Business",
    description:
      "You'll need to make a strategic decision about which state, city, and neighborhood you choose to start your business in.",
    icon: Rocket,
    cardColor: "#59dcdc",
    iconColor: "#fff",
  },
  {
    id: "manage",
    title: "Manage Your Business",
    description:
      "Make sure you maintain proper bookkeeping and have a basic knowledge of business finances.",
    icon: Brain,
    cardColor: "#313538",
    iconColor: "#f7ca56",
  },
  {
    id: "grow",
    title: "Grow Your Business",
    description:
      "However, funding an existing business still requires slightly different preparation.",
    icon: BarChart2,
    cardColor: "#f7ca56",
    iconColor: "#fff",
  },
];

export default function FeatureCardsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {businessSteps.map((item) => (
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          key={item.id}
          className="text-white px-8 py-24 text-center"
          style={{ backgroundColor: item.cardColor }}
        >
          <div className="w-fit mx-auto">
            <item.icon
              className="size-12 mx-auto"
              style={{ color: item.iconColor }}
            />
            <h2 className="text-2xl font-georgia mt-5">{item.title}</h2>
            <p className="text-sm mt-5 leading-[1.6] font-open-sans">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
