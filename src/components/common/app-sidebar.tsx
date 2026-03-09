"use client"
import { Coffee, EllipsisVertical, LogOut } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SIDEBAR_MENU_LIST, SidebarMenuKey } from "@/constants/sidebar-contstant";


export default function AppSidebar() {
    const { isMobile } = useSidebar();
    const profile = {
        name: 'puji',
        role: 'admin',
        avatar_url: 'test.com'
    }
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
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SIDEBAR_MENU_LIST[profile.role as SidebarMenuKey]?.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild tooltip={item.title}>
                                        <a href="item.url">
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                        </a>

                                    </SidebarMenuButton>
                                </SidebarMenuItem>




                            ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
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