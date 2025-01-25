import { Gamepad2, Trophy } from "lucide-react";
import { Card } from "./Card";

interface Game {
  id: number;
  title: string;
  minBet: number;
  maxBet: number;
  players: number;
  type: "plinko" | "crash";
}

const games: Game[] = [
  {
    id: 1,
    title: "Cyber Plinko",
    minBet: 5,
    maxBet: 50,
    players: 128,
    type: "plinko",
  },
  {
    id: 2,
    title: "Hoverbike Crash",
    minBet: 10,
    maxBet: 100,
    players: 256,
    type: "crash",
  },
];

export function Games() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-cyber-pink cyber-text-glow">Game Arena</h2>
        <Gamepad2 className="h-6 w-6 text-cyber-pink" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {games.map((game) => (
          <div key={game.id} className="cyber-card group">
            <div className="flex justify-between">
              <h3 className="font-medium text-cyber-pink">{game.title}</h3>
              <Trophy className="h-4 w-4 text-cyber-teal" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Bet Range</span>
                <span className="text-cyber-teal">
                  {game.minBet} - {game.maxBet} KSH
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Live Players</span>
                <span className="cyber-text-glow text-cyber-pink">{game.players}</span>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full rounded border border-cyber-teal bg-cyber-teal/10 px-4 py-2 text-sm font-medium text-cyber-teal transition-colors hover:bg-cyber-teal/20">
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}