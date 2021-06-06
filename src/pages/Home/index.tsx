import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Header, Button } from "./styles";
import Logo from "../../assets/logo.png";
import { FaGuitar } from "react-icons/all";

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Header>
        <h1>ChordApp</h1>
        <img src={Logo} alt="" />
      </Header>
      <div className="description">
        <p className="welcome">Olá seja bem vindo a ChordApp!</p>
        <p className="extras">
          Nossa missão é ajudar todos os amantes da musica! <br /> Sabe aquele acorde que você quer aprender ou que você não lembra.
          <br /> Então... aqui voce vai achar!
        </p>
      </div>
      <div className="options">
        <Button
          onClick={() => {
            history.push("./guitar");
          }}
        >
          <FaGuitar size={18} />
          <p>Violão</p>
        </Button>
      </div>
    </Container>
  );
};

export default Home;
