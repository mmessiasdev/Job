import { useState } from "react";

import Logo from './Assets/Logo.png';
import FasanoDeck from './Assets/HomePage/walpapperPc.png';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';


/* ---- Imports Js View ---- */

import About from "./Contain/About";
import Especiality from "./Contain/Especiality";
import Service from "./Contain/Service";
import Contate from "./Contain/Contate";
import Footer from "./Contain/Footer";


const HomePage = () => {
    const [navBar, setNavBar] = useState(false); // Responsible for the Menu bar Scroll animation
    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    // console.log(window.scrollY);
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <div className="homePage">
                <div className="walpapper">
                    <img src={FasanoDeck} />
                </div>
            
                <div className={navBar ? 'menuActive' : 'menu'} data-aos="fade-down" data-aos-duration="200" data-aos-easing="fade-up">
                    <BsFillChatLeftDotsFill size={30} />
                    <a href="#contate">Contate-nos</a>
                </div>
                <div className="title" data-aos="fade" data-aos-duration="2000">
                    <img src={Logo} />

                </div>
                <MdOutlineKeyboardArrowDown size={65} />
            </div>
            <About />
            <Especiality />
            <Service />
            <Contate />
            <Footer />
        </>

    );
}

export default HomePage;