// IMPORTING REACT ROUTER
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

// IMPORTING THE NECESSARY PAGES AND LAYOUTS
import AllCollections from './pages/AllCollections/AllCollections';
import AllNftsPage from './pages/AllNft/AllNft';
import RewardsPage from './pages/RewardsPage'
import Home from './pages/Home';
import LaunchpadPage from './pages/launchpad/Launchpadpage/launchpad';
import LaunchesPage from './pages/launchpad/launchesPage/LaunchesPage';
import RootLayout from './layouts/RootLayout'

// 1. Get projectId
const projectId = 'a0879b9bbc96eb062ae8c28089833657'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Component',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

// CREATING A APPROUTER FUNCTION
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='allCollections' element={<AllCollections/>}></Route>
      <Route path='allNFTs' element={<AllNftsPage/>}></Route>
      <Route path='rewards' element={<RewardsPage/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      
      <Route path='launchpad'>
        <Route path='launches' element={<LaunchesPage/>}></Route>
        <Route path='launch details' element={<LaunchpadPage/>}></Route>
      </Route>
    </Route>
  )
)

// CREATING AN APP FUNCTION
export default function App(){
  return(
    <div>
      <WagmiConfig config={wagmiConfig}>
        <RouterProvider router={appRouter}/>
      </WagmiConfig>
    </div>
  )
}