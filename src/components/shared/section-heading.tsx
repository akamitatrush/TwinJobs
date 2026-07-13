import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
  id,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2
        id={id}
        className="text-[28px] font-bold leading-9 tracking-[-0.02em] text-foreground md:text-4xl md:leading-[44px]"
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-6 text-muted md:text-lg md:leading-7",
            align === "center" && "mx-auto max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
