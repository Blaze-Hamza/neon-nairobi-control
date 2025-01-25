import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function Card({ title, value, icon, trend, className, ...props }: CardProps) {
  return (
    <div className={cn("cyber-card group", className)} {...props}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && <div className="text-cyber-green">{icon}</div>}
      </div>
      <div className="mt-2 flex items-baseline">
        <div className="cyber-text-glow text-2xl font-semibold text-cyber-green">
          {value}
        </div>
        {trend && (
          <span
            className={cn(
              "ml-2 text-sm",
              trend.isPositive ? "text-cyber-green" : "text-cyber-orange"
            )}
          >
            {trend.isPositive ? "+" : "-"}
            {trend.value}%
          </span>
        )}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyber-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}