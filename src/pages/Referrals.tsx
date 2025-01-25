import { Background } from "@/components/dashboard/Background";
import { Navigation } from "@/components/dashboard/Navigation";
import { Scanlines } from "@/components/ui/scanlines";
import { MapPin, Share2, Users } from "lucide-react";

export default function Referrals() {
  return (
    <div className="min-h-screen">
      <Background />
      <Scanlines />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="cyber-text-glow mb-2 text-4xl font-bold tracking-tight text-cyber-teal">
            Referral Network
          </h1>
          <p className="text-muted-foreground">
            Expand your network. Earn passive income.
          </p>
        </div>

        <Navigation />
        
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="cyber-card group">
            <div className="flex justify-between">
              <h3 className="font-medium text-cyber-teal">Your Network</h3>
              <Users className="h-4 w-4 text-cyber-teal" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Active Referrals</span>
                <span className="text-cyber-teal">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Earnings</span>
                <span className="cyber-text-glow text-cyber-teal">230 KSH</span>
              </div>
            </div>
          </div>
          
          <div className="cyber-card group">
            <div className="flex justify-between">
              <h3 className="font-medium text-cyber-teal">Share Link</h3>
              <Share2 className="h-4 w-4 text-cyber-teal" />
            </div>
            <div className="mt-4">
              <button className="w-full rounded border border-cyber-teal bg-cyber-teal/10 px-4 py-2 text-sm font-medium text-cyber-teal transition-colors hover:bg-cyber-teal/20">
                Generate Referral Link
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}