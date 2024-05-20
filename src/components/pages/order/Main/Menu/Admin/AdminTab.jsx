import styled from "styled-components";
import Tab from "../../../../../reusale-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

export default function AdminTab() {
  const {
    isCollapse,
    setIsCollapse,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

  const selecTab = (typeTab) => {
    setIsCollapse(false);

    if (typeTab === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
    }

    if (typeTab === "edit") {
      setIsAddSelected(false);
      setIsEditSelected(true);
    }
  };

  const tabConfig = [
    {
      icon: !isCollapse ? <FiChevronDown /> : <FiChevronUp />,
      name: "",
      className: !isCollapse && "is-active",
      onClick: () => setIsCollapse(!isCollapse),
    },

    {
      icon: <AiOutlinePlus />,
      name: "Ajouter un produit",
      className: isAddSelected && "is-active",
      onClick: () => selecTab("add"),
    },

    {
      icon: <MdModeEditOutline />,
      name: "Modifier un produit",
      className: isEditSelected && "is-active",
      onClick: () => selecTab("edit"),
    },
  ];

  return (
    <AdminTabStyled>
      {tabConfig.map((tab) => {
        return (
          <Tab
            icon={tab.icon}
            name={tab.name}
            className={tab.className}
            onClick={tab.onClick}
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
