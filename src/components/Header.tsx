"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { scrollDivIntoView } from "@/utils/function";
import Image from "next/image";
import { AnimatePresence, MotionConfig } from "framer-motion";
import CloseIcon from "./Nav-Close-Icon";
import { motion } from "framer-motion";
import devsMahesh from "../images/DevsMeh.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedLink , setSelectedLink]  = useState("");
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);

  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeIn",
        duration: 0.5,
      }
    }
}

  const menuItems = [
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

  return (
    <>
      <nav className="py-2 font-bold font-satoshi text-sm rounded-b-md">
        <div className="flex align-middle justify-between py-2 2xl:px-20 container transition-all duration-500 items-center h-[76px] rounded-b-md">
          <Link href="/" className='z-10'>
            <Image
              src={devsMahesh}
              width={225}
              // height={24}
              alt="Mahesh"
            />
          </Link>
          <CloseIcon mode={"light"} opened={opened} setOpened={setOpened} setSelectedLink={setSelectedLink}/>

          <AnimatePresence>
            {opened && (
              <motion.div
                className={"max-lg:flex fixed w-screen left-0 h-full pt-32 top-0 justify-start items-center flex-col text-xl text-white bg-black z-9 "}
                variants={item}
                initial={{ height: 0, opacity: 0, display: "none" }}
                animate={{ height: "101vh", opacity: 1, display: "block" }}
                transition={{ duration: 0.5 }}
                exit="exit"
                onClick={() => setOpened(false)}
              >
                {menuItems.map((item, index) => (
                  <>
                    <p onClick={() => scrollDivIntoView(item?.id)} className="px-6 cursor-pointer fontStyle">{item?.title}</p>
                  </>
                ))}  
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className={"text-baseBlack text-sm flex flex-1 justify-end max-lg:hidden"}>
            {menuItems.map((item, index) => (
              <>
                <p onClick={() => scrollDivIntoView(item?.id)} className="px-6 cursor-pointer">{item?.title}</p>
              </>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
