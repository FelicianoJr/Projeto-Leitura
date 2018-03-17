import React from "react";
import PropTypes from "prop-types";

const GroupButtonBody = ({ edit, remove, voteUp, voteDown }) => {
  return (
    <div>
      <button
        id="edit"
        type="button"
        className="btn btn-light btn-sm mr-sm-2"
        onClick={edit}
      >
        Editar
      </button>
      <button
        id="delete"
        type="button"
        className="btn btn-light btn-sm mr-sm-2"
        onClick={remove}
      >
        Excluir
      </button>
      <button
        id="like"
        type="button"
        className="btn btn-light btn-sm mr-sm-2"
        onClick={voteUp}
      >
        Gostei
      </button>
      <button
        id="dislike"
        type="button"
        className="btn btn-light btn-sm"
        onClick={voteDown}
      >
        Não Gostei
      </button>
    </div>
  );
};

GroupButtonBody.protoTypes = {
  showComment: PropTypes.func,
  newComment: PropTypes.func,
  edit: PropTypes.func,
  remove: PropTypes.func,
  voteUp: PropTypes.func,
  voteDown: PropTypes.func
};

export default GroupButtonBody;
