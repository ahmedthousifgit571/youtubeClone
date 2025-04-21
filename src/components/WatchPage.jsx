import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import { User } from 'lucide-react';
import Comments from './Comments'
import RelatedVideos from './RelatedVideos';

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
    <div className="flex flex-col md:flex-row">
      <div className="flex-grow">
        {/* Video player section */}
        <div className="w-full">
          <iframe 
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${videoId}`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Video information section */}
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">Video Title</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-full p-2 mr-2 flex items-center justify-center">
                <User size={24} />
              </div>
              <div>
                <p className="font-medium">Channel Name</p>
                <p className="text-sm text-gray-500">1.2M subscribers</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white font-medium rounded-full hover:bg-red-700">
              Subscribe
            </button>
          </div>
          
          {/* Video description */}
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-sm">
              This is a placeholder for the video description. It would typically include information about the video content, links, and other details provided by the creator.
            </p>
          </div>
        </div>
        
        {/* Comments section */}
        <div className="p-4 border-t">
          <Comments />
        </div>
      </div>
      
      {/* Related videos sidebar - can be implemented later */}
      <div className="md:w-1/4 p-4">
       <RelatedVideos />
      </div>
    </div>
  )
}
 
export default WatchPage
