"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";

const Navbar = () => {
  const pathname = usePathname();

  const {isDarkMode, toggleTheme}: any = useContext(ThemeContext);
  return (
    <header className={`py-4 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : ''}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="font-bold text-xl hover:text-red-500">
          <Link href="/">News Portal</Link>
        </div>
        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/news" className={`hover:text-red-500 ${pathname === '/news' ? 'text-red-500 font-semibold' : ''}`}>
                News
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/services"
                className="hover:text-red-500"
              >
                <NavigationMenuTrigger className={`hover:text-red-500 ${pathname === '/services' ? 'text-red-500 font-semibold' : ''}`}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                    <li className="hover:text-pink-600">
                      <NavigationMenuLink href="/services/web">
                        Web Devlopment
                      </NavigationMenuLink>
                    </li>
                    <li className="hover:text-pink-600">
                      <NavigationMenuLink href="/services/software">
                        Software Devlopment
                      </NavigationMenuLink>
                    </li>
                    <li className="hover:text-pink-600">
                      <NavigationMenuLink href="/services/desktop">
                        Desktop Devlopment
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>
              <NavigationMenuLink href="/about" className={`hover:text-red-500 ${pathname === '/about' ? 'text-red-500 font-semibold' : ''}`}>
                About
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/contact"
                className={`hover:text-red-500 ${pathname === '/contact' ? 'text-red-500 font-semibold' : ''}`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switch and login menu */}
        <div className="hidden lg:flex items-center space-x-4">
          <div onClick={toggleTheme} className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>
        {/* mibile hamber menu */}
        <MobileMenu/>
      </nav>
    </header>
  );
};

export default Navbar;
