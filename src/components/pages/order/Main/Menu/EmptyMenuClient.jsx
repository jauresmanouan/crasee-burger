import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled className="empty-menu-client">
      <span className="first-text">Victime de notre succès ! :D</span>
      <span className="second-text">De nouvelles recettes sont en cours de préparation.</span>
      <span>À très vite !</span>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  font-family: "Amatic SC";
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
  .first-text {
    font-weight: ${theme.fonts.weights.bold};
  }
  .second-text {
    font-weight: ${theme.fonts.weights.regular};
    margin-top: 21px;
    margin-bottom: 21px;
  }
`;
