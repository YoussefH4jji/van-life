import  { useEffect, useState } from 'react'
import {  Link} from 'react-router-dom'


export default function HostedVans(){
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