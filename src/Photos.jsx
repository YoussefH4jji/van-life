import { useOutletContext } from 'react-router-dom'


export default function Photos(){
    const {currentVan} = useOutletContext()
    // console.log(hostedVanDetails);
    console.log("hey")
    return(
      <>
        <div className='image-wrapper'>
          <img className='image-details'src={currentVan.imageUrl}/>
        </div>
      </>
    )
  }