import { Card } from "./Card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export function Stats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card
        title="Total Revenue"
        value="$45,231.89"
        icon={<DollarSign className="h-4 w-4" />}
        trend={{ value: 20.1, isPositive: true }}
      />
      <Card
        title="Subscriptions"
        value="+2350"
        icon={<Users className="h-4 w-4" />}
        trend={{ value: 10.1, isPositive: true }}
      />
      <Card
        title="Sales"
        value="+12,234"
        icon={<CreditCard className="h-4 w-4" />}
        trend={{ value: 5.1, isPositive: false }}
      />
      <Card
        title="Active Now"
        value="+573"
        icon={<Activity className="h-4 w-4" />}
        trend={{ value: 12.5, isPositive: true }}
      />
    </div>
  );
}