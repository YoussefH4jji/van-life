import { Outlet } from 'react-router-dom';
import Header from './Header'
export default function Layout(){
    return(
      <div className='layout'>
      <Header/>
      <Outlet/>
      <footer> Ⓒ 2022 #VANLIFE</footer>
      </div>
  
    )
  }