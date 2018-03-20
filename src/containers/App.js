import React from "react";
import NavBarContainer from "./NavBarContainer";
import PostContainer from "./PostContainer";

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <div className="container">
        <PostContainer />
      </div>
    </div>
  );
};

export default App;
