/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
    
  const [mode, setMode] = useState("light");
  
  const toggleTheme = () => {
    setMode((mode) => (mode === "light" ? "dark" : "light"));
  };
  
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
