import React from "react";
import NavBarContainer from "../containers/NavBarContainer";

const PageNotFound = () => {
  return (
    <div>
      <NavBarContainer />
      <div className="jumbotron">
      <h3 className="display-4">Oops, :(</h3>
        <p className="lead">Postagem não encontrada!</p>
      </div>
    </div>
  );
};

export default PageNotFound;
