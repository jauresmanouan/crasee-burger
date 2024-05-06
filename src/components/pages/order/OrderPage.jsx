import styled from "styled-components";
import Main from "./Main";
import NavBar from "./NavBar";

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
  background-color: #ffa01b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
