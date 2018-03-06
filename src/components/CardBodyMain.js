import React from "react";
import PropTypes from "prop-types";
import { UUID } from "../mocks/UUID";
const CardBodyMain = props => {
  
  const showButton = props.data.commentCount === undefined;

  const newComment = id => {
    return {
      id: UUID(),
      parentId: id,
      timestamp: Date.now(),
    };
  };

  return (
    <div className="card-body">
      {props.data.title && <div className="card-title">{props.data.title}</div>}
      <div className="card-text">{props.data.body}</div>
      <div className="card-text">
        <small>
          <b>Pontuação</b>
        </small>{" "}
        <div className="badge">{props.data.voteScore}</div>
        <br />
        <small className="text-muted">
          {" "}
          Criado por <b>{props.data.author}</b> em <b>{props.data.timestamp}</b>
        </small>
      </div>
      {!showButton && (
        <button
          id="find"
          type="button"
          className="btn btn-outline-info btn-sm mr-sm-2"
          onClick={() => props.onShow(props.data)}
        >
          Visualisar Comentários{" "}
          <span className="badge badge-light">{props.data.commentCount}</span>
        </button>
      )}
      {!showButton && (
        <button
          id="edit"
          type="button"
          className="btn btn-outline-info btn-sm mr-sm-2"
          onClick={() => {
            props.onNew(newComment(props.data.id));
            props.toggleComment();
          }}
        >
          Adicionar Comentário
        </button>
      )}
      <button
        id="edit"
        type="button"
        className="btn btn-outline-info btn-sm mr-sm-2"
        onClick={() => {
          props.onEdit(props.data);
          props.toggle();
        }}
      >
        Editar
      </button>
      <button
        id="delete"
        type="button"
        className="btn btn-outline-info btn-sm mr-sm-2"
        onClick={() => props.onDelete(props.data)}
      >
        Excluir
      </button>
      <button
        id="like"
        type="button"
        className="btn btn-outline-success btn-sm mr-sm-2"
        onClick={() => props.onVote({ id: props.data.id, option: "upVote" })}
      >
        Gostei
      </button>
      <button
        id="dislike"
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => props.onVote({ id: props.data.id, option: "downVote" })}
      >
        Não Gostei
      </button>
    </div>
  );
};

CardBodyMain.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  timestamp: PropTypes.number,
  voteScore: PropTypes.number
};

export default CardBodyMain;
