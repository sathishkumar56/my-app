import React from "react";
import { Login } from "simple-component-library-sat";
import Carousel1 from "./caurousel/caurosel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const MyApp = () => {
  return (
    <>
    <div >
        <Carousel1 ></Carousel1>
      </div>
  
      <div>
        <Login />
      </div>
    </>
  )
}
export default MyApp;
