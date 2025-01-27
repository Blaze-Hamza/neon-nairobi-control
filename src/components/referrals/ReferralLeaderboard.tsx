import { Trophy, Medal, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface LeaderboardEntry {
  rank: number;
  username: string;
  referrals: number;
  earnings: number;
  avatar: string;
}

const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    username: "CyberKing",
    referrals: 45,
    earnings: 12500,
    avatar: "/avatars/cyber-samurai.png",
  },
  {
    rank: 2,
    username: "NeonHunter",
    referrals: 38,
    earnings: 9800,
    avatar: "/avatars/neon-warrior.png",
  },
  {
    rank: 3,
    username: "ByteMaster",
    referrals: 32,
    earnings: 8200,
    avatar: "/avatars/digital-nomad.png",
  },
];

export function ReferralLeaderboard() {
  return (
    <div className="cyber-card group">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-cyber-teal">Neon Grid Leaderboard</h2>
        <div className="text-sm text-muted-foreground">Monthly Rankings</div>
      </div>

      <div className="overflow-hidden rounded-lg border border-cyber-green/20">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Rank</TableHead>
              <TableHead>Hacker</TableHead>
              <TableHead className="text-right">Referrals</TableHead>
              <TableHead className="text-right">Earnings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((entry) => (
              <TableRow key={entry.rank}>
                <TableCell>
                  <div className="flex items-center">
                    {entry.rank === 1 ? (
                      <Trophy className="h-4 w-4 text-yellow-500" />
                    ) : entry.rank === 2 ? (
                      <Medal className="h-4 w-4 text-gray-400" />
                    ) : entry.rank === 3 ? (
                      <Award className="h-4 w-4 text-amber-600" />
                    ) : (
                      entry.rank
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src={entry.avatar}
                      alt={entry.username}
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="font-medium">{entry.username}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono">
                  {entry.referrals}
                </TableCell>
                <TableCell className="text-right font-mono text-cyber-green">
                  {entry.earnings} KSH
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}