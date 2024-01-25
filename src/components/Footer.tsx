"use client"
import React from "react";
import { motion } from "framer-motion"

export default function Footer() {


  return (
    <>
      <div className="bg-black border-2 border-black border-t-white">
        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.6
            }
          }}
          className="text-center text-white text-3xl p-12"
        >
          Made by Mahesh Joshi ❤️
        </motion.h1>
      </div>
    </>
  );
}
