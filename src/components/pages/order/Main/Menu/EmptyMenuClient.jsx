import styled from "styled-components";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled className="empty-menu-client">
      <span>Victime de notre succès ! :D</span>
      <span>De nouvelles recettes sont en cours de préparation.</span>
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
`;
