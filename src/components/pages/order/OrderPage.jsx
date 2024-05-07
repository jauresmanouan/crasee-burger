import styled from "styled-components";
import Main from "./Main";
import NavBar from "./NavBar";
import { theme } from "../../../theme";

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <NavBar />
      <Main />
    </OrderPageStyled>
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
