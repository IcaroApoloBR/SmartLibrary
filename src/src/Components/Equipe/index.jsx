import React from "react";
import Slider from "react-slick";

import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "../../../static/estilo.css";

const settings = {
  dots: true,
  infinite: false,
  
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0
};

const Equipe = () => {
  return (
    <section id="user">
      <div className="container">
        <h1 className="title text-center">NOSSA EQUIPE</h1>
        <Slider {...settings}>
          <div className="col-md-5 userr">
            <p>
              <b>Luiz Felipe das Neves Lopes</b>
            </p>
            <img src="/static/user1.jpg" />
            <p className="user-details">
              <br />
              Desenvolvedor Back-End
            </p>
          </div>
          <div className="col-md-5 userr">
            <p>
              <b>Ícaro Apolo Carvalho de Souza</b>
            </p>
            <img src="/static/user2.jpg" />
            <p className="user-details">
              <br />
              Desenvolvedor Front-End
            </p>
          </div>
          <div className="col-md-5 userr">
            <p>
              <b>Lucas Portugal Mendes</b>
            </p>
            <img src="img/user3.jpg" />
            <p className="user-details">
              <br />
              Desenvolvedor Front-End
            </p>
          </div>
          <div className="col-md-5 userr">
            <p>
              <b>Felipe de Meira Silva</b>
            </p>
            <img src="img/user4.jpg" />
            <p className="user-details">
              <br />
              Administrador de Banco de Dados
            </p>
          </div>
          <div className="item">
            <div className="col-md-5 userr">
              <p>
                <b>Flávio Henrique D'avila Grandchamp</b>
              </p>
              <img src="img/user5.jpg" />
              <p className="user-details">
                <br />
                Desenvolvedor Front-End
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Equipe;
