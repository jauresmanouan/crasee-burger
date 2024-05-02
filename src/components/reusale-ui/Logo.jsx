import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="src/assets/F03-logo-orange.png" alt="logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 15vh;
  }

  h1 {
    color: #ffa01b;
    font-family: "Amatic SC";
    font-size: 15vh;
  }
`;
