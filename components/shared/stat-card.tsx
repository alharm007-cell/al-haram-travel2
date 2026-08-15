import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: { value: string; positive: boolean };
  tone?: "primary" | "gold" | "success" | "default";
}

const toneStyles: Record<string, string> = {
  primary: "bg-primary-700 text-white",
  gold: "bg-gold-600 text-white",
  success: "bg-success text-white",
  default: "bg-secondary text-primary-700",
};

export function StatCard({ label, value, icon: Icon, trend, tone = "default" }: StatCardProps) {
  return (
    <Card className="flex items-center justify-between p-5">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <span className="font-display text-2xl font-extrabold tabular-financial">{value}</span>
        {trend && (
          <span
            className={cn(
              "text-xs font-semibold",
              trend.positive ? "text-success" : "text-destructive"
            )}
          >
            {trend.positive ? "▲" : "▼"} {trend.value}
          </span>
        )}
      </div>
      <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl", toneStyles[tone])}>
        <Icon className="h-6 w-6" />
      </div>
    </Card>
  );
}
