import styled from "styled-components";

export default function EmptyMenuAdmin({onReset}) {
  return (
    <EmptyMenuAdminStyled className="empty-menu-admin">
      <span>Le menu est vide ?</span>
      <span>Cliquez ci-dessous pour le réinitialiser</span>
      <button onClick={onReset}>Générer de nouveaux produits</button>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  button {
    cursor: pointer;
  }
`;