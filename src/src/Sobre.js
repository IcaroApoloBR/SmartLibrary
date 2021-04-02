import React from "react";

import Menu from "../src/Components/Menu-S";
import Banner from "../src/Components/Banner";
import Servicos from "../src/Components/Servicos";
import Motivos from "../src/Components/Motivos";
import Social from "../src/Components/Social";
import Footer from "../src/Components/Footer";
import Equipe from "../src/Components/Equipe";

const Sobre = () => {
  return (
    <div>
      <Menu />
      <Banner />
      <Servicos />
      <Motivos />
      <Equipe />
      <Social />
      <Footer />
    </div>
  );
};

export default Sobre;
