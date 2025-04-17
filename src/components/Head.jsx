import React from 'react'
import { Search, Mic, Bell, Menu, Video, User, MoreVertical } from 'lucide-react';

const Head = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white sticky top-0 z-10 shadow-sm">
    
    {/* Left section - Logo and menu */}
    <div className="flex items-center gap-4">
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Menu size={20} />
      </button>
      <div className="flex items-center cursor-pointer">
        
        <div className="flex items-center">
          
          <div className="relative w-8 h-6 bg-red-600 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="w-3 h-3 bg-white transform rotate-45" style={{ borderRadius: '2px' }}></div>
          </div>
          
          <span className="ml-1 text-xl font-bold">YouTube</span>
        </div>
      </div>
    </div>

    {/* Middle section - Search bar */}
    <div className="flex items-center flex-1 max-w-2xl mx-4">
      <div className="flex items-center w-full">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-4 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="bg-gray-100 border border-l-0 border-gray-300 px-5 py-2 rounded-r-full hover:bg-gray-200">
          <Search size={20} />
        </button>
      </div>
      <button className="ml-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
        <Mic size={20} />
      </button>
    </div>

    {/* Right section - User controls */}
    <div className="flex items-center gap-3">
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Video size={20} />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Bell size={20} />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <MoreVertical size={20} />
      </button>
      <button className="flex items-center justify-center h-8 w-8 bg-blue-100 text-blue-800 rounded-full">
        <User size={16} />
      </button>
    </div>
  </header>
  );
}

export default Head
