import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function AdminPanel() {
  return <AdminPanelStyled>AdminPanel</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  width: 1400px;
  height: 250px;
  background-color: white;
  box-shadow: ${theme.shadows.subtle} ;
`;
