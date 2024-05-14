import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
import Admin from "./Menu/Admin/Admin";

export default function Main() {
  return (
    <MainStyled>
      {/*       <div className="basket">Basket</div>
       */}{" "}
      <Menu />
      <Admin/>
    </MainStyled>
  );
}
const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  width: 1400px;
  height: 834.7px;
  border-radius: 0px 0px 15px 15px;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
  /*  .basket {
    background-color: blue;
  } */
`;
