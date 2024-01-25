"use client"
import React from 'react'
import obiReactProject from "../images/obiReactProject.png";
import simcardProject from "../images/simcardProject.png";
import thcIndiaProject from "../images/thcIndiaProject.png";
import { Image } from "@nextui-org/react";
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import { motion } from "framer-motion"

const Projects = () => {
  const Projects = [
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
    {
      title: "HandiCraft",
      img: thcIndiaProject,
      content: "Content",
      url: ""
    },
  ];
  const Projects_1 = [
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
      <div className='min-h-screen bg-white text-black p-10' id='projects'>
        <h1 className='text-center text-6xl py-4 text-black'>Projects</h1>
        <div className="flex max-md:flex-col p-12 justify-around">
          {Projects?.map((item, index) => (
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
                    duration: 1.6
                  }
                }}
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
        <div className="flex max-md:flex-col p-12 justify-around">
          {Projects_1?.map((item, index) => (
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