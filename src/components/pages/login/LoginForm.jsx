import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
      <input
        onChange={handleChange}
        type="text"
        required
        placeholder="Entrez votre prénon..."
      />
      <button>Accédez à votre espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;
