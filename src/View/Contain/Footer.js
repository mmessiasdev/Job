import React from 'react';
import Logo from '../Assets/Logo.png';



const Footer = () => {
    return (
            <div className="footer">
                <div className="footerTitle">
                    <img src={Logo} />
                </div>
                <div className="footerDesc">
                    <h3>Empresa de Carpintaria sorfisticada a 30 Anos no mercado trabalhando com qualidade e compromisso.</h3>
                    <h4>+55 (71) 9 9998-1072</h4> 
                    <h4>Jobe.santos@hotmail.com</h4> 
                </div>
                <div className="footerCoop">
                    <h4>©Job Construções</h4>
                    <h5 >desenvolvido por @mmessiasdev</h5 >
                </div>
            </div>
    )
}

export default Footer;