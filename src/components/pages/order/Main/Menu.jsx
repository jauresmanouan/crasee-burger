import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((produit) => {
        return <div className="name-product">{produit.title}</div>;
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background-color: red;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 50px 50px;
  justify-items: center;

  .name-product {
    background-color: white;
    width: 240px;
    height: 330px;
  }
`;
