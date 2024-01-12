import {getVans}from './api'
import {  Link, useSearchParams } from 'react-router-dom'
import  { useEffect, useState } from 'react'

export default function Vans(){
    const [vansData,setVansData] = useState([])
    const [searchParams,setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
      async function loadVans(){
        setLoading(true)
        const data = await getVans()
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
  