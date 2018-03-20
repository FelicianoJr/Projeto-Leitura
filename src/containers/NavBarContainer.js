import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { UUID } from "../util/UUID";
import { getPost, sortPost, getCategoryAll } from "../actions";
import NavBar from "../components/NavBar";
import FormPostContainer from "./FormPostContainer";

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
    this.findCategories();
  }

  findCategories = () => {
    const { categories } = this.props;
    if (categories.length === 0) {
      this.props.categoryAll();
    }
  };

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
    const { categories, getPost, disabled, sortPost, filterPost } = this.props;
    return (
      <div>
        <NavBar
          categories={categories}
          newPost={() => {
            getPost(this.newPost());
            this.toggle();
          }}
          sortPost={sortPost}
          disabled={disabled}
          filter={filterPost}
        />
        <Modal isOpen={this.state.modal} style={customStyles}>
          <FormPostContainer toggle={this.toggle} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  filterPost: state.filterPost.value
});

const mapDispatchToProps = dispatch => {
  return {
    sortPost: e => dispatch(sortPost(e.target.value)),
    getPost: post => dispatch(getPost(post)),
    categoryAll: () => dispatch(getCategoryAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
