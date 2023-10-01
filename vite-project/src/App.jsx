// IMPORTING REACT ROUTER
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

// IMPORTING THE NECESSARY PAGES AND LAYOUTS
import AllCollectionsPage from './pages/AllCollectionsPage';
import AllNftsPagde from './pages/AllNftsPage';
import RewardsPage from './pages/RewardsPage'
import HomePage from './pages/HomePage';
import LaunchpadPage from './pages/LaunchpadPage';

import RootLayout from './layouts/RootLayout'

// IMPORT CSS FILE
import './App.css'

// CREATING A APPROUTER FUNCTION
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/allCollections' ></Route>
      <Route path=''></Route>
      <Route path=''></Route>
      <Route path=''></Route>
      <Route path=''></Route>
    </Route>
  )
)
