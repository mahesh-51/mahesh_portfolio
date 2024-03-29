"use client"
import React from 'react'
import obiReactProject from "../images/obiReactProject.png";
import simcardProject from "../images/simcardProject.png";
import thcIndiaProject from "../images/thcIndiaProject.png";
import obliviousProject from "../images/obliviousProject.png";
import antigranularProject from "../images/antigranular.png";
import rlbProject from "../images/rlbProject.png";
import iClockProject from "../images/Iclock.png";
import { Image } from "@nextui-org/react";
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import { motion } from "framer-motion";
interface ProjectsArr {
  title: string;
  img: any;
  content: string;
  url: string;
  internalProject?: boolean;
  stack: string;
}

const Projects = () => {
  const ProjectsArr: ProjectsArr[] = [
    {
      title: "Vip Attraction",
      img: obiReactProject,
      content: "VIP Attractions is a world-renowned multi-award winning Airport Concierge and Lounge Service company operating lounges in Jamaica’s two international airports.",
      url: "https://obi.reliablesoftjm.com/",
      stack: "React js, Jsx, Redux, HTML and Bootstap"
    },
    {
      title: "Sim Card",
      img: simcardProject,
      content: "Sim Card is used for tourist to buy new Sim cards and provide the Sims Service to tourists people.",
      url: "",
      internalProject: true,
      stack: "Php, HTML and Bootstap"
    },
    {
      title: "Traditional Handicrafts Centre",
      img: thcIndiaProject,
      content: "A government-recognised export house, Traditional Handicrafts Centre (THC) is at the base of pure Indian culture, and the handicrafts that are its byproduct.",
      url: "https://thcindia.in/",
      stack: "Php, Codeigniter, HTML and Bootstap"
    },
    {
      title: "Oblivious",
      img: obliviousProject,
      content: "Oblivious is a cutting-edge confidential computing company that offers privacy-enhancing technology (PET) solutions for enterprise",
      url: "https://www.oblivious.com/",
      stack: "Next js, Framer-Motion, Typescript, HTML and Tailwind"
    },
  ];

  const ProjectsArr_1: ProjectsArr[] = [
    {
      title: "Antigranular",
      img: antigranularProject,
      content: "The world is full of data. Data which helps us draw insights, develop innovative solutions, and drive positive social change.",
      url: "https://www.antigranular.com/",
      stack: "React js, Framer-Motion, Typescript, HTML and Tailwind"
    },
    {
      title: "RLB Vip Attraction",
      img: rlbProject,
      content: "VIP Attractions is a world-renowned, multi-award winning Airport Concierge and Lounge Service company operating lounges in Jamaica’s two international airports.",
      url: "https://play.google.com/store/apps/details?id=com.reliable.rlbapp&hl=en-IN",
      stack: "React-Native, Typescript, HTML and Bootstap"
    },
    {
      title: "iClock (Admin Panel)",
      img: iClockProject,
      content: "This Project enhances security by acting as a secure intermediary between desktop applications and the database, mitigating direct access risks.",
      url: "http://134.209.196.204:3000/",
      internalProject: true,
      stack: "Next js, Typescript, Node js, Express js, HTML and Tailwind"
    },
  ];
  return (
    <>
      <div className='min-h-screen bg-[#DFFCF0] text-black flex items-center justify-center fontStyle' id='projects'>
        <div>
          <h1 className='text-center text-6xl py-4 text-black'>Projects</h1>
          <div className="flex max-md:flex-col justify-around">
            {ProjectsArr?.map((item, index) => (
              <div key={index} className=''>
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{
                    x: 0, opacity: 1, transition: {
                      duration: 1.6
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 1.1
                    }
                  }}
                  viewport={{ once: true }}
                  className='m-3'
                  key={index}
                >
                  <Card className="py-4 shadow-xl rounded-xl ">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <h3 className='text-xl'>{item?.title}</h3>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        isZoomed
                        className="object-cover rounded-xl"
                        src={item.img.src}
                        width={270}
                        height={270}
                      />
                      <p className='px-2 py-3' style={{ width: 270, height: 160 }}>{item?.content}</p>

                      <div className='px-2' style={{ width: 270, height: 80 }}>
                        <span className='font-bold'>Stack:</span><p className=''>{item?.stack}</p>
                      </div>
                      
                      <div className="card-actions justify-center">
                        {item?.internalProject ?
                          <p className='text-danger text-justify px-2 py-1' style={{ width: 270 }}>This project is not accessible, Due to comapny polices</p>
                          :
                          <a href={item?.url} target='_blank'>
                            <p className="rounded-full m-3 py-1 px-4 text-center bg-black text-white shadow-xl">Open</p>
                          </a>
                        }
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="flex max-md:flex-col justify-around">
            {ProjectsArr_1?.map((item, index) => (
              <div key={index}>
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{
                    x: 0, opacity: 1, transition: {
                      duration: 1.6
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 1.1
                    }
                  }}
                  viewport={{ once: true }}
                  className='m-3'
                  key={index}
                >
                  <Card className="py-4 shadow-xl rounded-xl">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <h3 className='text-xl'>{item?.title}</h3>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        isZoomed
                        className="object-cover rounded-xl"
                        src={item.img.src}
                        width={270}
                        height={280}
                      />
                      <p className='px-2 py-3' style={{width: 270, height: 160}}>{item?.content}</p>

                      <div className='px-2' style={{ width: 270, height: 80 }}>
                        <span className='font-bold'>Stack:</span><p className=''>{item?.stack}</p>
                      </div>
                      <div className="card-actions justify-center">
                        {item?.internalProject ?
                          <p className='text-danger text-justify px-2 py-1' style={{ width: 270 }}>This project is not accessible, Due to comapny polices</p>
                          :
                          <a href={item?.url} target='_blank'>
                            <p className="rounded-full m-3 py-1 px-4 text-center bg-black text-white shadow-xl">Open</p>
                          </a>
                        }
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects