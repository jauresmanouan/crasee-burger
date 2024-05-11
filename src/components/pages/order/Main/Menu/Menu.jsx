import styled from "styled-components";
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu";
import { useState } from "react";
import Card from "./Card";
import { formatPrice } from "../../../../../utils/maths";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map(({id, imageSource, title, price}) => {
        return (
          <Card
            key={id}
            imageSource={imageSource}
            title={title}
            price={formatPrice(price)}
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
