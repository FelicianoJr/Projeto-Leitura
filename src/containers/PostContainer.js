import React from "react";
import { connect } from "react-redux";
import { UUID } from "../util/UUID";
import Modal from "react-modal";
import GroupButtonFooter from "../components/GroupButtonFooter";
import CardBodyDetail from "../components/CardBodyDetail";
import FormPostContainer from "./FormPostContainer";
import FormCommentContainer from "./FormCommentContainer";
import { getMakeFilterPost } from "../selectors/index";
import { withRouter } from "react-router-dom";
import {
  removePost,
  votePost,
  getPost,
  getComment,
  getAllPost
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

class PostContainer extends React.Component {
  state = {
    modalPost: false,
    modalComment: false
  };

  componentDidMount() {
    Modal.setAppElement("#root");
    this.findPost();
  }

  findPost = () => {
    const { url } = this.props.match;
    if (url === "/") {
      this.props.getAllPost();
    }
  };

  addComment = post => {
    return {
      id: UUID(),
      parentId: post.id,
      timestamp: Date.now()
    };
  };

  togglePost = () => {
    this.setState({
      modalPost: !this.state.modalPost
    });
  };

  toggleComment = () => {
    this.setState({
      modalComment: !this.state.modalComment
    });
  };

  render() {
    const { posts, removePost, votePost, getComment, getPost } = this.props;

    return (
      <div>
        {posts.length > 0 &&
          posts.map(post => (
            <div key={post.id} className="card mb-2 mx-2 mt-2">
              <CardBodyDetail
                data={post}
                edit={() => {
                  getPost(post);
                  this.togglePost();
                }}
                remove={() => removePost(post)}
                voteDown={() => votePost({ id: post.id, option: "downVote" })}
                voteUp={() => votePost({ id: post.id, option: "upVote" })}
              />
              <GroupButtonFooter
                post={post}
                newComment={() => {
                  getComment(this.addComment(post));
                  this.toggleComment();
                }}
              />
            </div>
          ))}

        <Modal isOpen={this.state.modalComment} style={customStyles}>
          <FormCommentContainer toggle={this.toggleComment} />
        </Modal>

        <Modal isOpen={this.state.modalPost} style={customStyles}>
          <FormPostContainer toggle={this.togglePost} />
        </Modal>
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getFilter = getMakeFilterPost();
  const mapStateToProps = (state, props) => {
    return {
      posts: getFilter(state, props)
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = {
  getAllPost,
  getPost,
  removePost,
  votePost,
  getComment
};

export default withRouter(
  connect(makeMapStateToProps, mapDispatchToProps)(PostContainer)
);
