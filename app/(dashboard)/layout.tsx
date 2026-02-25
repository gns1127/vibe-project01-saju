import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/sidebar-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-4 border-b border-border/40 bg-background px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-6" />
          <div className="flex flex-1 items-center justify-end">
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
