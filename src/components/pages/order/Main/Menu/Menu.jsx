import styled from "styled-components";
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu";
import { useState } from "react";
import Card from "./Card";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((produit) => {
        return (
          <Card
            imageSource={produit.imageSource}
            title={produit.title}
            price={produit.price}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;

`;
