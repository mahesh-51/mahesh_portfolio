"use client"
import { Button, Divider, Input, Textarea } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { motion } from "framer-motion"
import Image from 'next/image'
import devImage from "@/images/image_2.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {

  function sendEmail(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    emailjs
      .sendForm("service_2zr516o", "template_kyja9tc", e.target, "w302HfaiYg6KI0qvu")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className='min-h-screen bg-white text-black p-10 fontStyle' id='contact'>
        <div>
          <h1 className='text-center text-6xl py-4 text-black'>Let&apos;s Talk</h1>
          <div className='flex max-md:flex-col'>
            <div className=''>
              <motion.h3
                initial={{ x: -150, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.6
                  }
                }}
                viewport={{ once: true }}
                className='text-small pt-2'>
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
              </motion.h3>
              <div className='py-10'>
                <motion.h1
                  initial={{ x: -150, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 1.6
                    }
                  }}
                  viewport={{ once: true }}
                  className='text-start text-3xl'
                >Get in touch via the form below, or by emailing
                  <Link
                    href="mailto:mahesh.mentem51@gmail.com"
                    className='text-xl'
                    target='_blank'
                  >
                    <span className='text-danger'> Mahesh.Mentem51@gmail.com</span>
                  </Link>
                </motion.h1>
                <div className="flex">
                  <div className='w-96 max-md:w-full'>
                    <form onSubmit={sendEmail}>
                      <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            duration: 1.6
                          }
                        }}
                        viewport={{ once: true }}
                        className='py-4'
                      >
                        <Input className='' placeholder='Please Enter your Name' type="text" label="Name" name='name' id='name' />
                      </motion.div>
                      <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            duration: 1.6
                          }
                        }}
                        viewport={{ once: true }}
                        className='py-4'
                      >
                        <Input className='' placeholder='Please Enter your phone Number' name='number' id='number' type="text" label="Phone Number" />
                      </motion.div>
                      <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            duration: 1.6
                          }
                        }}
                        viewport={{ once: true }}
                        className='py-4'
                      >
                        <Input className='' placeholder='Please Enter your Email' type="email" label="E-Mail" name='email' id='email'/>
                      </motion.div>
                      <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            duration: 1.6
                          }
                        }}
                        viewport={{ once: true }}
                        className='py-4'
                      >
                        <Textarea
                          label="Message"
                          placeholder="Enter your description"
                          className=""
                          name='message' id='message'
                        />
                      </motion.div>

                      <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            duration: 1.6
                          }
                        }}
                        viewport={{ once: true }}
                        className=''
                      >
                        <Button type="submit" radius='full' className='shadow-xl w-96 max-md:w-full text-white font-medium bg-black py-2 px-4'>
                          Submit
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.6
                  }
                }}
                viewport={{ once: true }}
                className="flex h-5 items-center space-x-4 my-4 p-4 max-md:justify-center">
                <Link href="https://github.com/mahesh-51" target='_blank' className='text-3xl' >
                  <FaGithub />
                </Link>
                <Divider orientation="vertical" />
                <Link href="https://www.linkedin.com/in/mahesh-joshi-37b5ab222/" target='_blank' className='text-3xl' >
                  <FaLinkedinIn />
                </Link>
                <Divider orientation="vertical" />
                <Link href="https://www.instagram.com/maheshjoshi___/" className='text-3xl' target='_blank' >
                  <FaInstagram />
                </Link>
                <Divider orientation="vertical" />
                <Link href="https://discord.com/users/865955210954276864" target='_blank' className='text-3xl' >
                  <FaDiscord />
                </Link>
              </motion.div>
            </div>
            <div className='flex justify-center max-md:hidden'>
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.6
                  }
                }}
                viewport={{ once: true }}
                >
                <Image
                  src={devImage}
                  width={700}
                  alt='Image'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact