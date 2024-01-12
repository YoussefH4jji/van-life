import { useOutletContext } from 'react-router-dom'


export default function Details(){
  const {currentVan} = useOutletContext()
  return(
      <>
      {/* <div>
        {currentVan.type}
      </div> */}
        <div className='nav-details-wrapper'>
          
            <div className='nav-details-container'>
              <p className='van-details-name'><span>Name: </span>{currentVan.name}</p>
              <p className='van-details-type'><span>Category: </span>{currentVan.type}</p>
              <p className='van-details-desc'><span>Description: </span>{currentVan.description}</p>
              <p className='van-details-visibility'><span>Visibility: </span>Public</p>
              </div>
              
      
        </div>
      </>
    )
  }