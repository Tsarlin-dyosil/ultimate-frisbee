import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  Home,
  History,
  Settings as SettingsIcon,
  LogOut,
} from "lucide-react";
import  Button from "./ui/Button.jsx";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu.jsx";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu.jsx";

const Header = ({
  title = "Ultimate Scorekeeper",
  onNavigate = () => {},
  userRole = null,
  username = "",
  onLogout = () => {},
}) => {
  return (
    <header className="w-full h-20 bg-primary text-primary-foreground shadow-md flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        {userRole && (
          <span className="bg-primary-foreground/20 text-primary-foreground text-xs px-2 py-1 rounded-full">
            {userRole === "head-marshall" ? "Head Marshall" : "Marshall"}
          </span>
        )}
        {username && (
          <span className="bg-primary-foreground/10 text-primary-foreground text-xs px-2 py-1 rounded-full ml-2">
            {username}
          </span>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-foreground/10 rounded-md cursor-pointer"
                onClick={() => onNavigate("/")}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-foreground/10 rounded-md cursor-pointer"
                onClick={() => onNavigate("/history")}
              >
                <History className="mr-2 h-4 w-4" />
                Game History
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-foreground/10 rounded-md cursor-pointer"
                onClick={() => onNavigate("/settings")}
              >
                <SettingsIcon className="mr-2 h-4 w-4" />
                Settings
              </NavigationMenuLink>
            </NavigationMenuItem>
            {username && (
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-foreground/10 rounded-md cursor-pointer"
                  onClick={onLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onNavigate("/")}>  
              <Home className="mr-2 h-4 w-4" />
              Home
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onNavigate("/history")}>  
              <History className="mr-2 h-4 w-4" />
              Game History
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onNavigate("/settings")}>  
              <SettingsIcon className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            {username && (
              <DropdownMenuItem onClick={onLogout}>  
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
