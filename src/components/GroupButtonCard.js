import React from "react";
import PropTypes from "prop-types";

const GroupButtonCard = ({
  showComment,
  newComment,
  edit,
  remove,
  voteUp,
  voteDown,
  data
}) => {
  const buttonsShow = data.commentCount === undefined;
  return (
    <div>
      {!buttonsShow && (
        <button
          id="show"
          type="button"
          className="btn btn-outline-dark btn-sm mr-sm-2"
          onClick={showComment}
        >
          Visualisar Comentários{" "}
          <span className="badge badge-light">{data.commentCount}</span>
        </button>
      )}

      {!buttonsShow && (
        <button
          id="edit"
          type="button"
          className="btn btn-outline-dark btn-sm mr-sm-2"
          onClick={newComment}
        >
          Adicionar Comentário
        </button>
      )}
      <button
        id="edit"
        type="button"
        className="btn btn-outline-dark btn-sm mr-sm-2"
        onClick={edit}
      >
        Editar
      </button>
      <button
        id="delete"
        type="button"
        className="btn btn-outline-dark btn-sm mr-sm-2"
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

GroupButtonCard.protoTypes = {
  showComment: PropTypes.func,
  newComment: PropTypes.func,
  edit: PropTypes.func,
  remove: PropTypes.func,
  voteUp: PropTypes.func,
  voteDown: PropTypes.func
};

export default GroupButtonCard;
