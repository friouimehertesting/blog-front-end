import React from "react";
import Navbar from "../navbar";

import "./style.scss";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContent">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ab
          nam nostrum numquam facilis? Quibusdam, facilis voluptates? Autem
          vitae corrupti illo accusantium at harum aperiam, error maiores?
          Facere, quod neque?
        </h1>
      </div>
    </div>
  );
}

export default Home;
