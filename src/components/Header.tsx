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
      <nav className="bg-white font-bold font-satoshi text-sm rounded-b-md sticky">
        <div className="flex align-middle justify-between py-2 2xl:px-20 container transition-all duration-500 items-center h-[76px] rounded-b-md">
          <div onClick={() => scrollDivIntoView("home")} className="px-2 fontStyle z-10">
            <p className="text-3xl text-danger">DevsMahesh</p>
            {/* <span className="text-sm text-success">Unlocking Imagination, Sparking Brilliance</span> */}
          </div>
          <CloseIcon mode={"light"} opened={opened} setOpened={setOpened} setSelectedLink={setSelectedLink}/>

          <AnimatePresence>
            {opened && (
              <motion.div
                className={"max-lg:flex fixed w-screen left-0 h-full pt-20 top-0 justify-start items-center flex-col text-xl text-black bg-slate-50 z-9 "}
                variants={item}
                initial={{ height: 0, opacity: 0, display: "none" }}
                animate={{ height: "101vh", opacity: 1, display: "block" }}
                transition={{ duration: 0.5 }}
                exit="exit"
                onClick={() => setOpened(false)}
              >
                {menuItems.map((item, index) => (
                  <>
                    <p key={index} onClick={() => scrollDivIntoView(item?.id)} className="px-6 text-lg py-2 cursor-pointer fontStyle">{item?.title}</p>
                  </>
                ))}  
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className={"text-black font-medium flex flex-1 justify-end max-lg:hidden"}>
            {menuItems.map((item, index) => (
              <>
                <p key={index} onClick={() => scrollDivIntoView(item?.id)} className="px-6 text-xl cursor-pointer fontStyle">{item?.title}</p>
              </>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
