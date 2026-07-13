import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionContainer({
  children,
  className,
  as: Tag = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "footer" | "header";
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "mx-auto w-full max-w-[1200px] px-5 md:px-6 xl:px-8",
        className
      )}
    >
      {children}
    </Tag>
  );
}
