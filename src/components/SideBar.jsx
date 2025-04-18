import React from 'react';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, History, Film, Music, Gamepad2, Trophy, Flame, ShoppingBag, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const SideBar = () => {
  const toggleState = useSelector(store=> store.app.isMenuOpen)
  return !toggleState ? null : (
    <div className="w-64 bg-white h-screen overflow-y-auto py-2 border-r border-gray-200">
      {/* Main Navigation */}
      <div className="px-3 mb-4">
        <Link to={"/"}> <NavItem icon={<Home size={20} />} text="Home" active /></Link>
        <NavItem icon={<Compass size={20} />} text="Explore" />
        <NavItem icon={<PlaySquare size={20} />} text="Shorts" />
        <NavItem icon={<Film size={20} />} text="Subscriptions" />
      </div>
      
      {/* Divider */}
      <div className="border-t border-gray-200 my-2"></div>
      
      {/* Library Section */}
      <div className="px-3 mb-4">
        <h3 className="text-base font-medium px-3 py-1">You</h3>
        <NavItem icon={<PlaySquare size={20} />} text="Your channel" />
        <NavItem icon={<History size={20} />} text="History" />
        <NavItem icon={<Clock size={20} />} text="Watch later" />
        <NavItem icon={<ThumbsUp size={20} />} text="Liked videos" />
      </div>
      
      {/* Divider */}
      <div className="border-t border-gray-200 my-2"></div>
      
      {/* Subscriptions */}
      <div className="px-3 mb-4">
        <h3 className="text-base font-medium px-3 py-1">Subscriptions</h3>
        <NavItem 
          icon={
            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
              C
            </div>
          } 
          text="Channel 1" 
        />
        <NavItem 
          icon={
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
              T
            </div>
          } 
          text="Tech Channel" 
        />
        <NavItem 
          icon={
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
              M
            </div>
          } 
          text="Music Channel" 
        />
      </div>
      
      {/* Divider */}
      <div className="border-t border-gray-200 my-2"></div>
      
      {/* Explore */}
      <div className="px-3">
        <h3 className="text-base font-medium px-3 py-1">Explore</h3>
        <NavItem icon={<Flame size={20} />} text="Trending" />
        <NavItem icon={<Music size={20} />} text="Music" />
        <NavItem icon={<Film size={20} />} text="Movies & TV" />
        <NavItem icon={<Gamepad2 size={20} />} text="Gaming" />
        <NavItem icon={<Trophy size={20} />} text="Sports" />
        <NavItem icon={<Lightbulb size={20} />} text="Learning" />
        <NavItem icon={<ShoppingBag size={20} />} text="Shopping" />
      </div>
      
      {/* Footer Links */}
      <div className="px-6 mt-6 text-xs text-gray-500">
        <div className="flex flex-wrap gap-x-2">
          <span className="cursor-pointer hover:underline">About</span>
          <span className="cursor-pointer hover:underline">Press</span>
          <span className="cursor-pointer hover:underline">Copyright</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-x-2">
          <span className="cursor-pointer hover:underline">Terms</span>
          <span className="cursor-pointer hover:underline">Privacy</span>
          <span className="cursor-pointer hover:underline">Policy & Safety</span>
        </div>
        <div className="mt-4">© 2025 YouTube Clone</div>
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, text, active = false }) => {
  return (
    <div className={`flex items-center px-3 py-2 rounded-lg cursor-pointer ${active ? 'bg-gray-100 font-medium' : 'hover:bg-gray-100'}`}>
      <div className="mr-4 text-gray-600">{icon}</div>
      <div className="text-sm">{text}</div>
    </div>
  );
};

export default SideBar;