/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Home from './Home'
import Layout from './Layout';
import About from './About';
import Vans from './Vans';
import VanDetails from './VanDetails';
import Dashboard from './Dashboard'
import Income from './Income'
import HostedVans from './HostedVans'
import HostedVanDetails from './HostedVanDetails'
import Reviews from './Reviews'
import HostLayout from './HostLayout'
import Details from './Details'
import Pricing from './Pricing'
import Photos from './Photos'
import ErrorPage from './ErrorPage'
import Login from './Login'
import AuthRequired from './AuthRequired'

import './server'
import './index.css'


// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element ={<Home/>} />
            <Route path='about' element ={<About/>} />
            <Route path='vans' element={<Vans/>} />
            <Route path='login'  element={<Login/>}/>
            <Route path='vans/:id' element={<VanDetails/>} />
            <Route element={<AuthRequired/>}>
              <Route path='host' element={<HostLayout/>}>
                <Route path='/host' element={<Dashboard/>}/>
                <Route path='income'  element={<Income/>}/>
                <Route path='vans'  element={<HostedVans/>}/>
                <Route path='vans/:id' element={<HostedVanDetails/>}>
                  <Route index element={<Details/>}/>
                  <Route path='pricing'element={<Pricing/>} />
                  <Route path='photos'element={<Photos/>} />
                </Route>
                <Route path='reviews' element={<Reviews/>}/>
              </Route>
            </Route>
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
        
      </BrowserRouter>
    </React.StrictMode>

  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
