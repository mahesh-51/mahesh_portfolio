import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt, FaRegFilePdf } from 'react-icons/fa'
import webDev from '../images/webdev_2.png'
import {Button} from "@nextui-org/react";

const MainSection = () => {
  return (
    <>
      <div className='bg-white min-h-screen text-black flex items-center'>
        <div className="flex max-md:flex-col w-100">
          <div className='p-12 w-50 '>
            <div className='text-center'>
              <h1 className='text-6xl'>Hey!! I&apos;m Mahesh Joshi</h1> <br />
            </div>
            <div className='text-center max-md:text-justify pt-6'>
              <h3 className='text-3xl p-3'>
                A passionate Full Stack Software Developer 🚀 <br />
                having an experience of building Web applications.
                {/* with JavaScript / Reactjs / Nodejs / Nextjs and some 
                other cool libraries and frameworks. */}
                          {/* My expertise lies in building scalable, efficient, and maintainable web applications
                          that provide a seamless user experience. */}
              </h3>
            </div>
            <div className="my-3 text-center">
              <Button radius="full" variant="shadow" className="p-3 mx-3 bg-black text-white">
                Resume
                <FaRegFilePdf />
              </Button>
              <Button radius="full" variant="shadow" className="p-3 mx-3 bg-black text-white">
                Contact Us
                <FaPhoneAlt />
              </Button>
            </div>
          </div>
          <div className='w-50'>
            <Image
              height={600}
              width={600}
              alt="NextUI hero Image"
              src={webDev}
              className="text-center"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection