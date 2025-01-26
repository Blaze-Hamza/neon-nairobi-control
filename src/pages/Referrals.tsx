import { Background } from "@/components/dashboard/Background";
import { Navigation } from "@/components/dashboard/Navigation";
import { Scanlines } from "@/components/ui/scanlines";
import { ReferralMap } from "@/components/referrals/ReferralMap";
import { ViralToolkit } from "@/components/referrals/ViralToolkit";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Referrals() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Background />
      <Scanlines />
      
      <main className="container mx-auto p-4 md:py-8">
        <div className="mb-8">
          <h1 className="cyber-text-glow mb-2 text-3xl md:text-4xl font-bold tracking-tight text-cyber-teal">
            Referral Underworld
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Expand your network. Earn passive income.
          </p>
        </div>

        <Navigation />
        
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className={cn("w-full", isMobile && "order-2")}>
            <ReferralMap />
          </div>
          <div className={cn("w-full", isMobile && "order-1")}>
            <ViralToolkit />
          </div>
        </div>
      </main>
    </div>
  );
}