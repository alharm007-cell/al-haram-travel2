import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-8 w-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 6L44 40H4L24 6Z" fill="#C9A227" />
      <path d="M24 6L34 40H14L24 6Z" fill="#E8D287" />
      <path d="M17.5 40L24 22L30.5 40H17.5Z" fill="#175450" />
      <circle cx="24" cy="14" r="2.2" fill="#175450" />
    </svg>
  );
}
