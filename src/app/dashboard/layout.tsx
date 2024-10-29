import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/ds-sidebar"

import Navbar from "@/components/dashboard/navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Navbar />
        <></>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}