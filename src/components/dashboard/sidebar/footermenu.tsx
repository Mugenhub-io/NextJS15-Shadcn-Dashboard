import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import TinyProfile from "../profile/tinyprofile";

  const FootMenu = () => {
    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
    
        <TinyProfile />
        
    </DropdownMenuTrigger>
  <DropdownMenuContent side="right">
    <DropdownMenuLabel><TinyProfile /></DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    </DropdownMenuGroup>
    
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
    <DropdownMenuSeparator />
        <DropdownMenuItem>
          {/* <LogOut /> */}
          <span>Log out</span>
        </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
     );
  }
   
  export default FootMenu;