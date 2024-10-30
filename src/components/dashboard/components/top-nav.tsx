import { MainNav } from "./main-nav";
import { Search } from "./search";
import TeamSwitcher from "./team-switcher";
import { UserNav } from "./user-nav";

const TopNav = () => {
    return ( 
        <div className="hidden flex-col md:flex">
        
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        
        </div>
     );
}
 
export default TopNav;