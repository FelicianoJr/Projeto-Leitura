import React from "react";
import { connect } from "react-redux";
import { getPostAllCategory } from "../actions";
import PostContainer from "./PostContainer";
import NavBarContainer from "./NavBarContainer";

class CategoryContainer extends React.Component {

  componentDidMount() {
    this.props.getPostAllCategory(this.props.match.params.category);
  }

  componentWillReceiveProps(nextProps) {
    this.props.getPostAllCategory(nextProps.match.params.category);
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

const mapDispatchToProps = dispatch => {
  return {
    getPostAllCategory: data => dispatch(getPostAllCategory(data))
  };
};

export default connect(null, mapDispatchToProps)(CategoryContainer);
