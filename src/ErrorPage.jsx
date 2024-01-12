import { Link } from 'react-router-dom'


export default function ErrorPage(){
    return(
      <div className='error-container'>
        <h1 className='error-txt'>Sorry,the page you are looking for was not found.</h1>
        <Link to='..' className='error-link'><button className='return-btn'>Return to home</button></Link>
      </div>
    )
  }