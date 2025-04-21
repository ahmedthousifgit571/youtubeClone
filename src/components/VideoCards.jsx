import React from 'react';

const VideoCards = ({ info }) => {
  if (!info) return null;   //early return 
  
  const { snippet, statistics, contentDetails } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  
  // Format view count
  const formatViewCount = (count) => {
    if (!count) return '0 views';
    const num = parseInt(count);
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M views`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K views`;
    } else {
      return `${num} views`;
    }
  };
  
  // Format time since published
  const timeAgo = (dateString) => {
    const now = new Date();
    const publishDate = new Date(dateString);
    const diffInSeconds = Math.floor((now - publishDate) / 1000);
    
    const seconds = diffInSeconds;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    
    if (years > 0) return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    if (months > 0) return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    if (days > 0) return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    if (hours > 0) return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    if (minutes > 0) return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
  };
  
  // Format duration from PT1H15M3S format to 1:15:03
  const formatDuration = (duration) => {
    if (!duration) return '';
    
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '';
    
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  };
  
  return (
    <div className="w-full max-w-xs cursor-pointer hover:scale-105 transition-transform duration-200">
      {/* Thumbnail with duration */}
      <div className="relative rounded-xl overflow-hidden mb-3">
        <img 
          src={thumbnails?.maxres?.url || thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url} 
          alt={title}
          className="w-full object-cover aspect-video"
        />
        {contentDetails?.duration && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
            {formatDuration(contentDetails.duration)}
          </div>
        )}
      </div>
      
      {/* Video info */}
      <div className="flex">
        {/* Channel icon */}
        <div className="flex-shrink-0 mr-3">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {channelTitle && channelTitle.charAt(0).toUpperCase()}
          </div>
        </div>
        
        {/* Title, channel name, and stats */}
        <div className="flex-1 overflow-hidden">
          <h3 className="text-base font-medium line-clamp-2 mb-1" title={title}>
            {title}
          </h3>
          <p className="text-sm text-gray-600">
            {channelTitle}
          </p>
          <div className="text-sm text-gray-600 flex items-center">
            <span>{formatViewCount(statistics?.viewCount)}</span>
            <span className="mx-1">•</span>
            <span>{timeAgo(publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;