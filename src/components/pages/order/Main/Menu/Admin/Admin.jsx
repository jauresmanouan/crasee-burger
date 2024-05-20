import AdminTab from "./AdminTab.jsx";
import AdminPanel from "./AdminPanel.jsx";
import styled from "styled-components";
import { useState } from "react";

export default function Admin() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);

  return (
    <AdminStyled>
      <AdminTab
        isCollapse={isCollapse}
        setIsCollapse={setIsCollapse}
        isAddSelected={isAddSelected}
        setIsAddSelected={setIsAddSelected}
        isEditSelected={isEditSelected}
        setIsEditSelected={setIsEditSelected}
      />
      {isCollapse && (
        <AdminPanel
          isAddSelected={isAddSelected}
          setIsAddSelected={setIsAddSelected}
          isEditSelected={isEditSelected}
          setIsEditSelected={setIsEditSelected}
        />
      )}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: sticky;
  bottom: 0;
  overflow-x: hidden;
`;
