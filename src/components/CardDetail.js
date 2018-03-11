import React from "react";
import PropTypes from "prop-types";
import GroupButtonCard from "./GroupButtonCard";
import { format } from "date-fns";

const CardDetail = props => {
  const {
    showComment,
    newComment,
    edit,
    remove,
    voteDown,
    voteUp,
    data
  } = props;
  return (
    <div className="card-body">
      {data.title && <div className="card-title">{data.title}</div>}
      <div className="card-text">{data.body}</div>
      <div className="card-text">
        <small>
          <b>Pontuação:</b>
        </small>{" "}
        <div className="badge">{data.voteScore}</div>
        <br />
        <small className="text-muted">
          {" "}
          
          Criado por <b>{data.author}</b> em <b>{format(data.timestamp, "DD/MM/YYYY")}</b>
        </small>
      </div>

      <GroupButtonCard
        data={data}
        showComment={showComment}
        newComment={newComment}
        edit={edit}
        remove={remove}
        voteDown={voteDown}
        voteUp={voteUp}
      />
    </div>
  );
};

CardDetail.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  timestamp: PropTypes.number,
  voteScore: PropTypes.number
};

export default CardDetail;
