"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export function ThemeToggle({
  className,
  variant = "outline",
}: {
  className?: string;
  variant?: "outline" | "ghost" | "secondary";
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  if (!mounted) {
    return (
      <Button
        type="button"
        variant={variant}
        size="icon"
        className={cn("shrink-0", className)}
        aria-label="Alternar tema"
        disabled
      >
        <Sun className="h-4 w-4 opacity-40" />
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant={variant}
      size="icon"
      className={cn("shrink-0", className)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Modo claro" : "Modo escuro"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
