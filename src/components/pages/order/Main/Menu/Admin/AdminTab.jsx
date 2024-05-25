import styled from "styled-components";
import Tab from "../../../../../reusale-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabConfig";

export default function AdminTab() {
  const {
    isCollapse,
    setIsCollapse,
    currentSelectTab,
    setCurrentSelectTab,
  } = useContext(OrderContext);

  const selecTab = (tabSelected) => {
    setIsCollapse(false);
    setCurrentSelectTab(tabSelected);
  };

  const tabs = getTabsConfig(currentSelectTab);

  return (
    <AdminTabStyled>
      <Tab
        icon={!isCollapse ? <FiChevronDown /> : <FiChevronUp />}
        className={!isCollapse && "is-active"}
        onClick={() => setIsCollapse(!isCollapse)}
      />
      {tabs.map((tab) => {
        return (
          <Tab
            icon={tab.icon}
            name={tab.name}
            className={currentSelectTab === tab.index && "is-active"}
            onClick={() => selecTab(tab.index)}
          />
        );
      })}
    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.div`
  margin-left: 71px;
  display: flex;

  .is-active {
    color: white;
    background-color: black;
    .icon {
      color: white;
    }
  }
`;
