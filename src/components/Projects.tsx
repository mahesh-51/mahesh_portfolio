"use client"
import React from 'react'
import obiReactProject from "../images/obiReactProject.png";
import simcardProject from "../images/simcardProject.png";
import thcIndiaProject from "../images/thcIndiaProject.png";
import obliviousProject from "../images/obliviousProject.png";
import { Image } from "@nextui-org/react";
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import { motion } from "framer-motion"

const Projects = () => {
  const ProjectsArr = [
    {
      title: "Vip Attraction",
      img: obiReactProject,
      content: "Content",
      url: "https://obi.reliablesoftjm.com/"
    },
    {
      title: "Refurbhised SimCard",
      img: simcardProject,
      content: "Content",
      url: ""
    },
    {
      title: "HandiCraft",
      img: thcIndiaProject,
      content: "Content",
      url: "https://thcindia.in/"
    },
    {
      title: "Oblivious",
      img: obliviousProject,
      content: "Content",
      url: "https://www.oblivious.com/"
    },
  ];
  const ProjectsArr_1 = [
    {
      title: "Vip Attraction",
      img: obiReactProject,
      content: "Content",
      url: ""
    },
    {
      title: "Refurbhised SimCard",
      img: simcardProject,
      content: "Content",
      url: ""
    },
  ];
  return (
    <>
      <div className='min-h-screen bg-white text-black p-10 fontStyle' id='projects'>
        <h1 className='text-center text-6xl py-4 text-black'>Projects</h1>
        <div className="flex max-md:flex-col p-12 justify-around">
          {ProjectsArr?.map((item, index) => (
            <div key={index}>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{
                  x: 0, opacity: 1, transition: {
                    duration: 1.6
                  }
                }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 1.3
                  }
                }}
                className='my-2'
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
                      height={270}
                    />
                    <p className='p-2'>{item?.content}</p>
                    <div className="card-actions justify-center">
                      <a href={item?.url} target='_blank'>
                      <p className="rounded-full py-1 px-4 text-center bg-black text-white shadow-xl">Open</p>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex max-md:flex-col p-12 justify-around">
          {ProjectsArr_1?.map((item, index) => (
            <div key={index}>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{
                  x: 0, opacity: 1, transition: {
                    duration: 1.6
                  }
                }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 1
                  }
                }}
                className='my-2'
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
                      height={270}
                    />
                    <p className='p-2'>{item?.content}</p>
                    <div className="card-actions justify-end">
                      <Button radius="full" className="py-1 px-4 bg-black text-white shadow-xl">Open</Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects