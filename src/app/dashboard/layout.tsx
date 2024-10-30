
import { AppSidebar } from "@/components/app-sidebar"
import { MainNav } from "@/components/dashboard/components/main-nav";
import TopNav from "@/components/dashboard/components/top-nav";
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        
      
        <main>
          
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

