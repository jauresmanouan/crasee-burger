import { createContext } from "react";

export default createContext({
  isAdmin: true,
  setIsAdmin: () => {},
});
