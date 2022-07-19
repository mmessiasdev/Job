import React from "react";
import Slider from "react-slick";

import DeckA from '../Assets/AfterBef/DeckA.png';
import DeckB from '../Assets/AfterBef/DeckB.png';


import PortaA from '../Assets/AfterBef/PortaA.png';
import PortaB from '../Assets/AfterBef/PortaB.png';



import TelhadoA from '../Assets/AfterBef/TelhadoA.png';
import TelhadoB from '../Assets/AfterBef/TelhadoB.png';



import TetoA from '../Assets/AfterBef/TetoA.png';
import TetoB from '../Assets/AfterBef/TetoB.png';



import VarandaA from '../Assets/AfterBef/VarandaA.png';
import VarandaB from '../Assets/AfterBef/VarandaB.png';



const Service = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true
    };
    return (
        <>
            <div className="service" data-aos="fade-right" data-aos-duration="600">
                <h1>Nossos Serviços</h1>

                    <Slider {...settings}>

                        <div className="bA">
                            <div className="bAFlex">
                                <div className="divBef">
                                    <div className="before"><img src={DeckB}></img></div>
                                    <div className="textBefore"><h3>Antes</h3></div>
                                </div>
                                <div className="divAf">
                                    <div className="after"><img src={DeckA}></img><div className="gradientBef"></div></div>
                                    <div className="textAfter"><h3>Depois</h3></div>
                                </div>
                            </div>

                        </div>
                        <div className="bA">
                            <div className="bAFlex">
                                <div className="divBef">
                                   
                                    <div className="before"><img src={PortaA}></img></div>
                                    <div className="textBefore"><h3>Antes</h3></div>
                                </div>
                                <div className="divAf">
                                    <div className="after"><img src={PortaB}></img><div className="gradientBef"></div></div>
                                    <div className="textAfter"><h3>Depois</h3></div>
                                </div>
                            </div>

                        </div>
                        <div className="bA">
                            <div className="bAFlex">
                                <div className="divBef">
                                    <div className="before"><img src={TelhadoA}></img></div>
                                    <div className="textBefore"><h3>Antes</h3></div>
                                </div>
                                <div className="divAf">
                                    <div className="after"><img src={TelhadoB}></img><div className="gradientBef"></div></div>
                                    <div className="textAfter"><h3>Depois</h3></div>
                                </div>
                            </div>

                        </div>
                        <div className="bA">
                            <div className="bAFlex">
                                <div className="divBef">
                                    <div className="before"><img src={TetoA}></img></div>
                                    <div className="textBefore"><h3>Antes</h3></div>
                                </div>
                                <div className="divAf">
                                    <div className="after"><img src={TetoB}></img><div className="gradientBef"></div></div>
                                    <div className="textAfter"><h3>Depois</h3></div>
                                </div>
                            </div>

                        </div>
                        <div className="bA">
                            <div className="bAFlex">
                                <div className="divBef">
                                   
                                    <div className="before"><img src={VarandaA}></img></div>
                                    <div className="textBefore"><h3>Antes</h3></div>
                                </div>
                                <div className="divAf">
                                    <div className="after"><img src={VarandaB}></img><div className="gradientBef"></div></div>
                                    <div className="textAfter"><h3>Depois</h3></div>
                                </div>
                            </div>

                        </div>



                 
                    </Slider>





            </div>
        </>
    )
}


export default Service;