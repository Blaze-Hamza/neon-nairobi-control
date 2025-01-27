import { Trophy, Star, Cpu, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface Tier {
  name: string;
  icon: React.ReactNode;
  requiredReferrals: number;
  commission: number;
  color: string;
}

const tiers: Tier[] = [
  {
    name: "Street Runner",
    icon: <Trophy className="h-6 w-6" />,
    requiredReferrals: 0,
    commission: 10,
    color: "text-cyber-green",
  },
  {
    name: "Net Hacker",
    icon: <Star className="h-6 w-6" />,
    requiredReferrals: 5,
    commission: 15,
    color: "text-cyber-teal",
  },
  {
    name: "Corpo Elite",
    icon: <Cpu className="h-6 w-6" />,
    requiredReferrals: 15,
    commission: 20,
    color: "text-cyber-pink",
  },
  {
    name: "Data Overlord",
    icon: <Brain className="h-6 w-6" />,
    requiredReferrals: 30,
    commission: 25,
    color: "text-cyber-orange",
  },
];

export function ReferralTiers() {
  const currentReferrals = 7; // This would come from your backend
  const currentTier = tiers.reduce((prev, curr) => 
    currentReferrals >= curr.requiredReferrals ? curr : prev
  );
  
  const nextTier = tiers[tiers.indexOf(currentTier) + 1];
  const progress = nextTier 
    ? ((currentReferrals - currentTier.requiredReferrals) / 
       (nextTier.requiredReferrals - currentTier.requiredReferrals)) * 100
    : 100;

  return (
    <div className="cyber-card group space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-cyber-teal">Network Tiers</h2>
        <div className={cn("cyber-text-glow font-mono", currentTier.color)}>
          Level {tiers.indexOf(currentTier) + 1}
        </div>
      </div>

      <div className="grid gap-4">
        {tiers.map((tier, index) => {
          const isCurrentTier = tier.name === currentTier.name;
          const isUnlocked = currentReferrals >= tier.requiredReferrals;

          return (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-lg border p-4 transition-all duration-300",
                isCurrentTier
                  ? "border-cyber-green bg-cyber-green/10"
                  : "border-cyber-green/20 bg-cyber-black/50",
                isUnlocked && "hover:border-cyber-green/40"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={cn(tier.color)}>{tier.icon}</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tier.commission}% Commission Rate
                    </p>
                  </div>
                </div>
                <div className="text-sm font-mono">
                  {tier.requiredReferrals} refs
                </div>
              </div>
              
              {isCurrentTier && nextTier && (
                <div className="mt-4">
                  <div className="mb-2 flex justify-between text-xs text-muted-foreground">
                    <span>Progress to {nextTier.name}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-1" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}