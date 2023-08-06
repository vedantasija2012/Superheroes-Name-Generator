import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'

const MyCarousel = () => {
    return (
        <div className="carousel w-full md:h-[250vh]">
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showArrows={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                interval={1000}>
                <div>
                    <img src={img1} alt="img error" />
                </div>
                <div>
                    <img src={img2} alt="img error" />
                </div>
                <div>
                    <img src={img3} alt="img error" />
                </div>
                <div>
                    <img src={img4} alt="img error" />
                </div>
                <div>
                    <img src={img5} alt="img error" />
                </div>
            </Carousel>
            <br />
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showArrows={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                interval={1000}>
                <div>
                    <img src={img6} alt="img error" />
                </div>
                <div>
                    <img src={img7} alt="img error" />
                </div>
                <div>
                    <img src={img8} alt="img error" />
                </div>
                <div>
                    <img src={img9} alt="img error" />
                </div>
                <div>
                    <img src={img10} alt="img error" />
                </div>
            </Carousel>
        </div>
    )
}

export default MyCarousel