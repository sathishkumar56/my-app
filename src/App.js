import React from "react";
import { Login ,Carousel1} from "simple-component-library-sat";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  s1 from './images/s1.jpg'
import  s2 from './images/s2.jpg';
import  s3 from './images/s3.jpg';
import  s4 from './images/s4.jpg';
const MyApp = () => {
  return (
    <>
    <div >
        < Carousel1/>
      </div>
  
      <div>
        <Login />
      </div>
    </>
  )
}
export default MyApp;
