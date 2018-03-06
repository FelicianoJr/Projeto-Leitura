import { connect } from "react-redux";
import React from "react";
import { Row, Col, Modal, ModalHeader } from "reactstrap";
import PostCard from "../components/PostCard";
import CommentFormContainer from "./CommentFormContainer";
import PostFormContainer from "./PostFormContainer";

import {
  getAllPost,
  getCommentPost,
  getParentId,
  deleteComment,
  removePost,
  voteComment,
  votePost,
  getPost,
  getComment
} from "../actions";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalComment: false
    };
  }

  componentDidMount() {
    this.props.onPostAll();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleComment = () => {
    this.setState({
      modalComment: !this.state.modalComment
    });
  };

  render() {
    const { posts, comments } = this.props;
    return (
      <div>
        {posts &&
          posts.map(post => (
            <div key={post.id} className="row">
              <div className="col-sm-12">
                <PostCard
                  post={post}
                  comments={comments.filter(
                    comment => comment.parentId === post.id
                  )}
                  action={this.props}
                  toggle={this.toggle}
                  toggleComment={this.toggleComment}
                />
              </div>
            </div>
          ))}

        {this.toggleComment && (
          <Modal
            isOpen={this.state.modalComment}
            toggle={this.toggleComment}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggleComment}>Comentar</ModalHeader>
            <CommentFormContainer toggle={this.toggleComment} />
          </Modal>
        )}

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

const mapStateToProps = state => ({
  posts: state.post,
  comments: state.comment
});

const mapDispatchToProps = dispatch => {
  return {
    onPostAll: () => dispatch(getAllPost()),
    onParentId: data => dispatch(getParentId(data)),
    onPost: data => dispatch(getPost(data)),
    onDeletePost: data => dispatch(removePost(data)),
    onVotePost: data => dispatch(votePost(data)),
    onShowComment: data => dispatch(getCommentPost(data)),
    onDeleteComment: data => dispatch(deleteComment(data)),
    onVoteComment: data => dispatch(voteComment(data)),
    onComment: data => dispatch(getComment(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
