import React from 'react'
import MainSection from '@/components/MainSection';
import Skill from '@/components/Skill';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const page = () => {
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