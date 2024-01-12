import {  Link,NavLink } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";


export default function Header(){
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