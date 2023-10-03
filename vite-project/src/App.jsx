// IMPORTING REACT ROUTER
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

// IMPORTING THE NECESSARY PAGES AND LAYOUTS
import AllCollections from './pages/AllCollections/AllCollections';
import AllNftsPage from './pages/AllNFTS/AllNfts';
import RewardsPage from './pages/RewardsPage'
import Home from './pages/Home';
import LaunchpadPage from './pages/launchpad/Launchpadpage/launchpad';
import LaunchesPage from './pages/launchpad/launchesPage/LaunchesPage';

import RootLayout from './layouts/RootLayout'

// IMPORT CSS FILE
import './App.css'

// CREATING A APPROUTER FUNCTION
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='allCollections' element={<AllCollections/>}></Route>
      <Route path='allNFTs' element={<AllNftsPage/>}></Route>
      <Route path='rewards' element={<RewardsPage/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      
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
      <RouterProvider router={appRouter}/>
    </div>
  )
}