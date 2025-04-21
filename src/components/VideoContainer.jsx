import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';


const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json.items);
      console.log(json.items)
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-y-auto h-[500px] hide-scrollbar">
      {videos.map((video) => (
        
       <Link to={'/watch?v=' + video.id} key={video.id}> <VideoCards  info={video} /> </Link>
        
      ))}
    </div>
  );
};

export default VideoContainer;