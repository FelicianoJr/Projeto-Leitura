import React from "react";

const GroupButtonCard = props => {
  const {
    showComment,
    newComment,
    edit,
    remove,
    voteUp,
    voteDown,
    data
  } = props;

  return (
    <div>
      <button
        id="find"
        type="button"
        className="btn btn-outline-info btn-sm mr-sm-2"
        onClick={showComment}
      >
        Visualisar Comentários{" "}
        <span className="badge badge-light">{data.commentCount}</span>
      </button>
      <button
        id="edit"
        type="button"
        className="btn btn-outline-info btn-sm mr-sm-2"
        onClick={newComment}
      >
        Adicionar Comentário
      </button>
      <button
        id="edit"
        type="button"
        className="btn btn-outline-info btn-sm mr-sm-2"
        onClick={edit}
      >
        Editar
      </button>
      <button
        id="delete"
        type="button"
        className="btn btn-outline-info btn-sm mr-sm-2"
        onClick={remove}
      >
        Excluir
      </button>
      <button
        id="like"
        type="button"
        className="btn btn-outline-success btn-sm mr-sm-2"
        onClick={voteUp}
      >
        Gostei
      </button>
      <button
        id="dislike"
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={voteDown}
      >
        Não Gostei
      </button>
    </div>
  );
};

export default GroupButtonCard;
