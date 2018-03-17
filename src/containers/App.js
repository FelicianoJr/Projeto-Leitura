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

  render() {
    return (
      <div>
        <NavBarContainer />
        <div className="container">
          <PostContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => {
  return {
    getAllPost: () => dispatch(getAllPost()),
    categoryAll: () => dispatch(getCategoryAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
