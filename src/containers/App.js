import React from "react";
import { Container } from "reactstrap";
import NavBarContainer from "./NavBarContainer";
import PostContainer from "./PostContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  pushRoute = event => {
    this.props.history.push(`/home/${event.target.value}`);
  };

  navBar =() => <NavBarContainer pushRoute={this.pushRoute} />

  render() {
    console.log("render APP")
    return (
      <div>
        {this.navBar()}
        <Container>
          <PostContainer />
        </Container>
      </div>
    );
  }
}

export default App;
