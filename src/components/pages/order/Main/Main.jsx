import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
import Admin from "./Menu/Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
  const { isAdmin, setIsAdmin } = useContext(OrderContext);
  return (
    <MainStyled>
      {/*       <div className="basket">Basket</div>
       */}{" "}
      <div className="menu-and-admin">
        <Menu />
        {isAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}
const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  width: 1400px;
  height: 834.7px;
  border-radius: 0px 0px 15px 15px;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: hidden;
  /*  .basket {
    background-color: blue;
  } */

  .menu-and-admin {
    overflow-y: scroll;
    position: relative;
  }
`;
