"use client"
import { Button, Divider, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <>
      <div className='min-h-80 bg-slate-200 text-black p-10 ' id='contact'>
        <h1 className='text-center text-6xl py-4 text-black'>Contact Me</h1>
        <div className='flex'>
          <div className='w-1/2'>
            <motion.h3
              initial={{ x: -300, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.6
                }
              }}
              className='text-small text-2xl p-4'>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</motion.h3>
            <div className='py-10'>
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.6
                  }
                }}
                className='px-4 py-2'>
                <Link
                  href="mailto:mahesh.mentem51@gmail.com"
                  className='text-xl'
                >
                  <span className='text-2xl'>Mail: </span>mahesh.mentem51@gmail.com
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.6
                  }
                }}
                className='text-xl px-4 py-2'>
                <span className='text-2xl'>Contact: </span>8806920771
              </motion.div>
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.6
                  }
                }}
                className='text-xl px-4 py-2'>
                <span className='text-2xl'>Address: </span>Jodhpur(RAJ), India.
              </motion.div>
            </div>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.6
                }
              }}
              className="flex h-5 items-center space-x-4 my-4 p-4 max-md:justify-center">
              <Link href="https://github.com/mahesh-51" className='text-3xl' >
                <FaGithub />
              </Link>
              <Divider orientation="vertical" />
              <Link href="https://www.linkedin.com/in/mahesh-joshi-37b5ab222/" className='text-3xl' >
                <FaLinkedinIn />
              </Link>
              <Divider orientation="vertical" />
              <Link href="#" className='text-3xl' >
                <FaInstagram />
              </Link>
              <Divider orientation="vertical" />
              <Link href="https://discord.com/users/865955210954276864" className='text-3xl' >
                <FaDiscord />
              </Link>
            </motion.div>
          </div>
          <div className='w-1/2'>
            <motion.h1
              initial={{ x: 300, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.6
                }
              }} 
              className='text-center text-3xl'
            >Lets Connect</motion.h1>
            <div className="flex justify-center">
              <div className='w-72'>
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.6
                    }
                  }}
                  className='w-5/5 py-4'
                >
                  <Input className='' type="text" label="Name" />
                </motion.div>
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.6
                    }
                  }}
                  className='w-5/5 py-4'
                >
                  <Input className='' type="text" label="Contact" />
                </motion.div>
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.6
                    }
                  }}
                  className='w-5/5 py-4'
                >
                  <Input className='' type="email" label="Mail" />
                </motion.div>
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.6
                    }
                  }}
                  className='text-center'
                >
                  <Button radius='full' className='shadow-xl text-white bg-black py-2 px-4'>
                    Submit
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact