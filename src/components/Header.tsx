"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { scrollDivIntoView } from "@/utils/function";
import Image from "next/image";
import { AnimatePresence, MotionConfig } from "framer-motion";
import CloseIcon from "./Nav-Close-Icon";
import { motion } from "framer-motion";
import devsMahesh from "../images/DevsMeh.png";
interface MenuItems {
  title: string;
  url: string;
  id: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [selectedLink, setSelectedLink] = useState("");
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeIn",
        duration: 0.5,
      }
    }
  }

  const menuItems: MenuItems[] = [
    {
      title: "Home",
      url: "home",
      id: "home"
    },
    {
      title: "Skills",
      url: "skills",
      id: "skills"
    },
    {
      title: "Projects",
      url: "projects",
      id: "projects"
    },
    {
      title: "Contact",
      url: "contact",
      id: "contact"
    },
  ];

  const handleMenu = (item: MenuItems) => {
    scrollDivIntoView(item?.id);
  }

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-white text-black"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-2xl text-danger">DevsMahesh</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8" justify="start">
          <NavbarBrand>
            <p className="font-bold text-2xl text-danger">DevsMahesh</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="gap-8" justify="end">
          <NavbarItem className="hidden lg:flex cursor-pointer" onClick={() => scrollDivIntoView("home")}>
            Home
          </NavbarItem>
          <NavbarItem className="hidden lg:flex cursor-pointer" onClick={() => scrollDivIntoView("skills")}>
            Skills
          </NavbarItem>
          <NavbarItem className="hidden lg:flex cursor-pointer" onClick={() => scrollDivIntoView("projects")}>
            Projects
          </NavbarItem>
          <NavbarItem>
            <Button onClick={() =>{scrollDivIntoView("contact")}} radius="full" className="bg-black text-white" as={Link} variant="flat">
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu onClick={() => setIsMenuOpen(false)}>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} >
                <Link
                  className="w-full"
                  color={"foreground"}
                  size="lg"
                  onClick={() => handleMenu(item)}
                >
                  {item?.title}
                </Link>
            </NavbarMenuItem>
          ))} 
        </NavbarMenu>
      </Navbar>
    </>
  );
}
