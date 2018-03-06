import React from "react";
import CardBodyMain from "./CardBodyMain";

const PostCard = ({ post, comments = [], toggle, toggleComment, action }) => {
  return (
    <div className="card  mt-3">
      <CardBodyMain
        onShow={action.onShowComment}
        onNew={action.onParentId}
        onEdit={action.onPost}
        onDelete={action.onDeletePost}
        onVote={action.onVotePost}
        toggle={toggle}
        toggleComment={toggleComment}
        data={post}
      />

      {comments &&
        comments.map(comment => (
          <div key={comment.id} className="card mb-2 mx-2">
            <CardBodyMain
              onEdit={action.onComment}
              onDelete={action.onDeleteComment}
              onVote={action.onVoteComment}
              toggle={toggleComment}
              data={comment}
            />
          </div>
        ))}
    </div>
  );
};

export default PostCard;
