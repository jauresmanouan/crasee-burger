import styled from "styled-components";
import Logo from "../../../reusale-ui/Logo";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/window";
import "react-toastify/dist/ReactToastify.css";
import ToggleAndToast from "./ToggleAndToast";

export default function NavBar() {
  return (
    <NavBarStyled className="navbar">
      <Logo className={"logo"} onClick={() => refreshPage()} />
      <div className="headerRight">
        <ToggleAndToast />
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
  border-top-right-radius: ${theme.fonts.size.SM};
  border-top-left-radius: ${theme.fonts.size.SM};

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
`;
