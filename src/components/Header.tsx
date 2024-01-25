"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { scrollDivIntoView } from "@/utils/function";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      title: "Home",
      url: "home"
    },
    {
      title: "Projects",
      url: "projects"
    },
    {
      title: "Skills",
      url: "skills"
    },
    {
      title: "Contact",
      url: "contact"
    },
  ];

  return (
    <>
      <Navbar className="flex bg-black text-white p-3 border-2 border-black border-b-white" shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent >
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="flex-none" >
            <p className="font-bold text-inherit">LOGO</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="text-white" >
          <NavbarItem className="hidden lg:flex">
            <Link className="text-white" href="">Heading</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="text-white" >
          <NavbarItem className="hidden lg:flex">
            <p className="tetx-white cursor-pointer"> Home</p>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <p className="tetx-white cursor-pointer" onClick={() => scrollDivIntoView("projects")}> Projects</p>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <p className="tetx-white cursor-pointer" onClick={() => scrollDivIntoView("skills")}> Skills</p>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <p className="tetx-white cursor-pointer" onClick={() => scrollDivIntoView("contact")}> Contact</p>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="my-6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {/* <Link
                color={"foreground"}
                className="w-full"
                href={item?.url}
                size="lg"
              >
                {item?.title}
              </Link> */}
              <p
                className="text-black cursor-pointer"
                onClick={() => scrollDivIntoView(item?.url)}
              >
                 {item?.title}
              </p>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

      </Navbar>
    </>

  );
}
