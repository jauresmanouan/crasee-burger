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

  const selectAddTab = () => {
    setIsCollapse(false);
    setIsAddSelected(true);
    setIsEditSelected(false);
  };

  const selectEditTab = () => {
    setIsCollapse(false);
    setIsAddSelected(false);
    setIsEditSelected(true);
  };

  return (
    <AdminTabStyled>
      <Tab
        icon={!isCollapse ? <FiChevronDown /> : <FiChevronUp />}
        className={!isCollapse && "is-active"}
        onClick={() => setIsCollapse(!isCollapse)}
      />
      <Tab
        icon={<AiOutlinePlus />}
        name={"Ajouter un produit"}
        className={isAddSelected && "is-active"}
        onClick={selectAddTab}
      />
      <Tab
        icon={<MdModeEditOutline />}
        name={"Modifier un produit"}
        className={isEditSelected && "is-active"}
        onClick={selectEditTab}
      />
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
