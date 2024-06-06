import styled from "styled-components";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import { theme } from "../../../theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isCollapse, setIsCollapse] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentSelectTab, setCurrentSelectTab] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const handleAdd = (newProduct) => {
    //Copie du state
    const menuCopy = [...menu];

    //Manipulation sur la Copie du state
    const updateMenu = [newProduct, ...menu];

    //Update du state
    setMenu(updateMenu);
  };

  const orderContextValue = {
    isAdmin,
    setIsAdmin,
    isCollapse,
    setIsCollapse,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    currentSelectTab,
    setCurrentSelectTab,
    menu,
    setMenu,
    handleAdd,
  };

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
