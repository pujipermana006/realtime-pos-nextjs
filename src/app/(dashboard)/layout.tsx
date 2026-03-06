import AppSidebar from "@/components/common/app-sidebar";
import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { SidebarInset, SidebarProvider, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="overvlow-x-hidden">
                <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex item-center gap-2 px-4">
                        <SidebarTrigger className="cursor-pointer" />
                        <SidebarSeparator orientation='vertical' className="mr-2 data-[orientation=vertical]:h-4" />
                    </div>
                    <div className="px-4">
                        <DarkmodeToggle />
                    </div>
                </header>
                <main className="flex flex-1 flex-col items-start gap-4 p-4 pt-0">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}