import styled from "styled-components";
import Logo from "../../../reusale-ui/Logo";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/window";

export default function NavBar() {
  return (
    <NavBarStyled className="navbar">
      <Logo className={"logo"} onClick={() => refreshPage()} />
      <Profile />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 1400px;
  background-color: ${theme.colors.background_white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  .navbar {
    Profile {
      border: 5px solid red;
    }
  }
  .logo {
    margin-left: 20px;
    cursor: pointer;
  }
`;
