import { ListTodo, Trophy } from "lucide-react";
import { Card } from "./Card";
import { Progress } from "@/components/ui/progress";

interface Task {
  id: number;
  title: string;
  reward: number;
  progress: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Complete Survey: Tech Usage",
    reward: 15,
    progress: 60,
    difficulty: 2,
  },
  {
    id: 2,
    title: "Watch Product Review",
    reward: 5,
    progress: 30,
    difficulty: 1,
  },
  {
    id: 3,
    title: "Market Research Survey",
    reward: 25,
    progress: 0,
    difficulty: 3,
  },
];

export function Tasks() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-cyber-green cyber-text-glow">Available Tasks</h2>
        <ListTodo className="h-6 w-6 text-cyber-green" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div key={task.id} className="cyber-card group">
            <div className="flex justify-between">
              <h3 className="font-medium text-cyber-green">{task.title}</h3>
              <span className="text-sm text-cyber-orange">
                Risk Level: {task.difficulty}/5
              </span>
            </div>
            <div className="mt-4">
              <Progress value={task.progress} className="h-2" />
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{task.progress}% Complete</span>
                <span className="cyber-text-glow text-cyber-green">+{task.reward} KSH</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}