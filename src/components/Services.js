import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
//css file of carousel must be included
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
  return (
    <Carousel 
    infiniteLoop
    autoPlay
    showStatus={false}
    showArrows={false}
    interval={1000}
    showThumbs={false}
    >
        <div>
            <img src={img1} alt='Items1' />
            <p className='legend'> Full Stack </p>
        </div>
        <div>
            <img src={img2} alt='Items1' />
            <p className='legend'>Front-End </p>
        </div>
    </Carousel>
 
  )
}

export default Services