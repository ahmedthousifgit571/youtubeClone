import React, { useState } from 'react';
import CommentsList from './CommentsList';
import { User } from 'lucide-react';

const Comments = () => {
  const [comment, setComment] = useState("");
  
  // Mock data for comments - in a real app this would come from an API
  const commentsData = [
    {
      id: 1,
      name: "John Doe",
      text: "This video was super helpful! Thanks for sharing.",
      replies: [
        {
          id: 101,
          name: "Video Creator",
          text: "Glad you found it useful, John!",
          replies: []
        }
      ],
      likes: 24,
      timestamp: "3 days ago"
    },
    {
      id: 2,
      name: "Alice Smith",
      text: "Could you make a follow-up video explaining the second part in more detail?",
      replies: [],
      likes: 15,
      timestamp: "1 week ago"
    },
    {
      id: 3,
      name: "Robert Johnson",
      text: "I've been waiting for someone to cover this topic. Great explanation!",
      replies: [
        {
          id: 102,
          name: "Maria Garcia",
          text: "Totally agree with you Robert!",
          replies: []
        }
      ],
      likes: 42,
      timestamp: "2 weeks ago"
    }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted comment:", comment);
    setComment("");
  };
  
  return (
    <div className="comments-container">
      <h3 className="text-xl font-bold mb-4">{commentsData.length} Comments</h3>
      
      {/* Add comment form */}
      <div className="flex items-start mb-6">
        <div className="mr-3 bg-gray-200 rounded-full p-2">
          <User size={24} />
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-2 border-b border-gray-300 focus:border-blue-500 outline-none"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <button 
              type="button" 
              className="px-4 py-2 mr-2 text-gray-500 font-medium rounded-full hover:bg-gray-100"
              onClick={() => setComment("")}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={`px-4 py-2 bg-blue-500 text-white font-medium rounded-full ${!comment.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
              disabled={!comment.trim()}
            >
              Comment
            </button>
          </div>
        </form>
      </div>
      
      {/* Comments list */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default Comments;