import React from "react";
import { Container } from "reactstrap";
import NavBarContainer from "./NavBarContainer";
import PostContainer from "./PostContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  pushRoute = e => {
    this.props.history.push(`/home/${e.target.value}`);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <NavBarContainer pushRoute={this.pushRoute} />
        <div className="container">
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
