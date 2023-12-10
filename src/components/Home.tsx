import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from "../images/DevsMeh.png";
import { Card, CardBody } from '@nextui-org/react';

export default function Home() {
  return (
    // <Carousel>
      <main className="bg-[#853af0] font-mono">
        <div className="grid gap-4 grid-cols-2">
          <div className='my-5 flex justify-center'>
            <p className='mt-8 text-white text-2xl'>
              A Full Stack Developer proficient <br /> 
              in Next.js, React, Redux, TypeScript, Express, <br /> 
              Node.js, MongoDB, React Native, and UI/UX design.
            </p>
          </div>
          <div>
            hello
          </div>
        </div>
      </main>
  )
}
