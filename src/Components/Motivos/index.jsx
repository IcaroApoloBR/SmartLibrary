import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../static/estilo.css";

const Motivos = () => {
  return (
    <section id="about-us">
      <div className="container">
        <h1 className="title text-center">MOTIVOS PARA NOS ESCOLHER !</h1>
        <div className="row">
          <div className="col-md-6 about-us">
            <p className="about-title">Somos diferentes</p>
            <ul>
              <li>Believe in doing bussiness with honesty</li>
              <li>Believe in doing bussiness with honesty</li>
              <li>Believe in doing bussiness with honesty</li>
              <li>Believe in doing bussiness with honesty</li>
              <li>Believe in doing bussiness with honesty</li>
              <li>Believe in doing bussiness with honesty</li>
              <li>Believe in doing bussiness with honesty</li>
              <li>Believe in doing bussiness with honesty</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src="/static/network.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivos;
