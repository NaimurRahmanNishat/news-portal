"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden">
        <Button onClick={toggleMenu} variant="outline">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </Button>
        {isOpen && (
          <nav className="absolute top-16 right-0 w-full h-screen bg-slate-100 z-10">
            <div className="p-4 h-full items-center mx-[45%] justify-center">
              <NavigationMenu className="w-full">
                <NavigationMenuList className="flex flex-col items-center space-y-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/news"
                      className={`hover:text-red-500 ${
                        pathname === "/news" ? "text-red-500 font-semibold" : ""
                      }`}
                    >
                      News
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/services" className="hover:text-red-500">
                      <NavigationMenuTrigger
                        className={`hover:text-red-500 ${
                          pathname === "/services" ? "text-red-500 font-semibold" : ""
                        }`}
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                          <li className="hover:text-pink-600">
                            <NavigationMenuLink href="/services/web">
                              Web Development
                            </NavigationMenuLink>
                          </li>
                          <li className="hover:text-pink-600">
                            <NavigationMenuLink href="/services/software">
                              Software Development
                            </NavigationMenuLink>
                          </li>
                          <li className="hover:text-pink-600">
                            <NavigationMenuLink href="/services/desktop">
                              Desktop Development
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/about"
                      className={`hover:text-red-500 ${
                        pathname === "/about" ? "text-red-500 font-semibold" : ""
                      }`}
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/contact"
                      className={`hover:text-red-500 ${
                        pathname === "/contact" ? "text-red-500 font-semibold" : ""
                      }`}
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default MobileMenu;