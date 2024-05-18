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
  position: sticky;
  bottom: 0;
  overflow-x: hidden;
`;
