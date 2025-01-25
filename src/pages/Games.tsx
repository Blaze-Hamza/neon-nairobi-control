import { Background } from "@/components/dashboard/Background";
import { Navigation } from "@/components/dashboard/Navigation";
import { Scanlines } from "@/components/ui/scanlines";
import { Games as GamesList } from "@/components/dashboard/Games";

export default function Games() {
  return (
    <div className="min-h-screen">
      <Background />
      <Scanlines />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="cyber-text-glow mb-2 text-4xl font-bold tracking-tight text-cyber-pink">
            Game Arena
          </h1>
          <p className="text-muted-foreground">
            Enter the arena and test your luck. Play responsibly.
          </p>
        </div>

        <Navigation />
        
        <div className="mt-8">
          <GamesList />
        </div>
      </main>
    </div>
  );
}