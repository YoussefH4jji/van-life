
import { useOutletContext } from 'react-router-dom'

export default function Pricing(){
    const {currentVan} = useOutletContext()
    return(
      <>
        <div className='pricing-wrapper'>
            <p className='pricing-details' >${currentVan.price}/day</p>
        </div>
      </>
    )
  }