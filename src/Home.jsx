
import {  Link } from 'react-router-dom'

export default function Home(){
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