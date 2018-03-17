import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import PostContainer from "./PostContainer";
import NavBarContainer from "./NavBarContainer";
import CardBodyDetail from "../components/CardBodyDetail";
import FormCommentContainer from "./FormCommentContainer";
import { getMakeFilterComment } from "../selectors/index";

import {
  removeComment,
  voteComment,
  getComment,
  getCommentPost,
  getPostId,
  getCategoryAll
} from "../actions";

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

class PostDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentDidMount() {
    Modal.setAppElement("#root");
    const {
      getPostId,
      getCommentPost,
      categories,
      getCategoryAll
    } = this.props;

    if (categories.length === 0) {
      getCategoryAll();
    }

    const { id } = this.props.match.params;
    if (id) {
      getPostId({ id });
      getCommentPost({ id });
    }
  }

  setVoteDown = data => {
    return { id: data.id, option: "downVote" };
  };

  setVoteUp = data => {
    return { id: data.id, option: "upVote" };
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { comments, getComment, removeComment, voteComment } = this.props;
    return (
      <div>
        <NavBarContainer disabled={true} />
        <div className="container">
          <PostContainer />
          
          {comments &&
            comments.map(comment => (
              <div key={comment.id} className="card mb-2 mx-2">
                <CardBodyDetail
                  data={comment}
                  edit={() => {
                    getComment(comment);
                    this.toggle();
                  }}
                  remove={() => removeComment(comment)}
                  voteDown={() => voteComment(this.setVoteDown(comment))}
                  voteUp={() => voteComment(this.setVoteUp(comment))}
                />
              </div>
            ))}
        </div>
        <Modal isOpen={this.state.modal} style={customStyles}>
          <FormCommentContainer toggle={this.toggle} />
        </Modal>
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getFilter = getMakeFilterComment();
  const mapStateToProps = (state, props) => {
    console.log(state)
    return {
      posts: state.posts,
      comments: getFilter(state, props),
      categories: state.categories
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoryAll: () => dispatch(getCategoryAll()),
    getCommentPost: data => dispatch(getCommentPost(data)),
    getPostId: data => dispatch(getPostId(data)),
    removeComment: data => dispatch(removeComment(data)),
    voteComment: data => dispatch(voteComment(data)),
    getComment: data => dispatch(getComment(data))
  };
};
export default connect(makeMapStateToProps, mapDispatchToProps)(
  PostDetailContainer
);
