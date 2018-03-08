import React from "react";
import PropTypes from "prop-types";
import { UUID } from "../mocks/UUID";
import GroupButtonCard from "./GroupButtonCard";

const CardDetail = props => {

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
      <GroupButtonCard {...props}/>
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
