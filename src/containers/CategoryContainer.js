import React from "react";
import { connect } from "react-redux";
import PostContainer from "./PostContainer";
import { getPostAllCategory } from "../actions";
import NavBarContainer from "./NavBarContainer";

class CategoryContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  nameCategory = () => this.props.match.params.category;

  componentDidMount() {
    if (this.nameCategory()) {
      this.props.getPostAllCategory(this.nameCategory());
    }
  }

  render() {
    return (
      <div>
        <NavBarContainer category={this.nameCategory()} />
        <div className="container">
          <PostContainer />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPostAllCategory: patch => dispatch(getPostAllCategory(patch))
  };
};

export default connect(null, mapDispatchToProps)(CategoryContainer);
