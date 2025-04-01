"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOutIcon, VideoIcon } from "lucide-react"

import { Separator } from "@/components/ui/separator";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem
} from "@/components/ui/sidebar"

import { StudioSidebarHeader } from "./studio-sidebar-header";

export const StudioSidebar = () => {
  const pathname = usePathname();
  
  return (
    <Sidebar className="pt-16 z-40" collapsible="icon">
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarMenu>
            <StudioSidebarHeader />
            <SidebarMenuItem>
              <SidebarMenuButton isActive={pathname === "/studio"} tooltip="Exit studio" asChild>
                <Link prefetch href="/studio">
                  <VideoIcon className="size-5" />
                  <span className="text-sm">Content</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <Separator />
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Exit studio" asChild>
                <Link prefetch href="/">
                  <LogOutIcon className="size-5" />
                  <span className="text-sm">Exit studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}