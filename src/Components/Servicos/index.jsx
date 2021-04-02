import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../static/estilo.css";

const Servicos = () => {
  return (
    <section id="services">
      <div className="container text-center">
        <h1 className="title">O QUE FAZEMOS?</h1>
        <div className="row text-center">
          <div className="col-md-4 services">
            <img src="/static/service1.png" className="services-img" />
            <h4>Growth Marketing</h4>
            <p>
              Nulla dictum fermentum tortor, sed tincidunt ipsum rhoncus ac.
              Cras placerat mauris vel nulla dapibus imperdiet. Sed id nibh
              venenatis, aliquet nisi at, auctor nisl. Mauris pellentesque diam
              eu ullamcorper interdum. Quisque id nisi augue. Mauris at nulla ut
              ex euismod posuere in congue quam. Morbi sodales, augue eu dapibus
              egestas, enim felis posuere diam, dapibus pretium purus tortor a
              ipsum. Cras lobortis scelerisque ipsum vitae interdum. Etiam ut
              libero libero.
            </p>
          </div>
          <div className="col-md-4 services">
            <img src="/static/service2.png" className="services-img" />
            <h4>Online Branding</h4>
            <p>
              Nulla dictum fermentum tortor, sed tincidunt ipsum rhoncus ac.
              Cras placerat mauris vel nulla dapibus imperdiet. Sed id nibh
              venenatis, aliquet nisi at, auctor nisl. Mauris pellentesque diam
              eu ullamcorper interdum. Quisque id nisi augue. Mauris at nulla ut
              ex euismod posuere in congue quam. Morbi sodales, augue eu dapibus
              egestas, enim felis posuere diam, dapibus pretium purus tortor a
              ipsum. Cras lobortis scelerisque ipsum vitae interdum. Etiam ut
              libero libero.
            </p>
          </div>
          <div className="col-md-4 services">
            <img src="/static/service3.png" className="services-img" />
            <h4>Animated Ads</h4>
            <p>
              Nulla dictum fermentum tortor, sed tincidunt ipsum rhoncus ac.
              Cras placerat mauris vel nulla dapibus imperdiet. Sed id nibh
              venenatis, aliquet nisi at, auctor nisl. Mauris pellentesque diam
              eu ullamcorper interdum. Quisque id nisi augue. Mauris at nulla ut
              ex euismod posuere in congue quam. Morbi sodales, augue eu dapibus
              egestas, enim felis posuere diam, dapibus pretium purus tortor a
              ipsum. Cras lobortis scelerisque ipsum vitae interdum. Etiam ut
              libero libero.
            </p>
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          Todos Serviços
        </button>
      </div>
    </section>
  );
};

export default Servicos;
