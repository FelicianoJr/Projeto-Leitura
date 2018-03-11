import React from "react";
import NavBarContainer from "./NavBarContainer";
import PostContainer from "./PostContainer";
import { connect } from "react-redux";
import { getAllPost, getCategoryAll } from "../actions";

class App extends React.Component {

  componentDidMount() {
    this.props.getAllPost();
    this.props.categoryAll();
  }

  pushRoute = e => {
    this.props.history.push(`/category/${e.target.value}`);
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

const mapDispatchToProps = dispatch => {
  return {
    getAllPost: () => dispatch(getAllPost()),
    categoryAll: () => dispatch(getCategoryAll())
  };
};

export default connect(null, mapDispatchToProps)(App);
