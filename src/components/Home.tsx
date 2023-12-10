import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from "../images/DevsMeh.png";

export default function Home() {
  return (
    <Carousel>
      <div>
        <hr className='bg-white' />
        <Image
          alt="NextUI hero Image"
          src={Logo}
          className="text-center"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div className='bg-dark'>
        hello
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  )
}
