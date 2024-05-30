import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AjouterProduits from "./AdminContent/AjouterProduits.jsx"
import ModifierProduits from "./AdminContent/ModifierProduits.jsx";

export const getTabsConfig = (currentSelectTab) => [
  {
    id: 1,
    index: "add",
    icon: <AiOutlinePlus />,
    name: "Ajouter un produit",
    Content: <AjouterProduits/>,
  },

  {
    id: 2,
    index: "edit",
    icon: <MdModeEditOutline />,
    name: "Modifier un produit",
    Content: <ModifierProduits/>,
  },
];

export const getTabSelected = (tabs, currentSelectTab) =>
  tabs.find((tab) => tab.index === currentSelectTab);
