import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../static/estilo.css";

const Footer = () => {
  const [email, setEmail] = useState();
  const [emailValid, setEmailValid] = useState(false);
  const [sendProcessing, setSendProcessing] = useState(false);

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const sendEmailToBackend = () => {
    setSendProcessing(true);
    new Promise(resolve => {
      setTimeout(() => {
        setSendProcessing(false);
        setEmail("");
        resolve();
      }, 1000);
    }).then(() => {
      toast.info(`Seu email: ${email} foi cadastrado com sucesso!`);
      setEmail("");
    });
  };

  return (
    <div>
      <ToastContainer />
      <section id="footer">
        <img src="/static/wave2.png" className="footer-img" />
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-box">
              <img src="/static/logo.png" />
              <p>
                Nulla dictum fermentum tortor, sed tincidunt ipsum rhoncus ac.
                Cras placerat mauris vel nulla dapibus imperdiet. Sed id nibh
                venenatis, aliquet nisi at, auctor nisl.
              </p>
            </div>
            <div className="col-md-4 footer-box">
              <p>
                <b>FALE CONOSCO</b>
              </p>
              <p>
                <i className="fa fa-map-marker" /> Cruzeiro-SP
              </p>
              <p>
                <i className="fa fa-phone" /> +55 12 98143-4005
              </p>
              <p>
                <i className="fa fa-envelope-o" /> apoloraci@gmail.com
              </p>
            </div>
            <div className="col-md-4 footer-box">
              <p>
                <b>INSCREVA-SE JÁ</b>
              </p>
              <input
                value={email}
                onChange={e => {
                  setEmailValid(validateEmail(e.target.value));
                  return setEmail(e.target.value);
                }}
                required
                type="email"
                name="email"
                className="form-control"
                placeholder="Digite seu e-mail"
              />
              <button
                disabled={!emailValid || sendProcessing}
                className="btn"
                onClick={sendEmailToBackend}
                type="submit"
                className="btn btn-primary"
              >
                {sendProcessing ? "cadastrando..." : "Cadastrar E-mail"}
              </button>
            </div>
          </div>
          <hr />
          <p className="copyright">
            &copy; Copyright 2019 - Todos os direitos reservados
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
