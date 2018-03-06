import React from "react";
import { connect } from "react-redux";
import PostContainer from "./PostContainer";
import { Container } from "reactstrap";
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
        <Container>
          <PostContainer />
        </Container>
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
