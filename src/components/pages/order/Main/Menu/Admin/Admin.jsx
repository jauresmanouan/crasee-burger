import AdminTab from "./AdminTab.jsx";
import AdminPanel from "./AdminPanel.jsx";
import styled from "styled-components";
import { useState } from "react";

export default function Admin() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <AdminStyled>
      <AdminTab isCollapse={isCollapse} setIsCollapse={setIsCollapse}/>
      {isCollapse && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: sticky;
  bottom: 0;
  overflow-x: hidden;
`;
