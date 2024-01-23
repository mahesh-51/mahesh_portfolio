import { Divider, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <div className='min-h-80 bg-slate-200 text-black p-10 ' id='contact'>
        <h1 className='text-center text-6xl py-4 text-black'>Contact Me</h1>
        <div className='flex w-100'>
          <div className='w-50'>
            <h3 className='text-small text-2xl p-4'>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</h3>
            <div className='py-10'>
              <div className='px-4 py-2'>
                <Link
                  href="mailto:mahesh.mentem51@gmail.com"
                  className='text-xl'
                >
                  <span className='text-2xl'>Mail: </span>mahesh.mentem51@gmail.com
                </Link>
              </div>
              <div className='text-xl px-4 py-2'>
                <span className='text-2xl'>Contact: </span>8806920771
              </div>
              <div className='text-xl px-4 py-2'>
                <span className='text-2xl'>Address: </span>Jodhpur(RAJ), India.
              </div>
            </div>
            <div className="flex h-5 items-center space-x-4 my-4 p-4 max-md:justify-center">
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
            </div>
          </div>
          {/* <div className='w-50'>
            <div className="w-full">
              <Input type="text" label="Name" />
              <Input type="text" label="Contact" />
              <Input type="email" label="Mail" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Contact