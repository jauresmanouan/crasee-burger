import styled from "styled-components";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import { theme } from "../../../theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(true);

  const orderContextValue = {
    isAdmin,
    setIsAdmin,
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <NavBar />
        <Main />
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  width: 1512px;
  height: 982px;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
