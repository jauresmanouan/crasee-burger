import styled from "styled-components";
import { theme } from "../../theme";

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
    height: 150px;
  }

  h1 {
    color: ${theme.colors.primary};
    font-family: "Amatic SC";
    font-size: 110px;
  }
`;
