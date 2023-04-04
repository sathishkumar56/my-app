import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  s1 from './images/s1.jpg';
import  s2 from './images/s2.jpg';
import  s3 from './images/s3.jpg';
import  s4 from './images/s4.jpg';
import'./caurosel.css'
export default function Carousel1() {
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
                    <img src={s1} alt="image1" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div >
                    <img src={s2} alt="image2" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={s3} alt="image3" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={s4} alt="image4" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>

            </Carousel>
        </>
    )
}
