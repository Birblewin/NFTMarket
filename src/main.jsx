// IMPORTING NECESSARY FILES
// IMPORTING NECESSARY MODULES
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeUIProvider } from "theme-ui";
import theme from "./theme/theme.jsx";
// IMPORTING NECESSARY CONTEXTS
import WalletSidePanelContextProvider from "./contexts/WalletSidePanelContext.jsx";
import UserContextProvider from "./contexts/UserContext.jsx";

// IMPORTING A CSS FILE
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
        <UserContextProvider>
          <WalletSidePanelContextProvider>
            <App />
          </WalletSidePanelContextProvider>
        </UserContextProvider>
    </ThemeUIProvider>
  </React.StrictMode>
);
