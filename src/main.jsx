// IMPORTING NECESSARY FILES
// IMPORTING NECESSARY MODULES
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
// IMPORTING NECESSARY CONTEXTS
import WalletSidePanelContextProvider from "./contexts/WalletSidePanelContext.jsx";
import UserContextProvider from "./contexts/UserContext.jsx";
import ThemeContextProvider from "./contexts/ThemeProvider.jsx";

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
      <ThemeContextProvider>
        <UserContextProvider>
          <WalletSidePanelContextProvider>
            <App />
          </WalletSidePanelContextProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </ClerkProvider>
  </React.StrictMode>
);
