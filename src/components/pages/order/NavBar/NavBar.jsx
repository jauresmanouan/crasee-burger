import styled from "styled-components";
import Logo from "../../../reusale-ui/Logo";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/window";
import ToggleButton from "../../../reusale-ui/ToggleButton";

export default function NavBar() {
  return (
    <NavBarStyled className="navbar">
      <Logo className={"logo"} onClick={() => refreshPage()} />
      <div className="headerRight">
        <ToggleButton
          className="toggleButton"
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
        />
        <Profile />
      </div>
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

  .headerRight {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Open Sans";
  }

  .toggleButton {
    padding-right: 50px;
  }
`;
