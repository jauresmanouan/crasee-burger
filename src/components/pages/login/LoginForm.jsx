import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusale-ui/TextInput";
import PrimaryButton from "../../reusale-ui/PrimaryButton";

export default function LoginForm() {
  const [prenom, setPrenom] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`order/${prenom}`);
  };

  const handleChange = (event) => {
    setPrenom(event.target.value);
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <TextInput
        onChange={handleChange}
        InsertIcon={<BsPersonCircle className="icon" />}
        placeholder={"Entrez votre prénon..."}
        required
      />
      <PrimaryButton
        label={"Accéder à mon espace"}
        buttonIcon={<IoChevronForward className="icon-forward" />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;

  h1 {
    color: white;
    font-family: "Amatic SC";
    font-size: 48px;
  }
  h2 {
    color: white;
    font-family: "Amatic SC";
    font-size: 36px;
  }

  hr {
    width: 80%;
    border: 1.5px solid #ffa01b;
  }

  .icon-forward{
    margin-left: 10px;
  }
`;
