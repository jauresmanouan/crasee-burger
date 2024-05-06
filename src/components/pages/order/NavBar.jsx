import styled from "styled-components";
import Logo from "../../reusale-ui/Logo";
import Profile from "./Profile";

export default function NavBar() {
  return (
    <NavBarStyled className="navbar">
      <Logo />
      <Profile />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 1400px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
