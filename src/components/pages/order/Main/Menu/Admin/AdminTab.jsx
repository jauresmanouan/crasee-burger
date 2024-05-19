import styled from "styled-components";
import Tab from "../../../../../reusale-ui/Tab";
import { IoChevronDown } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";

export default function AdminTab() {
  return (
    <AdminTabStyled>
      <Tab icon={<IoChevronDown />} />
      <Tab icon={<FaPlus />} name={"Ajouter un produit"} />
      <Tab icon={<RiPencilFill />} name={"Modifier un produit"} />
    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.div`
  margin-left: 71px;
  display: flex;
`;
