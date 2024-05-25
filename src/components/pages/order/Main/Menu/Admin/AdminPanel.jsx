import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabSelected, getTabsConfig } from "./getTabConfig";

export default function AdminPanel() {
  const { currentSelectTab } = useContext(OrderContext);

  const tabs = getTabsConfig(currentSelectTab);
  const tabSelected = getTabSelected(tabs, currentSelectTab);

  return (
    <AdminPanelStyled>
      {currentSelectTab === tabSelected.index && tabSelected.name}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  width: 1400px;
  height: 250px;
  background-color: white;
  box-shadow: ${theme.shadows.subtle};
`;
