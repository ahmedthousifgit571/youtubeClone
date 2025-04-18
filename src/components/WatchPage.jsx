import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
     const [searchParams] =useSearchParams()
     const videoId = searchParams.get("v")
     console.log(searchParams.get("v")) 

    //this part to close the side bar when watchpage is loaded
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(closeMenu())
    },[])

  return (
    <div className='px-5'>
      <iframe  width="800" height="400" src={`https://www.youtube.com/embed/${videoId}`}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}
 
export default WatchPage
