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
    
  } from "@/components/ui/sidebar"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
// import { CollapsibleDemo } from "../collapse"
import SbFooter from "./sidebar/sidebar-footer"


const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]

  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader>
            <Card className="">
                <CardHeader>
                    <CardTitle>Mugenhub</CardTitle>
                </CardHeader>
            </Card>
        </SidebarHeader>
        <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
            <SbFooter />
        </SidebarFooter>
        
      </Sidebar>
    )
  }
  