import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import GroupButtonBody from "./GroupButtonBody";

const CardBodyDetail = ({ data, edit, remove, voteDown, voteUp }) => {
  return (
    <div className="card-body  text-dark">
      {data.title && <div className="card-title">{data.title}</div>}
      <div className="card-text">{data.body}</div>
      <div className="card-text">
        <small>
          <b>Pontuação:</b>
        </small>{" "}
        <div className="badge">{data.voteScore}</div>
      </div>
      <small className="text-muted ">
        Criado por {data.author} em {format(data.timestamp, "DD/MM/YYYY")}
      </small>

      <GroupButtonBody
        count={data.commentCount}
        edit={edit}
        remove={remove}
        voteDown={voteDown}
        voteUp={voteUp}
      />
    </div>
  );
};

CardBodyDetail.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  timestamp: PropTypes.number,
  voteScore: PropTypes.number
};

export default CardBodyDetail;
