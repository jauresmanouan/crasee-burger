import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function AdminPanel({ isAddSelected, isEditSelected }) {
  return (
    <AdminPanelStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  width: 1400px;
  height: 250px;
  background-color: white;
  box-shadow: ${theme.shadows.subtle};
`;
