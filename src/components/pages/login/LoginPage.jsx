import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusale-ui/Logo";

export default function LoginPage() {
  return (
    <LoginFormStyled>
      <Logo />
      <LoginForm />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("src/assets/F03-burger-background.jpg");
`;
