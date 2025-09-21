import {useContext} from "react";
import {ThemeContext} from "../utils/ThemeContext.jsx";

export const useTheme = () => {
  return useContext(ThemeContext)
}