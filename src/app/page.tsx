import Image from 'next/image'
import React from 'react'
import webDev from '../images/webdev_2.png'
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { FaPhoneAlt, FaRegFilePdf } from "react-icons/fa";
import obiReactProject from "../images/obiReactProject.png";
import simcardProject from "../images/simcardProject.png";
import thcIndiaProject from "../images/thcIndiaProject.png";
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
import MainSection from '@/components/MainSection';
import Skill from '@/components/Skill';
import Projects from '@/components/Projects';



const page = () => {

  const list = [
    {
      title: "PHP",
      img: php,
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

  return (
    <>
      <div className='justify-center'>
        <MainSection />
        <Skill />
        <Projects />
      </div>

      {/* <main className="bg-white font-sans conatiner">
        <h1 className='flex justify-center text-4xl my-2 text-black'>Projects</h1>
        <div className='max-md:flex-col flex justify-around'>
          <Card isFooterBlurred className="flex max-md:flex-col m-5 border border-1 rounded">
            <Image
              alt="obiReact"
              className="z-0 w-full h-full object-cover"
              src={obiReactProject}
            />
            <div className='flex items-center bg-indigo-300'>
              <div className="flex max-md:flex-col m-1">
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
              <div className="flex max-md:flex-col m-1">
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
              <div className="flex max-md:flex-col m-1">
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

      <main className='bg-white font-sans conatiner'>
        <h1 className='flex justify-center text-4xl my-2 text-black'>Skills</h1>
        <div className="flex max-md:flex-col container">
          <div className='w-3/4 max-md:w-full flex flex-col justify-center items-center text-black'>
            <div className=''>
              <p className='text-xl text-justify p-3'>
                ⚡ Develop highly interactive Front end / User Interfaces for your web applications
              </p>
            </div>
            <div className=''>
              <p className='text-xl text-justify p-3'>
                ⚡ Having worked extensively with the Express framework and Node.js for server-side programming, I have created Restful APIs and web servers that offer dependable and safe communication between the client and the server.
              </p>
            </div>
            <div className=''>
              <p className='text-xl text-justify p-3'>
                ⚡ Integration of third party services such as AWS / Azure
              </p>
            </div>
          </div>
          <div className='flex flex-wrap justify-center items-center'>
            {list.map((item, index) => (
              <Card key={index} shadow="sm" isPressable className="flex flex-col m-1">
                <CardBody className="h-20">
                  <Image
                    width={50}
                    alt={item.title}
                    className="flex justify-center mt-3"
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small inset-x-0 bottom-0">
                  <b>{item.title}</b>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main> */}
    </>
  )
}

export default page