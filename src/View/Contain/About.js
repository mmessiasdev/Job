import React from "react";
import Slider from "react-slick";


import Image1 from '../Assets/About/IMG_1378.png';
import Image2 from '../Assets/About/IMG_1027.png';
import Image3 from '../Assets/About/IMG_1373.png';
import Image4 from '../Assets/About/IMG_1580.png';
import Image5 from '../Assets/About/IMG_3249.png';
import Image6 from '../Assets/About/IMG_1333.png';
import Image7 from '../Assets/About/IMG_0685.png';




const About = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,  
    };
    return (
        <>
            <div className="about" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
                <h1>Quem Somos</h1>
                <div className="desc">
                    <h3>Com 30 anos de mercado, <h4>JOB Construções se tornou referência no ramo da carpintaria com suas especialidades em: Telhados/ Assoalhos/ Pergolados/ Deck/ Esquadrias/ Brises.</h4></h3>
                </div>
                <div className="images">
                <Slider {...settings} className="caroulselServ">
                    <img src={Image5 } />
                    <img src={Image4 } />
                    <img src={Image3 } />
                    <img src={Image2 } />
                    <img src={Image1 } />
                    <img src={Image6 } />
                    <img src={Image7 } />
                    </Slider>
                </div>
            </div>
        </>
    )
}


export default About;