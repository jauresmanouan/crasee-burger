import styled from "styled-components";
import { useContext } from "react";
import Card from "./Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";

const COMING_SOON = "/images/coming-soon.png";

export default function Menu() {
  const { menu, isAdmin, setMenu } = useContext(OrderContext);

  const handleDeleteCard = (idOfProductToDelete) => {
    //1_Copie du state
    const menuCopy = [...menu];

    //2_Manip de la copie du state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    console.log("menuUpdated,", menuUpdated)
    //3_ State Updated
    setMenu(menuUpdated);
  };

  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
            imageSource={imageSource ? imageSource : COMING_SOON}
            title={title}
            price={formatPrice(price)}
            hasDeleteButton={!isAdmin}
            onDelete={() => handleDeleteCard(id)}
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
