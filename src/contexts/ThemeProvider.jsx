import { useState, createContext } from "react";
export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
    
  const [mode, setMode] = useState("light");
  const toggleTheme = () => {
    setMode((mode) => (mode === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={[ mode, toggleTheme ]}>
      {children}
    </ThemeContext.Provider>
  );
}
