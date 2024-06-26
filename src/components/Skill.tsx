"use client"
import React from 'react'
import php from "../images/skills/php.png";
import Node from "../images/skills/nodejs.png";
import Nextjs from "../images/skills/nextjs.png";
import reactNative from "../images/skills/react.png";
import typeScript from "../images/skills/typescript.png";
import redux from "../images/skills/redux.png";
import MongoDB from "../images/skills/mongodb.png";
import javaScript from "../images/skills/js.png";
import bitBucket from "../images/skills/bitbucket.png";
import css from "../images/skills/css.png";
import expressJs from "../images/skills/expressjs.png";
import framerMotion from "../images/skills/framerMotion.png";
import html from "../images/skills/html.png";
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import { motion } from "framer-motion"

const list = [
  {
    title: "PHP",
    img: php,
  },
  {
    title: "React",
    img: reactNative,
  },
  {
    title: "Node.js",
    img: Node,
  },
  {
    title: "Next.js",
    img: Nextjs,
  },
  {
    title: "Express.js",
    img: expressJs,
  },
  {
    title: "React Native",
    img: reactNative,
  },
  {
    title: "Typescript",
    img: typeScript,
  },
  {
    title: "Redux",
    img: redux,
  },
  {
    title: "Mongo DB",
    img: MongoDB,
  },
  {
    title: "HTML",
    img: html,
  },
  {
    title: "Framer Motion",
    img: framerMotion,
  },
  {
    title: "JavaScript",
    img: javaScript,
  },
  {
    title: "Css",
    img: css,
  },
  {
    title: "BitBucket",
    img: bitBucket,
  },
];

const Skill = () => {
  return (
    <>
      <div className='bg-white min-h-screen text-black flex items-center justify-center fontStyle' id='skills'>
        <div >
        <h1 className='text-center text-6xl py-4 text-black'>Skills</h1>
        <div className="flex max-md:flex-col px-12 py-4">
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0, 
              opacity: 1, 
              transition: {
                duration: 1.3
              }
            }}
            viewport={{ once: true }}
            className='w-1/3 max-md:w-full'
          >
            <Card className="bg-white shadow-xl rounded-xl m-2 h-full pt-3">
              <CardBody>
                <p className='text-xl text-justify p-3'>
                  Develop highly interactive Front end / User Interfaces for your web applications
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0, 
              opacity: 1, 
              transition: {
                duration: 1.3
              }
            }}
            viewport={{ once: true }}
            className='w-2/3 max-md:w-full'
          >
            <Card className="bg-white shadow-xl rounded-xl m-2 h-full pt-3">
              <CardBody>
                <p className='text-xl text-center p-3'>
                  Having worked extensively with the Express framework and Node.js for server-side programming, I have created Restful APIs and web servers that offer dependable and safe communication between the client and the server.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0, 
              opacity: 1, 
              transition: {
                duration: 1.3
              }
            }}
            viewport={{ once: true }}
            className='w-1/3 max-md:w-full'
          >
            <Card className="bg-white shadow-xl rounded-xl m-2 h-full items-center pt-3">
              <CardBody>
                <p className='text-xl text-justify p-3'>
                  Integration of third party services such as AWS / Azure
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
        <div className='flex flex-wrap justify-center items-center'>
          {list.map((item, index) => (
            <motion.div key={index} className="flex flex-col p-2 m-2 bg-white rounded-xl shadow-xl "
              initial={{ x: -150, opacity: 0 }}
              animate={{
                x: 0, opacity: 1, transition: {
                  duration: 1.3
                }
              }}
              whileHover={{
                scale: 1.2,
                transition: {
                  duration: 0.8
                }
              }}
              viewport={{ once: true }}
            >
              <Image
                width={100}
                alt={item.title}
                className="imgStyle p-4"
                src={item.img}
              />
              <div className="text-center inset-x-0 bottom-0 p-3">
                <p>{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default Skill