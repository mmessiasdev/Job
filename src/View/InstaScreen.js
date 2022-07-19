import React from "react";


import { Link } from "react-router-dom";

import Logo from './Assets/Logo.png';
import FasanoDeck from './Assets/HomePage/walpapperPc.png';

const InstaScreen = () => {
    return (
        <>
            <div className="InstaScreen">
                <div className="imageIs" data-aos="fade-right" data-aos-duration="500">
                    <img src={FasanoDeck} />
                </div>

                <div className="textsIs">
                    <div className="logoIs" data-aos="fade" data-aos-duration="2000">
                    <img src={Logo} />
                    </div>
                 

                    <div className="buttonIs" data-aos="fade-left" data-aos-duration="500">
                        <Link to="/homepage" className="link">
                            <a className="buttonEnter" type="submit">
                                Conheça-nos
                            </a>
                        </Link>
                    </div>
                    <div className="buttonIs" data-aos="fade-left" data-aos-duration="1500">
                        <Link to="/homepage" className="link">
                            <a className="buttonGalery" type="submit">
                                Galería
                            </a>
                        </Link>
                    </div>


                </div>

            </div>
        </>
    )
}

export default InstaScreen;