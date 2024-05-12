import styled from "styled-components";
import Logo from "../../../reusale-ui/Logo";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/window";
import ToggleButton from "../../../reusale-ui/ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function NavBar() {
  const [isAdmin, setIsAdmin] = useState(false);

  const displayToastNotification = () => {
    if (!isAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsAdmin(!isAdmin)
  };

  return (
    <NavBarStyled className="navbar">
      <Logo className={"logo"} onClick={() => refreshPage()} />
      <div className="headerRight">
        <ToggleButton
          className="toggleButton"
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
          onToggle={displayToastNotification}
        />
        <ToastContainer className="toaster" bodyClassName="body-toast" />
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

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
