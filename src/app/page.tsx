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
import Contact from '@/components/Contact';



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
      <div className='justify-center overflow-hidden'>
        <MainSection />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default page