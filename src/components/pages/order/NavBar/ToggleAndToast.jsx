import { useContext, useState } from "react";
import ToggleButton from "../../../reusale-ui/ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";

export default function ToggleAndToast() {

  const {isAdmin, setIsAdmin} = useContext(OrderContext)

  const displayToastNotification = () => {
    if (isAdmin) {
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
    setIsAdmin(!isAdmin);
  };
  return (
    <ToggleAndToastStyled>
      <ToggleButton
        className="toggleButton"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </ToggleAndToastStyled>
  );
}

const ToggleAndToastStyled = styled.div`
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
