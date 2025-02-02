import { Background } from "@/components/dashboard/Background";
import { Navigation } from "@/components/dashboard/Navigation";
import { Scanlines } from "@/components/ui/scanlines";
import { ReferralMap } from "@/components/referrals/ReferralMap";
import { ReferralTiers } from "@/components/referrals/ReferralTiers";
import { ReferralLeaderboard } from "@/components/referrals/ReferralLeaderboard";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function Referrals() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Background />
      <Scanlines />
      
      <main className="container mx-auto p-4 md:py-8">
        <div className="mb-8">
          <h1 className="cyber-text-glow mb-2 text-3xl md:text-4xl font-bold tracking-tight text-cyber-teal">
            Referral Network
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Hack the system. Build your network. Earn rewards.
          </p>
        </div>

        <Navigation />
        
        <div className="mt-8">
          <ReferralMap />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <ReferralTiers />
          <ReferralLeaderboard />
        </div>
      </main>
    </div>
  );
}