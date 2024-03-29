"use client"
import React from "react";
import Image from "next/image";
import devsMahesh from "../images/DevsMaheshFooterLogo.png";
import { scrollDivIntoView } from "@/utils/function";

export default function Footer() {
  return (
    <>
      <div className="bg-black border-2 border-black border-t-white flex justify-center">
        <p className="text-4xl py-6"><span className="text-center text-[#5DDBA7] italic font-serif"> DevsMahesh </span>🚀</p>
        {/* ❤️ */}
          {/* <Image
            src={devsMahesh}
            width={200}
            alt="DevsMahesh"
            className="cursor-pointer"
            onClick={() => scrollDivIntoView("home")}
          /> */}
      </div>
    </>
  );
}
