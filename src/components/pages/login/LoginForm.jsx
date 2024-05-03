import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusale-ui/TextInput";

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
      <button className="button-with-icon">
        <span>Accédez à mon espace</span>
        <IoChevronForward className="icon-forward" />
      </button>
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
  
  .button-with-icon {
    width: 100%;
    background-color: #ff9f1b;
    color: white;
    border-radius: 5px;
    padding: 18px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px 0;
    border: none;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;

    &:hover:not(:disabled) {
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }
  }
`;
