import React from "react";
import { sortPost } from "../actions";
import { connect } from "react-redux";
import NavBarMain from "../components/NavBarMain";
import Modal from "react-modal";
import PostFormContainer from "./PostFormContainer";
import ButtonClose from "../components/ButtonClose";
import { getPost } from "../actions";
import { UUID } from "../util/UUID";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "60%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class NavBarContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentDidMount() {
    Modal.setAppElement("#root");
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  newPost = () => {
    return {
      id: UUID(),
      timestamp: Date.now()
    };
  };

  render() {
    const { categories, sortPost, pushRoute, category } = this.props;
    return (
      <div>
        <NavBarMain
          categories={categories}
          newPost={() => {
            this.props.getPost(this.newPost());
            this.toggle();
          }}
          pushRoute={pushRoute}
          sortPost={sortPost}
          category={category}
        />

        <Modal isOpen={this.state.modal} style={customStyles}>
          <ButtonClose toggle={this.toggle} />
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
    sortPost: event => dispatch(sortPost(event.target.value)),
    getPost: post => dispatch(getPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
