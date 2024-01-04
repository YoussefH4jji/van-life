/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route, Link,NavLink, useOutletContext, useSearchParams, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Outlet, Navigate } from 'react-router-dom';
import {getVans, loginUser,getHostVans}from './api'
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

function Layout(){
  return(
    <div className='layout'>
    <Header/>
    <Outlet/>
    <footer> Ⓒ 2022 #VANLIFE</footer>
    </div>

  )
}
function Header(){
  return (
    <header>
      <Link to="/" className='nav home--logo'><h1 >#VANLIFE</h1></Link>

     < nav className='home--nav'>
        {/* <Link to="/" className='nav home--logo'><h1 >#VANLIFE</h1></Link> */}
        <NavLink to='/host' className={`navlinks ${(({isActive}) => isActive? "active": "")}`}><h3>Host</h3></NavLink>
        <NavLink to='/about'className={`navlinks ${(({isActive}) => isActive? "active": "")}`}><h3 >About</h3></NavLink>
        <NavLink to= '/vans'className={`navlinks ${(({isActive}) => isActive? "active": "")}`}><h3 className='home--vans'>Vans</h3></NavLink>
        <NavLink to= '/login'className={`navlinks ${(({isActive}) => isActive? "active": "")}`}><h3 className='home--account'>{<MdAccountCircle className='login-logo'/>}</h3></NavLink>
        
        
      </nav>
    </header>
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
              <Link to= '/vans'className='content--btn'>Find your van</Link>
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
function Vans(){
  const [vansData,setVansData] = useState([])
  const [searchParams,setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    async function loadVans(){
      setLoading(true)
      const data =await getVans()
      setVansData(data)
      setLoading(false)
    } 
    loadVans()
  },[])
  const filteredVans = typeFilter ? vansData.filter(char => char.type === typeFilter) : vansData 
  // console.log(vansData)
  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }
  return(
    <div>
      <h1>Explore our van options</h1> 
      {/* {vansData.map((type,index)=>(
        <button key={index} className='types'>{type.type}</button>
      ))} */}
      <button onClick={()=>setSearchParams("?type=simple")}className='filter simple'>Simple</button>
      <button onClick={()=>setSearchParams("?type=rugged")}className='filter rugged'>Rugged</button>
      <button onClick={()=>setSearchParams("?type=luxury")}className='filter luxury'>Luxury</button>
      <button onClick={()=>setSearchParams(".")}className=' clear'>Clear filters</button>

      <div className='vans-container'>
      {filteredVans.map((van) =>(
      <>  
      
      <Link to={van.id} state={{search :`?${searchParams.toString()}`}}>

      <div key={van.id} className='vans'>
        
        <img src={van.imageUrl} alt='image of a van' className='van-img'/>
        <div className='van-details'>
          <p className='van-name'>{van.name}</p>
          <p>${van.price} <br></br><span>/day</span></p>
          
        </div>
        <button className={`van-type ${van.type}`}>{van.type}</button>
      </div>
     </Link>
     </> 
    ))}
      </div>
      
    </div>
  )
}


function VanDetails(){
  const params = useParams()
  const [details,setDetails] = useState(null)
  const location = useLocation()
  console.log(location);
  const search = location.state?.search || ""
  // console.log(params); 
  useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setDetails(data.vans))
  },[params.id])
  return(

      <div className='van-details-page'>
        {details? 
          <>
              <Link to={`..${search}`} relative='path' className='return'><p className='return-link'><FaArrowLeft className='arrow'/> Back to {details.type} vans</p></Link>
              <img src={details.imageUrl} className='van-details-img'/>
              <p className={`van-type ${details.type}`}>{details.type}</p>
              <div className='van-details-section'>
                <p className='van-details-name'>{details.name}</p>
                <p className='van-details-price'>${details.price} /day</p>
              </div>
              <p className='van-details-p'>The Modest Explorer is a van designed to get you out of the 
                  house and into nature. This beauty is equipped with solar panels, 
                  a composting toilet, a water tank and kitchenette. The idea is that 
                  you can pack up your home and escape for a weekend or even longer!
                </p>
                  <button className='rent-btn'>Rent this van </button>
          </>
        : <h2>Loading...</h2>}
      </div>
  )
  
}
function Dashboard(){
  return(
    <h1>Host Dashbord here</h1>
  )
}
function Income(){
  return(
    <h1>Host Income here</h1>
  )
}
function HostedVans(){
  const [hostedVandData,setHostedVanData] = useState([])
  useEffect(()=>{
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setHostedVanData(data.vans))
  },[])
  const hostedVans = hostedVandData.map((van,index)=>(

    <Link to={`/host/vans/${van.id}`}key={index}>

    <div  className='wrapper'>
    <img src={van.imageUrl} className='owned-van-img'/>
    <div  className='owned-van-container'>  
      <p className='owned-van-name'>{van.name}</p>
      <p className='owned-van-price'>${van.price}/day</p>
    </div>
    </div>
    </Link>
  ))
  return(
    
    <div className='owned-vans'>
      <h1>Your listed vans</h1>
      {hostedVandData.length > 0 ?
       hostedVans
       : 
       <h2>Loading..</h2>
       }
      
    </div>
  )
}

function HostedVanDetails(){
  const [currentVan, setCurrentVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans(id)
                setCurrentVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            {currentVan &&
                <div className="host-van-detail-layout-container">
                    <div className="host-van-detail">
                        <img src={currentVan.imageUrl} />
                        <div className="host-van-detail-info-text">
                            <i
                                className={`van-type van-type-${currentVan.type}`}
                            >
                                {currentVan.type}
                            </i>
                            <h2>{currentVan.name}</h2>
                            <h4>${currentVan.price}/day</h4>
                        </div>
                    </div>

                    <nav className="host-van-detail-nav">
                        <NavLink
                            to="."
                            end
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >
                            Details
                    </NavLink>
                        <NavLink
                            to="pricing"
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >
                            Pricing
                    </NavLink>
                        <NavLink
                            to="photos"
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >
                            Photos
                    </NavLink>
                    </nav>
                    <Outlet context={{ currentVan }} />
                </div>}
        </section>
    )
}
function Reviews(){
  return(
    <h1>Host Reviews here</h1>
  )
}
function HostLayout(){
  const activeStyles ={
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return(
    <>
      <nav className='host--nav'>
        <NavLink 
        to='/host'
        className='nav dash'
        end
        style={(({isActive}) => isActive? activeStyles:null)}
        >
          
          Dashboard</NavLink>
        <NavLink 
        to='income'
        className='nav inc'
        style={(({isActive}) => isActive? activeStyles:null)}
        >
          Income</NavLink>
        <NavLink 
        to='vans'
        className='nav inc'
        style={(({isActive}) => isActive? activeStyles:null)}
        >
          Vans</NavLink>
        <NavLink 
        to='reviews'
        className='nav rev '
        style={(({isActive}) => isActive? activeStyles:null)}

        >
          Reviewes</NavLink>
      </nav>   
      <Outlet/>
    </> 
  )
}

function Details(){
  // const params = useParams()
  const [hostedVandDetails] = useOutletContext()
  return(
    <>
      
      <div className='nav-details-wrapper'>
        {hostedVandDetails.map((van,index)=>(
          <div key={index}className='nav-details-container'>
            <p className='van-details-name'><span>Name: </span>{van.name}</p>
            <p className='van-details-type'><span>Category: </span>{van.type}</p>
            <p className='van-details-desc'><span>Description: </span>{van.description}</p>
            <p className='van-details-visibility'><span>Visibility: </span>Public</p>
            </div>
        ))}
      </div>
    </>
  )
}
function Pricing(){
  const [hostedVandDetails] = useOutletContext()
  return(
    <>
      <div className='pricing-wrapper'>
        {hostedVandDetails.map((van,index)=>(
          <p className='pricing-details' key={index}>{hostedVandDetails.price}/day</p>
        ))}
      </div>
    </>
  )
}
function Photos(){
  const [hostedVandDetails] = useOutletContext()
  return(
    <>
      <div className='image-wrapper'>
        {hostedVandDetails.map((van,index)=>(
          <img className='image-details' key={index}src={van.imageUrl}/>
        ))}
      </div>
    </>
  )
}
function ErrorPage(){
  return(
    <div className='error-container'>
      <h1 className='error-txt'>Sorry,the page you are looking for was not found.</h1>
      <Link to='..' className='error-link'><button className='return-btn'>Return to home</button></Link>
    </div>
  )
}
function Login(){
  const[loginFormData,setLoginFormData]=useState({email:"",password:""})
  const navigate = useNavigate();
  const location = useLocation();
  const [status,setStatus]=useState("idle")
  const [error,setError] = useState(null)
  
  function handleSubmit(e){
    e.preventDefault()
    setStatus("submitting")
    loginUser(loginFormData)
      .then(data=>{
        console.log(data)
        setError(null)
        navigate("/host",{replace:true})
      }).catch(err =>{
        setError(err)
      }).finally(()=>{
        setStatus("idle")
        
      })
    
    // console.log(loginUser)
  }
  function handleChange(e){
    const {name,value}= e.target
    setLoginFormData(prev =>({
      ...prev,
      [name]:value
    }))
  }

  return(
    <div className='login-container'>
      {location.state?.message&& <h3>{location.state.message}</h3>}
      <h1 className='login-txt'>Sign in to your account</h1>
      {error?.message&&<h3 className='user-error'>{error.message}</h3>}

      <form onSubmit={handleSubmit} className='login-form'>
        <input 
        name='email'
        type='email' 
        placeholder='Enter your email...'
        onChange={handleChange}
        value={loginFormData.email}
        className='email'
        />
        <input 
        name='password'
        type='password'
        placeholder='Enter your password'
        onChange={handleChange}
        value={loginFormData.password}
        className='pswrd'
        />
        <button className='login-btn'disabled={status==="submitting"} >{status==="submitting"?"Login in ...":"Login"}</button>
      </form>
    </div>
  )
}
function AuthRequired(){
  const authenticated = true

  if(!authenticated){
    return (
      <Navigate 
      to='/login'
      state={{message:"You must log in first"}}
      replace
      />
    )
  }
  return(<Outlet/>)
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
