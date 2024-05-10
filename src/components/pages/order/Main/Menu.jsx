import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((produit) => {
        return (
          <div className="product">
            <div className="image-product">
              <img src={produit.imageSource} alt={produit.title} />
            </div>
            <div className="name-product">{produit.title}</div>
            <div className="price-product">{produit.price}</div>
            <button>Ajouter</button>
          </div>
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

  .product {
    font-family: "Open Sans";
    background-color: red;
    width: 240px;
    height: 330px;
  }
`;
