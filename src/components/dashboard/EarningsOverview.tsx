import { Card } from "./Card";
import { Button } from "@/components/ui/button";
import { Copy, Share2, CreditCard, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

// Sample data - in a real app, this would come from an API
const generateData = (type: string) => [
  { name: "Mon", earnings: Math.floor(Math.random() * 500) },
  { name: "Tue", earnings: Math.floor(Math.random() * 500) },
  { name: "Wed", earnings: Math.floor(Math.random() * 500) },
  { name: "Thu", earnings: Math.floor(Math.random() * 500) },
  { name: "Fri", earnings: Math.floor(Math.random() * 500) },
  { name: "Sat", earnings: Math.floor(Math.random() * 500) },
  { name: "Sun", earnings: Math.floor(Math.random() * 500) },
];

type EarningsType = "video" | "task" | "betting" | "referral";
type TimeRange = "daily" | "weekly" | "monthly";

export function EarningsOverview() {
  const { toast } = useToast();
  const neonId = "CYBER7X";
  const [earningsType, setEarningsType] = useState<EarningsType>("video");
  const [timeRange, setTimeRange] = useState<TimeRange>("daily");

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

      {/* Earnings Graph */}
      <div className="cyber-card group">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-cyber-teal mb-4">Earnings Overview</h2>
          <div className="flex gap-2 mb-4">
            {["video", "task", "betting", "referral"].map((type) => (
              <Button
                key={type}
                variant={earningsType === type ? "default" : "outline"}
                onClick={() => setEarningsType(type as EarningsType)}
                className={`capitalize ${
                  earningsType === type
                    ? "bg-cyber-green text-black"
                    : "hover:text-cyber-green hover:border-cyber-green"
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
          <div className="flex gap-2">
            {["daily", "weekly", "monthly"].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                onClick={() => setTimeRange(range as TimeRange)}
                className={`capitalize ${
                  timeRange === range
                    ? "bg-cyber-teal text-black"
                    : "hover:text-cyber-teal hover:border-cyber-teal"
                }`}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={generateData(earningsType)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
              <XAxis
                dataKey="name"
                stroke="#666"
                tick={{ fill: "#666" }}
              />
              <YAxis
                stroke="#666"
                tick={{ fill: "#666" }}
                tickFormatter={(value) => `${value} KSH`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0A0A0A",
                  border: "1px solid #00FF88",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#00FF88" }}
              />
              <Line
                type="monotone"
                dataKey="earnings"
                stroke="#00FF88"
                strokeWidth={2}
                dot={{ fill: "#00FF88", strokeWidth: 2 }}
                activeDot={{
                  fill: "#00FF88",
                  stroke: "#000",
                  strokeWidth: 2,
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
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