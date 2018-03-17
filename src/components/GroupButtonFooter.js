import React from "react";
import { Link } from "react-router-dom";

const GroupButtonFooter = ({ newComment, post }) => {
  return (
    <div>
      <div className="card-footer  ">
        <Link
          className="btn btn-sm btn-light"
          to={`/${post.category}/${post.id}`}
        >
          Visualisar Comentários{" "}
          <span className="badge badge-info">{post.commentCount}</span>
        </Link>
        <button className="btn btn-sm btn-light" onClick={newComment}>
          Adicionar Comentário
        </button>
      </div>
    </div>
  );
};

export default GroupButtonFooter;
