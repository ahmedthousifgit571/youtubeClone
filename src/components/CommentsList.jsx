import React, { useState } from 'react';
import { User, ThumbsUp, ThumbsDown, ChevronDown, ChevronRight } from 'lucide-react';

const CommentItem = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  
  return (
    <div className="comment-item mb-4">
      <div className="flex">
        <div className="mr-3 bg-gray-200 rounded-full p-2 h-10 w-10 flex items-center justify-center">
          <User size={20} />
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <p className="font-medium text-sm">{comment.name}</p>
            <span className="text-gray-500 text-xs ml-2">{comment.timestamp}</span>
          </div>
          <p className="text-sm mt-1">{comment.text}</p>
          
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <button className="flex items-center mr-4 hover:text-gray-900">
              <ThumbsUp size={16} className="mr-1" />
              {comment.likes}
            </button>
            
            <button className="flex items-center mr-4 hover:text-gray-900">
              <ThumbsDown size={16} className="mr-1" />
            </button>
            
            <button className="hover:text-gray-900">Reply</button>
          </div>
          
          {comment.replies.length > 0 && (
            <div className="mt-2">
              <button 
                className="text-blue-600 text-sm flex items-center"
                onClick={() => setShowReplies(!showReplies)}
              >
                {showReplies ? (
                  <ChevronDown size={18} className="mr-1" />
                ) : (
                  <ChevronRight size={18} className="mr-1" />
                )}
                {showReplies ? 'Hide' : 'View'} {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
              </button>
              
              {showReplies && (
                <div className="pl-8 mt-3">
                  {comment.replies.map(reply => (
                    <div key={reply.id} className="mb-3 flex">
                      <div className="mr-2 bg-gray-200 rounded-full p-1 h-8 w-8 flex items-center justify-center">
                        <User size={16} />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium text-sm">{reply.name}</p>
                          <span className="text-gray-500 text-xs ml-2">3 days ago</span>
                        </div>
                        <p className="text-sm mt-1">{reply.text}</p>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <button className="flex items-center mr-4 hover:text-gray-900">
                            <ThumbsUp size={14} className="mr-1" />
                            5
                          </button>
                          <button className="flex items-center mr-4 hover:text-gray-900">
                            <ThumbsDown size={14} className="mr-1" />
                          </button>
                          <button className="hover:text-gray-900">Reply</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div className="comments-list">
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;