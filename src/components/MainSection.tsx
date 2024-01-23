"use client"
import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt, FaRegFilePdf } from 'react-icons/fa'
import webDev from '../images/webdev_2.png'
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion"

const MainSection = () => {
  return (
    <>
      <div className='bg-white min-h-screen text-black flex items-center justify-center'>
        <div className="flex max-md:flex-col">
          <motion.div
            className='p-12 w-1/2 max-md:w-full'
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0, opacity: 1, transition: {
                duration: 1
              }
            }}
          >
            <div className='text-center'>
              <motion.h1
                className='text-6xl'
                initial={{ y: -300, opacity: 0 }}
                whileInView={{
                  y: 0, opacity: 1, transition: {
                    duration: 2,
                    ease: "easeInOut",
                  }
                }}
              >Hey I&apos;m Mahesh Joshi</motion.h1> 
              <br />
            </div>
            <div className='text-center max-md:text-justify pt-6'>
              <motion.h3
                className='text-3xl p-3'
                initial={{ y: -300, opacity: 0 }}
                whileInView={{
                  y: 0, opacity: 1, transition: {
                    duration: 2,
                    ease: "easeInOut",
                  }
                }}
              >
                A passionate Full Stack Software Developer 🚀 <br />
                having an experience of building Web applications.
                {/* with JavaScript / Reactjs / Nodejs / Nextjs and some 
                other cool libraries and frameworks. */}
                {/* My expertise lies in building scalable, efficient, and maintainable web applications
                          that provide a seamless user experience. */}
              </motion.h3>
            </div>
            <div className="my-3 text-center">
              <Button radius="full" variant="shadow" className="py-2 px-4 mx-3 my-3 bg-black text-white shadow-xl">
                Resume
                <FaRegFilePdf className="mx-2" />
              </Button>
              <Button radius="full" variant="shadow" className="py-2 px-4 mx-3 bg-black text-white shadow-xl">
                Contact Us
                <FaPhoneAlt className="mx-2" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{
              x: 0, opacity: 1, transition: {
                duration: 1
              }
            }}
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 1
              }
            }}
            className='w-1/2 max-md:w-full'
          >
            <Image
              height={600}
              width={600}
              alt="NextUI hero Image"
              src={webDev}
              className="text-center"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default MainSection