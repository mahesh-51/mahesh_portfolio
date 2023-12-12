import Image from 'next/image'
import React from 'react'
import webDev from '../images/webdev_2.png'

const page = () => {
  return (
      <main className="bg-white font-sans flex justify-center">
          <div className="flex max-md:flex-col-reverse container">
              <div className='w-3/4 max-md:w-full mt-12 flex flex-col justify-center items-center '>
                  <div className=''>
                      <h1 className='text-4xl'>Hey. I'm Someone</h1> <br />
                  </div>
                  <div className=''>
                      <p className='text-xl text-justify p-3'>
                          A passionate Full Stack Software Developer 🚀 <br />
                          having an experience of building Web applications 
                          {/* with 
                          JavaScript / Reactjs / Nodejs / Nextjs and some other cool libraries and frameworks.
                          My expertise lies in building scalable, efficient, and maintainable web applications
                          that provide a seamless user experience. */}
                      </p>
                  </div>
              </div>
              <div className='flex justify-center'>
                  <Image
                      // width={150}
                      height={600}
                      width={600}
                      alt="NextUI hero Image"
                      src={webDev}
                      className="text-center"
                  />
              </div>
          </div>
      </main>
  )
}

export default page