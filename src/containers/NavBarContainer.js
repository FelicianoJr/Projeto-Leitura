import React from "react";
import PostContainer from "./PostContainer";
import { sortPost, getCategoryAll } from "../actions";
import { connect } from "react-redux";
import NavBarMain from "../components/NavBarMain";

import { Modal, ModalHeader, Container } from "reactstrap";
import PostFormContainer from "./PostFormContainer";

class NavBarContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  componentDidMount() {
    const { categories } = this.props;
    if (categories.length === 0) {
      this.props.categoryAll();
    }
  }

  render() {
    const { categories, sortPost, pushRoute, category } = this.props;
    return (
      <div>
        <NavBarMain
          categories={categories}
          toggle={this.toggle}
          pushRoute={pushRoute}
          sortPost={sortPost}
          category={category}
        />

        {this.toggle && (
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Postar</ModalHeader>
            <PostFormContainer toggle={this.toggle} />
          </Modal>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    categoryAll: () => dispatch(getCategoryAll()),
    sortPost: event => dispatch(sortPost(event.target.value))
  };
};

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
