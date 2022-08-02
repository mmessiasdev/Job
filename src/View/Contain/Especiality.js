import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Telhado from '../Assets/Especiality/telhado.JPG';
import Pergolado from '../Assets/Especiality/pergolado.JPG';
import Deck from '../Assets/Especiality/deck.JPG';
import Esquadrias from '../Assets/Especiality/esquadrias.JPG';
import Brises from '../Assets/Especiality/brises.JPG';
import Assoalho from '../Assets/Especiality/assoalho.JPG';


const Especiality = () => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <>
            <h1 className="titleEsp" data-aos="fade-up" data-aos-duration="600">Especialidades</h1>
            <Slider {...settings} id="caroulselEsp">
                <div className="especiality">
                    <h2>Telhado</h2>
                    <div className="desc">
                        <h3>Telhados: <h4>proteger o espaço interno do edifício das intempéries do ambiente exterior (como a neve, a chuva, o vento, entre outros), também concedendo aos usuários aí localizados privacidade e conforto (através de proteção acústica, térmica, etc).</h4></h3>
                    </div>
                    <div className="images">
                        <img src={Telhado} />
                    </div>
                </div>
                <div className="especiality">

                    <h2>Pergolados</h2>
                    <div className="desc">
                        <h3>Pergolados: <h4>são uma estrutura formada por um sistema de vigas modulares que são utilizados em áreas externas da residência como jardins, varandas, hall de entrada, fachadas, corredores e ambientes próximos à piscina e churrasqueira. Essa estrutura na maioria das vezes é feito de madeira, mas podem ser projetados em aço, ferro, bambu e concreto.</h4></h3>
                    </div>
                    <div className="images">
                        <img src={Pergolado} />
                    </div>
                </div>
                <div className="especiality">

                    <h2>Deck</h2>
                    <div className="desc">
                        <h3>Deck: <h4>é muito utilizado em áreas de piscina e demais áreas molhadas graças à suas características antiderrapante e antitérmico. Por isso, ele também pode ser colocado forrado pisos de varandas, sacadas e terraços ou qualquer outro local que fique exposto ao tempo</h4></h3>
                    </div>
                    <div className="images">
                        <img src={Deck} />
                    </div>
                </div>
                <div className="especiality">

                    <h2>Assoalhos</h2>
                    <div className="desc">
                        <h3>Assoalho de madeira: <h4>é um tipo de piso composto por tábuas maciças de madeira que podem ser feitas de ipê, jatobá, marfim, cumaru, peroba, carvalho, entre outras espécies. Trata-se de um revestimento extremamente resistente que traz elegância e conforto para o ambiente.</h4></h3>
                    </div>
                    <div className="images">
                        <img src={Assoalho} />
                    </div>
                </div>
                <div className="especiality">

                    <h2>Esquadrias</h2>
                    <div className="desc">
                        <h3>Esquadrias: <h4>são armações ou estruturas de portas e janelas que podem ser confeccionadas em vários materiais como madeira, alumínio, ferro e PVC. Caso você esteja construindo ou reformando a sua casa, saiba que as esquadrias adequadas podem valorizar o imóvel.</h4></h3>
                    </div>
                    <div className="images">
                        <img src={Esquadrias} />
                    </div>
                </div>
                <div className="especiality">

                    <h2>Brises</h2>
                    <div className="desc">
                        <h3>Brises: <h4>barram a incidência da radiação solar antes que ela atinja a fachada e, consequentemente, o ambiente interno, reduzindo o calor recebido</h4></h3>
                    </div>
                    <div className="images">
                        <img src={Brises} />
                    </div>
                </div>


            </Slider>


        </>
    );
}


export default Especiality;