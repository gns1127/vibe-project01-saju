"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  FileText,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const navItems = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { title: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
      { title: "Reports", href: "/dashboard/reports", icon: FileText },
    ],
  },
  {
    title: "Management",
    items: [
      { title: "Users", href: "/dashboard/users", icon: Users },
      { title: "Settings", href: "/dashboard/settings", icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">
            MyStarter
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.title}
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          v1.0.0
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
