
import { NavLink, Outlet } from 'react-router-dom'

export default function HostLayout(){
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
  