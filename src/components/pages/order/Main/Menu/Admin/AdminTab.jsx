import styled from "styled-components";
import Tab from "../../../../../reusale-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

export default function AdminTab({isCollapse, setIsCollapse}) {

  return (
    <AdminTabStyled>
      <Tab
        icon={isCollapse ? <FiChevronUp /> : <FiChevronDown/>}
        onclick={() => 
          setIsCollapse(!isCollapse)
        }
      />
      <Tab icon={<AiOutlinePlus />} name={"Ajouter un produit"} />
      <Tab icon={<MdModeEditOutline />} name={"Modifier un produit"} />
    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.div`
  margin-left: 71px;
  display: flex;
`;
