import Image from 'next/image'
import React from 'react'
import webDev from '../images/webdev_2.png'
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { FaPhoneAlt, FaRegFilePdf } from "react-icons/fa";
import obiReactProject from "../images/obiReactProject.png";
import simcardProject from "../images/simcardProject.png";
import thcIndiaProject from "../images/thcIndiaProject.png";

const page = () => {
  return (
      <>
          <main className="bg-white font-sans flex justify-center">
              <div className="flex max-md:flex-col-reverse container">
                  <div className='w-3/4 max-md:w-full mt-12 flex flex-col justify-center items-center '>
                      <div className=''>
                          <h1 className='text-4xl'>Hey. I'm Mahesh Joshi</h1> <br />
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
                      <div className="flex gap-4 ">

                          <button className="bg-transparent hover:bg-blue-500  text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center">
                              <span className='mr-1'>Resume</span>
                              <FaRegFilePdf />
                          </button>
                          <button className="bg-transparent hover:bg-blue-500  text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center">
                              <span className='mr-2'>Contact Us</span>
                              <FaPhoneAlt />
                          </button>
                      </div>
                  </div>
                  <div className='flex justify-center'>
                      <Image
                          height={600}
                          width={600}
                          alt="NextUI hero Image"
                          src={webDev}
                          className="text-center"
                      />
                  </div>
              </div>
              <hr />
          </main>
          <main className="bg-dark font-sans">
            <h1 className='flex justify-center text-4xl my-2'>Projects</h1>
              <div className='max-md:flex-col conatiner flex justify-around'>
                  <Card isFooterBlurred className="flex max-md:flex-col m-5 border border-1 rounded">
                      <Image
                          alt="obiReact"
                          className="z-0 w-full h-full object-cover"
                          src={obiReactProject}
                      />
                      <div className='flex items-center bg-indigo-300'>
                          <div className="flex max-md:flex-col my-1">
                              <Image
                                  alt="obiReact"
                                  className="rounded-full w-10 h-11 bg-black"
                                  src={obiReactProject}
                              />
                              <div className="flex flex-col ml-2">
                                  <p className="text-tiny">Lounge Booking Website</p>
                                  <p className="text-tiny">Lounge Booking for guests!</p>
                              </div>
                          </div>
                      </div>
                      <button className="bg-transparent hover:bg-blue-500  text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center justify-center">
                          View
                      </button>
                  </Card>
                  <Card isFooterBlurred className="flex max-md:flex-col m-5 border border-1 rounded">
                      <Image
                          alt="obiReact"
                          className="z-0 w-full h-full object-cover"
                          src={simcardProject}
                      />
                      <div className='flex items-center bg-indigo-300'>
                          <div className="flex max-md:flex-col my-1">
                              <Image
                                  alt="obiReact"
                                  className="rounded-full w-10 h-11 bg-black"
                                  src={simcardProject}
                              />
                              <div className="flex flex-col ml-2">
                                  <p className="text-tiny">Simcard Website</p>
                                  <p className="text-tiny">Refurbhised Simcard</p>
                              </div>
                          </div>
                      </div>
                      <button className="bg-transparent hover:bg-blue-500  text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center justify-center">
                          View
                      </button>
                  </Card>
                  <Card isFooterBlurred className="flex max-md:flex-col m-5 border border-1 rounded">
                      <Image
                          alt="obiReact"
                          className="z-0 w-full h-full object-cover"
                          src={thcIndiaProject}
                      />
                      <div className='flex items-center bg-indigo-300'>
                          <div className="flex max-md:flex-col my-1">
                              <Image
                                  alt="obiReact"
                                  className="rounded-full w-10 h-11 bg-black"
                                  src={thcIndiaProject}
                              />
                              <div className="flex flex-col ml-2">
                                  <p className="text-tiny">Handicraft</p>
                                  <p className="text-tiny">Handicraft market website</p>
                              </div>
                          </div>
                      </div>
                      <button className="bg-transparent hover:bg-blue-500  text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center justify-center">
                          View
                      </button>
                  </Card>
              </div>
          </main>
      </>
  )
}

export default page