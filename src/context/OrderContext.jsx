import { createContext } from "react";

export default createContext({
  isAdmin: true,
  setIsAdmin: () => {},
  isAddSelected: true,
  setIsAddSelected: () => {},
  isEditSelected: true,
  setIsEditSelected: () => {},
  isCollapse: true,
  setIsCollapse: () => {},
  currentSelectTab: true,
  setCurrentSelectTab: () => {},
  menu: [],
  handleAdd: () => {},

  handleDeleteCard: () => {},
  handleResetMenu: () => {},
});
