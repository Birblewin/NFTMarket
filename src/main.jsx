// IMPORTING NECESSARY FILES
// IMPORTING NECESSARY MODULES
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeUIProvider } from "theme-ui";
import { ClerkProvider } from "@clerk/clerk-react";
import theme from "./theme/theme.jsx";
// IMPORTING NECESSARY CONTEXTS
import WalletSidePanelContextProvider from "./contexts/WalletSidePanelContext.jsx";
import UserContextProvider from "./contexts/UserContext.jsx";

// IMPORTING A CSS FILE
import "./css/index.css";

// A CHECK FOR THE CLERK PROVIDER
if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={clerkPublishableKey}
      supportEmail="ronniedenzel0@gmail.com"
    >
      <ThemeUIProvider theme={theme}>
          <UserContextProvider>
            <WalletSidePanelContextProvider>
              <App />
            </WalletSidePanelContextProvider>
          </UserContextProvider>
      </ThemeUIProvider>
    </ClerkProvider>
  </React.StrictMode>
);
