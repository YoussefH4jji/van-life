import { FaArrowLeft } from "react-icons/fa6";
import {  Link, useLocation,useParams } from 'react-router-dom'
// import {getVans, loginUser,getHostVans}from './api'
import  { useEffect, useState } from 'react'


export  default function VanDetails(){
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