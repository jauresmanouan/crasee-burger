import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (currentSelectTab) => [
  {
    index: "add",
    icon: <AiOutlinePlus />,
    name: "Ajouter un produit",
  },

  {
    index: "edit",
    icon: <MdModeEditOutline />,
    name: "Modifier un produit",
  },
];

export const getTabSelected = (tabs, currentSelectTab) =>
  tabs.find((tab) => tab.index === currentSelectTab);
