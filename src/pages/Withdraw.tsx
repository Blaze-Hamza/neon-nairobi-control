import { useState } from "react";
import { Background } from "@/components/dashboard/Background";
import { Navigation } from "@/components/dashboard/Navigation";
import { Scanlines } from "@/components/ui/scanlines";
import { WithdrawHeist } from "@/components/withdraw/WithdrawHeist";
import { Wallet, History } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Withdraw() {
  const [showHeist, setShowHeist] = useState(false);
  const { toast } = useToast();

  const handleWithdrawSuccess = (amount: number) => {
    toast({
      title: "Withdrawal Successful! 🎉",
      description: `${amount} KES has been sent to your M-Pesa`,
      duration: 5000,
    });
    setShowHeist(false);
  };

  return (
    <div className="min-h-screen">
      <Background />
      <Scanlines />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="cyber-text-glow mb-2 text-4xl font-bold tracking-tight text-cyber-orange">
            Withdraw Funds
          </h1>
          <p className="text-muted-foreground">
            Extract your earnings from the system.
          </p>
        </div>

        <Navigation />
        
        {!showHeist ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="cyber-card group">
              <div className="flex justify-between">
                <h3 className="font-medium text-cyber-orange">Available Balance</h3>
                <Wallet className="h-4 w-4 text-cyber-orange" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current Balance</span>
                  <span className="cyber-text-glow text-cyber-orange">500 KSH</span>
                </div>
                <div className="mt-4">
                  <button 
                    onClick={() => setShowHeist(true)}
                    className="w-full rounded border border-cyber-orange bg-cyber-orange/10 px-4 py-2 text-sm font-medium text-cyber-orange transition-colors hover:bg-cyber-orange/20"
                  >
                    Initialize Withdrawal Protocol
                  </button>
                </div>
              </div>
            </div>
            
            <div className="cyber-card group">
              <div className="flex justify-between">
                <h3 className="font-medium text-cyber-orange">Recent Extractions</h3>
                <History className="h-4 w-4 text-cyber-orange" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Yesterday</span>
                  <span className="text-cyber-orange">200 KSH</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Week</span>
                  <span className="text-cyber-orange">1,000 KSH</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <WithdrawHeist
              onSuccess={handleWithdrawSuccess}
              onCancel={() => setShowHeist(false)}
            />
          </div>
        )}
      </main>
    </div>
  );
}