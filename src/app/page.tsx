import React from 'react'
import "@/index.css"
import MainSection from '@/components/MainSection';
import Skill from '@/components/Skill';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import About from '@/components/About';

const page = () => {
  return (
    <>
      <div className='justify-center overflow-hidden'>
        <MainSection />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default page