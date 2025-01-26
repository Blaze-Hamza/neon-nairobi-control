import { Background } from "@/components/dashboard/Background";
import { Navigation } from "@/components/dashboard/Navigation";
import { Scanlines } from "@/components/ui/scanlines";
import { ReferralMap } from "@/components/referrals/ReferralMap";
import { ViralToolkit } from "@/components/referrals/ViralToolkit";

export default function Referrals() {
  return (
    <div className="min-h-screen">
      <Background />
      <Scanlines />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="cyber-text-glow mb-2 text-4xl font-bold tracking-tight text-cyber-teal">
            Referral Underworld
          </h1>
          <p className="text-muted-foreground">
            Expand your network. Earn passive income.
          </p>
        </div>

        <Navigation />
        
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <ReferralMap />
          <ViralToolkit />
        </div>
      </main>
    </div>
  );
}