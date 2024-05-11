import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>CRAZEE</h1>
      <img src="/images/logo-orange.png" alt="logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 40px;
  }

  h1 {
    color: ${theme.colors.primary};
    font-family: "Amatic SC";
  }
`;
