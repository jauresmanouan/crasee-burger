import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
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
      <div className="input-with-container">
      <BsPersonCircle className="icon" />
        <input c
          onChange={handleChange}
          type="text"
          required
          placeholder="Entrez votre prénon..."
        />
      </div>
      <button>Accédez à votre espace</button>
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

  .input-with-container {
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon{
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
    }

    &::placeholder{
      background: white;
      color: lightgray;
    }

}
`;
