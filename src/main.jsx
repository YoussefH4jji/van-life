/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'

// import App from './App.jsx'
import './index.css'


// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        < nav className='home--nav'>
          <Link to="/" className='home--logo'><h1 >#VANLIFE</h1></Link>
          <Link to='/about'className='home--about'><h3 >About</h3></Link>
          <Link className='home--vans'><h3 className='home--vans'>Vans</h3></Link>
        </nav>
      
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/about' element ={<About/>} />
        </Routes>
        <footer>
          Ⓒ 2022 #VANLIFE
        </footer>
      </BrowserRouter>
    </React.StrictMode>

  )
}

function Home(){
  return (
    <div className='home--container'>
      <main className='home--main'>
        <section className='home--content'>
          {/* <img src='https://plus.unsplash.com/premium_photo-1690451119118-cc9a5af0661a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='view image'> */}
          <div className='content'>
            <h2 className='content--title'>You got 
              the travel plans, 
              we got the travel vans.</h2>
              <p className='content--p'>Add adventure to your life by joining the #vanlife movement. Rent the perfect 
                van to make your perfect road trip.</p>
              <button className='content--btn'>Find your van</button>
          </div>
          
        </section>
      </main>
      
    </div>
  )
}
function About (){
  return (
    <div>
      <div className='header'></div>
      <main className='about--content'>
      <h1 className='about--title'>Don’t squeeze in a sedan when you could relax in a van.</h1>
      <p className='about--p'>Our mission is to enliven your
         road trip with the perfect travel van rental. 
         Our vans are recertified  each trip to 
         ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)</p>
        <p className='about--p'>Our team is full of vanlife enthusiasts 
        who know firsthand the magic of touring the 
        world on 4 wheels.</p>
        <div className='content--smth'>
          <h1 className='smth-title'>Your destination is waiting.<br></br>Your van is ready.</h1>
          <button className='smth-btn'>Explore our vans</button>
        </div>
      </main>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
