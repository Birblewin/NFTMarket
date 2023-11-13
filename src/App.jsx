// IMPORTING REACT ROUTER
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//import React from 'react'
import { useContext, useMemo } from "react";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { MeshProvider } from "@meshsdk/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { createTheme, ThemeProvider, CssBaseline, useTheme } from "@mui/material";

//

// IMPORTING THE NECESSARY PAGES AND LAYOUTS

import AllCollections from './pages/AllCollections/AllCollections';
import AllNftsPage from './pages/AllNft/AllNft';
import RewardsPage from './pages/RewardsPage'
import Home from './pages/Home';
import LaunchpadPage from './pages/launchpad/Launchpadpage/launchpad';
import LaunchesPage from './pages/launchpad/launchesPage/LaunchesPage';
import ApplyForLaunchpadPage from './pages/launchpad/applyForLaunchpadPage/ApplyForLaunchpadPage';
import AuthenticationPage from './pages/launchpad/applyForLaunchpadPage/AuthenticationPage';

import Team from './pages/Team/Team';
import Verification from './pages/Verification/Verification';
import Mining from './pages/Mining/Mining';
import Impact from './pages/Impact/Impact';
import Faq from './pages/FAQ/Faq';
import TnC from './pages/T&C/T&C';
import PPolicy from './pages/PrivacyPolicy/PPolicy';

import RootLayout from './layouts/RootLayout'
import ApplyForLaunchpadLayout from './layouts/ApplyForLaunchpadLayout'


import RootLayout from "./layouts/RootLayout";
import {ThemeContext} from "./contexts/ThemeProvider";

// 1. Get projectId
const projectId = "a0879b9bbc96eb062ae8c28089833657";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Component",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

// CREATING A APPROUTER FUNCTION
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* HOMEPAGE */}
      <Route path="/" element={<Home />}></Route>
      <Route path="home" element={<Home />}></Route>

      {/* REWARDS */}
      <Route path="rewards" element={<RewardsPage />}></Route>

      {/* EXPLORE */}
      <Route path="explore">
        <Route path="allCollections" element={<AllCollections />}></Route>
        <Route path="allNFTs" element={<AllNftsPage />}></Route>
      </Route>

      {/* ABOUT */}
      <Route path="about">
        <Route path="team" element={<Team />}></Route>
        <Route path="impact" element={<Impact />}></Route>
        <Route path="FAQ" element={<Faq />}></Route>
        <Route path="T&C" element={<TnC />}></Route>
        <Route path="privacy-policy" element={<PPolicy />}></Route>
      </Route>

      {/* CREATORS */}
      <Route path="creators">
        <Route path="verification" element={<Verification />}></Route>
        <Route path="mining" element={<Mining />}></Route>
      </Route>

      {/* LAUNCHPAD */}

      <Route path='launchpad'>
        <Route path='launches' element={<LaunchesPage/>}></Route>
        <Route path='launch details' element={<LaunchpadPage/>}></Route>
        
        <Route path='apply for launchpad' element={<ApplyForLaunchpadLayout/>}>
          <Route path='apply' element={<ApplyForLaunchpadPage/>}></Route>
          <Route path='auth' element={<AuthenticationPage/>}></Route>
        </Route>

      </Route>
    </Route>
  )
);

// CREATING AN APP FUNCTION
export default function App() {
  const [mode] = useContext(ThemeContext)
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
     
      ...(mode === 'dark' ? {
        background: {
          default: '#141414',
          paper: '#141414',
        },
      }: {
        background: {
          default:'#fff',
          paper: 'whitesmoke'
        }
      }),
      text: {
        ...(mode === 'light'
          ? {
            primary: '#000',
            secondary:'#9ca3af'
            }
          : {
              primary: '#fff',
              secondary:'#9ca3af',
            }),
      },
    },
  });
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <MeshProvider>
          <WagmiConfig config={wagmiConfig}>
            <RouterProvider router={appRouter} />
          </WagmiConfig>
        </MeshProvider>
      </div>
    </ThemeProvider>
  );
}
