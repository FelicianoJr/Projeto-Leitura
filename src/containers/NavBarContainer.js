import React from "react";
import PostContainer from "./PostContainer";
import { sortPost, getCategoryAll } from "../actions";
import { connect } from "react-redux";
import NavBarMain from "../components/NavBarMain";
import Modal from "react-modal";

import PostFormContainer from "./PostFormContainer";

Modal.setAppElement("#root");

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

        <Modal
          isOpen={this.state.modal}
          contentLabel="Minimal Modal Example"
        >
          <PostFormContainer toggle={this.toggle} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => {
  return {
    sortPost: event => dispatch(sortPost(event.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
