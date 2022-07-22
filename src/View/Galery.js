import React, { Component } from "react";
import Slider from "react-slick";
import Footer from "./Contain/Footer";
import { useState, useEffect } from 'react';

import Image1 from './Assets/About/IMG_1378.png';
import Image3 from './Assets/About/IMG_1373.png';
import Image4 from './Assets/About/IMG_1580.png';
import Image5 from './Assets/About/IMG_3249.png';
import Image6 from './Assets/About/IMG_1333.png';
import Image7 from './Assets/About/IMG_0685.png';
import Image8 from './Assets/About/1d9138df-c9ed-49ee-916b-fadeee4bd5e6 1.png';
import Image9 from './Assets/About/15d1943d-bfef-4779-a4ac-88cc664412e5 2.png';
import Image10 from './Assets/About/abd89e08-2c3b-4edb-bf54-eeba3566a29a 1.png';
import Image11 from './Assets/About/b4fd0b48-fcc3-4d5b-92eb-958019227518 1.png';
import Image12 from './Assets/About/35909217-ce01-42d2-96ab-607644f549cc 2.png';
import Image13 from './Assets/About/IMG_1027 4.png';

import PuffLoader from "react-spinners/PuffLoader";


const settings1 = {
    autoplay: true,
    infinite: true,
    arrow: false,
    dots: true,
    fade: true,
};

const settings2 = {
    infinite: true,


};

export default class Galery extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <div className="galery">
                <div>
                    <h2>Galería Job</h2>
                    <h4>Fotos:</h4>
                    <Slider className="divGalery1" {...settings1}
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                    >
                        <div>
                            <img src={Image5} />
                        </div>
                        <div>
                            <img src={Image9} />
                        </div>
                        <div>
                            <img src={Image4} />
                        </div>
                        <div>
                            <img src={Image10} />
                        </div>
                        <div>
                            <img src={Image3} />
                        </div>
                        <div>
                            <img src={Image11} />
                        </div>
                        <div>
                            <img src={Image1} />
                        </div>
                        <div>
                            <img src={Image8} />
                        </div>
                        <div>
                            <img src={Image6} />
                        </div>
                        <div>
                            <img src={Image7} />
                        </div>
                        <div>
                            <img src={Image12} />
                        </div>
                        <div>
                            <img src={Image13} />
                        </div>
                    </Slider>
                    <div className="containGaleryMin">
                        <Slider className="divGalery2"  {...settings2}
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                        >
                            <div>
                                <img src={Image5} />
                            </div>
                            <div>
                                <img src={Image9} />
                            </div>
                            <div>
                                <img src={Image4} />
                            </div>
                            <div>
                                <img src={Image10} />
                            </div>
                            <div>
                                <img src={Image3} />
                            </div>
                            <div>
                                <img src={Image11} />
                            </div>
                            <div>
                                <img src={Image1} />
                            </div>
                            <div>
                                <img src={Image8} />
                            </div>
                            <div>
                                <img src={Image6} />
                            </div>
                            <div>
                                <img src={Image7} />
                            </div>
                            <div>
                                <img src={Image12} />
                            </div>
                            <div>
                                <img src={Image13} />
                            </div>
                        </Slider>

                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}


// const Galery = () => {
//     const [loading, setLoading] = useEffect(false);
//     useEffect(() => {
//         setLoading(true)
//         setTimeout(() => {
//             setLoading(false)
//         }, 500)
//     }, [])

//     return (
//         <>
//             {

//                 loading ?
//                     <PuffLoader
//                         color={'#F0EFEF'} loading={loading} size={150} />
//                     :
//                     <GaleryLoad />
//             }
//         </>
//     )
// }

// export default Galery;
