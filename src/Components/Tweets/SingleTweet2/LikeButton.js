import React from 'react';

export default function LikeButton({ likes, userId, handleLike }) {
  const liked = likes.find(like => like.user_id === userId);

  return liked ? (
    <div className="unlike-button liked" onClick={() => handleLike('unlike')}>
      <span>♥</span>
      <p>{`   ${likes.length}`}</p>
    </div>
  ) : (
    <div className="like-button" onClick={() => handleLike('like')}>
      <span>♥</span> <p>{`   ${likes.length}`}</p>
    </div>
  );
}
