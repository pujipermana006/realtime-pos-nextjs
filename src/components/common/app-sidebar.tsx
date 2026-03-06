"use client"
import { Coffee, EllipsisVertical, LogOut } from "lucide-react";
import { Sidebar, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


export default function AppSidebar() {
    const { isMobile } = useSidebar();
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuItem>
                            <div className="flex items-center gap-2 self-center font-medium">
                                <div className="bg-teal-500 p-2 items-center justify-center rounded">
                                    <Coffee className="size-4" />
                                </div>
                                Cafe Coffe

                            </div>
                        </SidebarMenuItem>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarFooter>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton size="lg">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src="" alt="" />

                                    <AvatarFallback className="rounded-lg">
                                        A
                                    </AvatarFallback>

                                </Avatar>
                                <div className="leading-tight">
                                    <h4 className="truncate font-medium">Administrator </h4>
                                    <p className="text-muted-foreground truncate text-xs">Admin</p>
                                </div>
                                <EllipsisVertical className="ml-auto size-4" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="min-w-56 rounded-lg" side={isMobile ? 'bottom' : 'right'} align="end" sideOffset={4}
                        >
                            <DropdownMenuLabel className="p-0 font-normal">
                                <div className="flex items-center gap-2 px-1 py-1">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src="" alt="" />

                                        <AvatarFallback className="rounded-lg">
                                            A
                                        </AvatarFallback>

                                    </Avatar>
                                    <div className="leading-tight">
                                        <h4 className="truncate font-medium">Administrator </h4>
                                        <p className="text-muted-foreground truncate text-xs">Admin</p>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <LogOut />
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarFooter>
        </Sidebar>
    )
}