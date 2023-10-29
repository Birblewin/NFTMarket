// IMPORTING REACT ROUTER
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

// IMPORTING THE NECESSARY PAGES AND LAYOUTS
 import AllCollections from './pages/AllCollections/AllCollections';
import AllNftsPage from './pages/AllNft/AllNft';
import RewardsPage from './pages/RewardsPage'
import Home from './pages/Home';
import LaunchpadPage from './pages/launchpad/Launchpadpage/launchpad';
import LaunchesPage from './pages/launchpad/launchesPage/LaunchesPage';

 import RootLayout from './layouts/RootLayout'


 import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
 import { Web3Modal } from '@web3modal/react'
 import { configureChains, createConfig, WagmiConfig } from 'wagmi'
 import { arbitrum, mainnet, polygon } from 'wagmi/chains'
 
 const chains = [arbitrum, mainnet, polygon,]
 const projectId = 'a0879b9bbc96eb062ae8c28089833657'
 
 const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
 const wagmiConfig = createConfig({
   autoConnect: true,
   connectors: w3mConnectors({ projectId, chains }),
   publicClient
 })
 const ethereumClient = new EthereumClient(wagmiConfig, chains)



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

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
     
    </div>
  )
}
