"use client"
import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt, FaRegFilePdf } from 'react-icons/fa'
import webDev from '../images/webdev_2.png'
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion"
import { scrollDivIntoView } from '@/utils/function'

const MainSection = () => {
  const handleContactUs = () => { 
    scrollDivIntoView("contact")
  }

  const handleResume = () => { 
    
  }

  return (
    <>
      <div className='bg-[#DFFCF0] min-h-screen text-black flex items-center justify-center fontStyle' id="home">
        <div className="flex max-md:flex-col">
          <motion.div
            className='m-12 w-1/2 max-md:m-0 max-md:p-2 max-md:w-full'
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1, 
              transition: {
                duration: 1
              }
            }}
            viewport={{ once: true }}
          >
            <div className='text-center'>
              <h1 className='text-6xl'>Hey I&apos;m Mahesh Joshi</h1>
              <br />
            </div>
            <div className='text-center max-md:text-justify pt-6'>
              {/* <motion.h3
                className='text-3xl p-3'
                initial={{ y: -300, opacity: 0 }}
                animate={{
                  y: 0, opacity: 1, transition: {
                    duration: 2,
                    ease: "easeInOut",
                  }
                }}
              >
                A passionate Full Stack Software Developer 🚀 <br />
                having an experience of building Web applications.
              </motion.h3> */}
              <h3 className='text-3xl p-3'>
                A passionate Full Stack Software Developer <br />
                having an experience of building Websites and Applications.
              </h3>
            </div>
            <div className="my-3 text-center">
              <Button onClick={handleResume} radius="full" variant="shadow" className="py-2 font-semibold px-4 mx-3 my-3 border-solid border-1 border-[#262626] bg-[#D0FAEF] text-black shadow-xl">
                Resume
                <FaRegFilePdf className="mx-2" />
              </Button>
              <Button onClick={handleContactUs} radius="full" variant="shadow" className="py-2 font-semibold px-4 mx-3 border-solid border-1 border-[#262626] bg-[#D0FAEF] text-black shadow-xl">
                Contact Us
                <FaPhoneAlt className="mx-2" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0, opacity: 1, transition: {
                duration: 1
              }
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1
              }
            }}
            className='w-1/2 max-md:w-full flex justify-center'
          >
            <Image
              height={600}
              width={600}
              alt="NextUI hero Image"
              src={webDev}
              className="text-center rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default MainSection