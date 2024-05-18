import AdminTab from "./AdminTab.jsx";
import AdminPanel from "./AdminPanel.jsx";
import styled from "styled-components";

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTab />
      <AdminPanel />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  background-color: yellow;
  border: 2px solid fuchsia;
  position: sticky;
  bottom: 0;
`;
