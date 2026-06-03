"use client";
import "react";
import { cn } from "@/lib/utils";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children?: React.ReactNode;
}

export default function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  const colorValue = Array.isArray(color) ? color.join(",") : color;
  const style: React.CSSProperties = {
    "--border-width": `${borderWidth}px`,
    "--border-radius": `${borderRadius}px`,
    "--shine-pulse-duration": `${duration}s`,
    "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
    "--background-radial-gradient": `radial-gradient(transparent,transparent, ${colorValue},transparent,transparent)`,
  };
  return (
    <div
      className={cn(
        "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] bg-white p-3 text-black dark:bg-black dark:text-white",
        className
      )}
    >
      <div
        style={style}
        className="before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]"
      />
      {children}
    </div>
  );
}