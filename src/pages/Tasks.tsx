import { Background } from "@/components/dashboard/Background";
import { Navigation } from "@/components/dashboard/Navigation";
import { Scanlines } from "@/components/ui/scanlines";
import { Tasks as TasksList } from "@/components/dashboard/Tasks";

export default function Tasks() {
  return (
    <div className="min-h-screen">
      <Background />
      <Scanlines />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="cyber-text-glow mb-2 text-4xl font-bold tracking-tight text-cyber-green">
            Task Hub
          </h1>
          <p className="text-muted-foreground">
            Complete tasks to earn rewards. Higher risk, higher reward.
          </p>
        </div>

        <Navigation />
        
        <div className="mt-8">
          <TasksList />
        </div>
      </main>
    </div>
  );
}