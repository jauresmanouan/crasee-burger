import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusale-ui/TextInput";
import Button from "../../reusale-ui/Button";
import { theme } from "../../../theme";

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
        version="normal"
      />
      <Button
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
    color: ${theme.colors.white};
    font-family: "Amatic SC";
    font-size: ${theme.fonts.size.P5};
    margin-bottom: 32px;
    margin-top: 0px;
  }

  h2 {
    color: ${theme.colors.white};
    font-family: "Amatic SC";
    font-size: ${theme.fonts.size.P4};
  }

  hr {
    width: ${theme.gridUnit} * 10%;
    border: 1.5px solid ${theme.colors.primary};
  }

  .icon-forward {
    margin-left: ${theme.spacing.xs};
  }
`;
