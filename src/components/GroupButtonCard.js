import React from "react";

const GroupButtonCard = props => {
  const newComment = id => {
    return {
      // id: UUID(),
      parentId: id,
      timestamp: Date.now()
    };
  };

  return (
    <div>
      <button
        id="find"
        type="button"
        className="btn btn-outline-info btn-sm mr-sm-2"
        onClick={() => props.show(props.data)}
      >
        Visualisar Comentários{" "}
        <span className="badge badge-light">{props.data.commentCount}</span>
      </button>
      <button
        id="edit"
        type="button"
        className="btn btn-outline-info btn-sm mr-sm-2"
        onClick={() => {
          props.new(newComment(props.data.id));
          // props.toggleComment();
        }}
      >
        Adicionar Comentário
      </button>
      <button
        id="edit"
        type="button"
        className="btn btn-outline-info btn-sm mr-sm-2"
        onClick={() => {
          props.edit(props.data);
          // props.toggle();
        }}
      >
        Editar
      </button>
      <button
        id="delete"
        type="button"
        className="btn btn-outline-info btn-sm mr-sm-2"
        onClick={() => props.delete(props.data)}
      >
        Excluir
      </button>
      <button
        id="like"
        type="button"
        className="btn btn-outline-success btn-sm mr-sm-2"
        onClick={() => props.vote({ id: props.data.id, option: "upVote" })}
      >
        Gostei
      </button>
      <button
        id="dislike"
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => props.vote({ id: props.data.id, option: "downVote" })}
      >
        Não Gostei
      </button>
    </div>
  );
};

export default GroupButtonCard;
