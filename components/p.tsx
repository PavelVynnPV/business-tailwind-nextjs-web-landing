import { BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function P({ className, children }: BaseProps) {
  return (
    <p className={cn("font-open-sans leading-[1.6]")}>{children}</p>
  );
}
