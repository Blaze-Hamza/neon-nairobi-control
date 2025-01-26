import { useState, useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface WithdrawHeistProps {
  onSuccess: (amount: number) => void;
  onCancel: () => void;
}

export function WithdrawHeist({ onSuccess, onCancel }: WithdrawHeistProps) {
  const [stage, setStage] = useState<"start" | "game" | "keypad" | "success">("start");
  const [amount, setAmount] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const droneRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Animation setup
  useEffect(() => {
    if (stage === "game" && droneRef.current) {
      gsap.to(droneRef.current, {
        x: "random(-100, 100)",
        y: "random(-50, 50)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, [stage]);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (stage !== "game") return;
    
    // Simple drone dodge game logic
    const key = e.key;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
      toast({
        title: "Drone Dodged! 🚁",
        description: "Keep moving msee!",
        duration: 1000,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [stage]);

  const startHeist = () => {
    setStage("game");
    toast({
      title: "Heist Started! 🎮",
      description: "Use arrow keys to dodge the drones!",
      variant: "default",
    });
  };

  const handleWithdraw = () => {
    if (!amount || isNaN(Number(amount))) {
      toast({
        title: "Eish! Invalid amount msee! 😅",
        description: "Enter a valid amount in KES",
        variant: "destructive",
      });
      return;
    }

    gsap.to(containerRef.current, {
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        setStage("success");
        setTimeout(() => {
          onSuccess(Number(amount));
        }, 2000);
      }
    });
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[400px] w-full max-w-lg mx-auto bg-cyber-black/90 rounded-lg p-6 border border-cyber-green/30"
    >
      {stage === "start" && (
        <div className="space-y-6 text-center">
          <h3 className="text-2xl font-bold text-cyber-green">
            M-Pesa Heist Protocol
          </h3>
          <p className="text-cyber-teal/80">
            Ready to hack the system? 🎮
          </p>
          <Button
            onClick={startHeist}
            className="w-full bg-cyber-green/20 hover:bg-cyber-green/30 text-cyber-green border border-cyber-green/50"
          >
            Initialize Heist Sequence
          </Button>
        </div>
      )}

      {stage === "game" && (
        <div className="relative h-[300px] overflow-hidden">
          <div 
            ref={droneRef}
            className="absolute w-12 h-12 bg-cyber-orange/20 rounded-full border border-cyber-orange animate-pulse"
          >
            <span className="absolute inset-0 flex items-center justify-center text-xs text-cyber-orange">
              CBK
            </span>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <Input
              type="number"
              placeholder="Enter Amount (KES)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="max-w-[200px] mx-auto bg-cyber-black/50 text-cyber-green border-cyber-green/30"
            />
            <div className="mt-4 space-x-4">
              <Button
                onClick={handleWithdraw}
                className="bg-cyber-green/20 hover:bg-cyber-green/30 text-cyber-green border border-cyber-green/50"
              >
                Hack & Withdraw
              </Button>
              <Button
                onClick={onCancel}
                variant="outline"
                className="border-cyber-orange/50 text-cyber-orange hover:bg-cyber-orange/10"
              >
                Abort Mission
              </Button>
            </div>
          </div>
        </div>
      )}

      {stage === "success" && (
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-cyber-green animate-pulse">
            MPESA LOADED! 🔥
          </h3>
          <p className="text-cyber-teal">
            {amount} KES successfully extracted!
          </p>
          <div className="py-8">
            <div className="animate-float">
              💸
            </div>
          </div>
        </div>
      )}
    </div>
  );
}