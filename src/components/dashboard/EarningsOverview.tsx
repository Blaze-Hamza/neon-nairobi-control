import { Card } from "./Card";
import { Button } from "@/components/ui/button";
import { Copy, Share2, CreditCard, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function EarningsOverview() {
  const { toast } = useToast();
  const neonId = "CYBER7X";

  const copyNeonId = () => {
    navigator.clipboard.writeText(neonId);
    toast({
      title: "Neon ID Copied!",
      description: "Your unique identifier has been copied to clipboard.",
    });
  };

  return (
    <div className="space-y-8">
      {/* Neon ID Section */}
      <div className="cyber-card group">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-cyber-teal mb-2">Your Neon ID</h2>
            <div className="flex items-center gap-2">
              <code className="cyber-text-glow bg-cyber-black/50 px-4 py-2 rounded-md text-xl font-mono text-cyber-green">
                {neonId}
              </code>
              <Button
                variant="outline"
                size="icon"
                onClick={copyNeonId}
                className="hover:text-cyber-green hover:border-cyber-green"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="hover:text-cyber-pink hover:border-cyber-pink"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button
              variant="outline"
              className="hover:text-cyber-orange hover:border-cyber-orange"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Redeem
            </Button>
            <Button
              variant="outline"
              className="hover:text-cyber-teal hover:border-cyber-teal"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Upgrade
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card
          title="Today's Earnings"
          value="250 KSH"
          trend={{ value: 12.5, isPositive: true }}
        />
        <Card
          title="Weekly Earnings"
          value="1,500 KSH"
          trend={{ value: 8.2, isPositive: true }}
        />
        <Card
          title="Monthly Earnings"
          value="5,000 KSH"
          trend={{ value: 15.3, isPositive: true }}
        />
        <Card
          title="Total Referrals"
          value="2,000 KSH"
          trend={{ value: 5.7, isPositive: true }}
        />
      </div>
    </div>
  );
}