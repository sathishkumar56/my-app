import React from "react";
import { Login } from "simple-component-library-sat";
import { Carousel } from "react-responsive-carousel";
import s1 from './images/s1.jpg';
import s2 from './images/s2.jpg'
import s3 from './images/s3.jpg'
import s4 from './images/s4.jpg'

import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
const MyApp = () => {
  return (
    <>
    <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={1500}
      >
         <div >
          <h1>Hello</h1>
          <img  src={s1} alt="alternative_text_of_your_image"/>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div >
          <img src={s2} alt="alternative_text_of_your_image"/>
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img   src={s3} alt="alternative_text_of_your_image"/>
          {/* <p className="legend">Legend 3</p> */}
        </div> 
        <div>
          <img   src={s4} alt="alternative_text_of_your_image"/>
          {/* <p className="legend">Legend 3</p> */}
        </div> 

      </Carousel>
    <div>
      <Login />
    </div>
    </>
  )
}
export default MyApp;
