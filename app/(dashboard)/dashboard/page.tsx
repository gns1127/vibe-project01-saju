import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
};

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "+2,350",
    change: "+180.1% from last month",
    icon: Users,
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19% from last month",
    icon: ShoppingCart,
  },
  {
    title: "Growth",
    value: "+573",
    change: "+201 from last month",
    icon: TrendingUp,
  },
];

const recentActivity = [
  { name: "Alice Johnson", action: "Created new project", time: "2m ago", avatar: "AJ" },
  { name: "Bob Smith", action: "Deployed to production", time: "15m ago", avatar: "BS" },
  { name: "Carol White", action: "Reviewed pull request", time: "1h ago", avatar: "CW" },
  { name: "David Brown", action: "Updated documentation", time: "3h ago", avatar: "DB" },
  { name: "Eve Davis", action: "Fixed critical bug", time: "5h ago", avatar: "ED" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s what&apos;s happening with your project.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your team&apos;s latest actions across the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.name} className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={undefined} alt={activity.name} />
                    <AvatarFallback className="text-xs">
                      {activity.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.action}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Overview</CardTitle>
            <CardDescription>Status at a glance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">System Status</span>
              <Badge variant="secondary" className="text-green-600 bg-green-100 dark:bg-green-900/30">
                Operational
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Deployment</span>
              <Badge variant="secondary">Production</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Version</span>
              <Badge variant="outline">v1.0.0</Badge>
            </div>
            <div className="space-y-2 pt-2">
              <p className="text-sm font-medium">Loading states demo</p>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
