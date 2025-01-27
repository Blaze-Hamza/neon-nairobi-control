import { Background } from "@/components/dashboard/Background";
import { Navigation } from "@/components/dashboard/Navigation";
import { Scanlines } from "@/components/ui/scanlines";
import { EarningsOverview } from "@/components/dashboard/EarningsOverview";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Background />
      <Scanlines />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="cyber-text-glow mb-2 text-4xl font-bold tracking-tight text-cyber-green">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back. Here's what's happening with your earnings.
          </p>
        </div>

        <Navigation />
        
        <div className="mt-8">
          <EarningsOverview />
        </div>
      </main>
    </div>
  );
}