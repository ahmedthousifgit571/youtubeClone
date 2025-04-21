import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

const RelatedVideos = () => {
  // Mock data for related videos
  const relatedVideosData = [
    {
      id: 'abc123',
      title: 'How to Build a React App from Scratch',
      channelName: 'Code Masters',
      views: '145K',
      timestamp: '2 weeks ago',
      thumbnail: 'https://via.placeholder.com/210x118',
      duration: '12:45'
    },
    {
      id: 'def456',
      title: 'Advanced Redux Tutorial for React Applications',
      channelName: 'React Experts',
      views: '89K',
      timestamp: '3 days ago',
      thumbnail: 'https://via.placeholder.com/210x118',
      duration: '18:32'
    },
    {
      id: 'ghi789',
      title: 'CSS Grid vs Flexbox - Which One Should You Use?',
      channelName: 'Web Design Pro',
      views: '230K',
      timestamp: '1 month ago',
      thumbnail: 'https://via.placeholder.com/210x118',
      duration: '8:15'
    },
    {
      id: 'jkl012',
      title: 'Building a YouTube Clone with React and Firebase',
      channelName: 'Project Tutorials',
      views: '312K',
      timestamp: '5 months ago',
      thumbnail: 'https://via.placeholder.com/210x118',
      duration: '22:40'
    },
    {
      id: 'mno345',
      title: '10 React Hooks You Need to Know',
      channelName: 'React Daily',
      views: '178K',
      timestamp: '2 months ago',
      thumbnail: 'https://via.placeholder.com/210x118',
      duration: '15:20'
    },
    {
      id: 'pqr678',
      title: 'Create a Responsive Navigation Menu in React',
      channelName: 'UI Masterclass',
      views: '92K',
      timestamp: '3 weeks ago',
      thumbnail: 'https://via.placeholder.com/210x118',
      duration: '10:58'
    }
  ];

  return (
    <div className="related-videos">
      <h3 className="font-medium mb-4">Related Videos</h3>
      <div className="flex flex-col space-y-3">
        {relatedVideosData.map(video => (
          <Link to={`/watch?v=${video.id}`} key={video.id} className="flex space-x-2 cursor-pointer hover:bg-gray-100 rounded-lg p-1">
            {/* Video thumbnail */}
            <div className="relative flex-shrink-0">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-40 h-24 rounded-lg object-cover"
              />
              <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                {video.duration}
              </span>
            </div>
            
            {/* Video info */}
            <div className="flex-1">
              <h4 className="text-sm font-medium line-clamp-2">{video.title}</h4>
              <p className="text-xs text-gray-600 mt-1">{video.channelName}</p>
              <p className="text-xs text-gray-600">
                {video.views} views • {video.timestamp}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos;