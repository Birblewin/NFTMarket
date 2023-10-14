// IMPORTING NECESSARY FILES
  // IMPORTING NECESSARY MODULES
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
  // IMPORTING NECESSARY CONTEXTS
import WalletSidePanelContextProvider from './contexts/WalletSidePanelContext.jsx'

// IMPORTING A CSS FILE
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletSidePanelContextProvider>
      <App />
    </WalletSidePanelContextProvider>
  </React.StrictMode>,
)
