import { BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function H3({className, children}:BaseProps) {
    return (
        <h3 data-aos="fade-up" data-aos-duration="150" className={cn("font-georgia text-5xl leading-[1.1] mb-5")}>{children}</h3>
    )
}