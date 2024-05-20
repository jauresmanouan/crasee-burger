import AdminTab from "./AdminTab.jsx";
import AdminPanel from "./AdminPanel.jsx";
import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";

export default function Admin() {
  const { isCollapse } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTab />
      {!isCollapse && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: sticky;
  bottom: 0;
  overflow-x: hidden;
`;
