import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ListTodo,
  Gamepad2,
  Users,
  Wallet,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Tasks", href: "/tasks", icon: ListTodo },
  { name: "Games", href: "/games", icon: Gamepad2 },
  { name: "Referrals", href: "/referrals", icon: Users },
  { name: "Withdraw", href: "/withdraw", icon: Wallet },
];

export function Navigation() {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <nav className={cn(
      "flex px-4 py-3",
      isMobile ? "flex-col space-y-2" : "space-x-4"
    )}>
      {navigation.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;
        
        return (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "group flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
              isActive
                ? "bg-cyber-green/10 text-cyber-green"
                : "text-muted-foreground hover:bg-cyber-green/5 hover:text-cyber-green",
              isMobile && "justify-between"
            )}
          >
            <div className="flex items-center space-x-2">
              <Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </div>
            <div
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-cyber-green transition-transform duration-300",
                isActive && "scale-x-100"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}