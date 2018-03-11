import { connect } from "react-redux";
import React from "react";
import CommentFormContainer from "./CommentFormContainer";
import PostFormContainer from "./PostFormContainer";
import CardDetail from "../components/CardDetail";
import Modal from "react-modal";
import { UUID } from "../mocks/UUID";

import {
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

  addComment = post => {
    return {
      id: UUID(),
      parentId: post.id,
      timestamp: Date.now()
    };
  };

  getDownVote = data => {
    return { id: data.id, option: "downVote" };
  };

  getUpVote = data => {
    return { id: data.id, option: "upVote" };
  };

  togglePost = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleComment = () => {
    this.setState({
      modalComment: !this.state.modalComment
    });
  };

  filterComments = post =>
    this.props.comments.filter(comment => comment.parentId === post.id);

  render() {
    const { posts, comments } = this.props;
    return (
      <div>
        {posts &&
          posts.map(post => (
            <div key={post.id} className="card mb-2 mx-2 mt-2">
              <CardDetail
                data={post}
                showComment={() => this.props.getCommentPost(post)}
                newComment={() => {
                  this.props.getParentId(this.addComment(post));
                  this.toggleComment();
                }}
                edit={() => {
                  this.props.getPost(post);
                  this.togglePost();
                }}
                remove={() => this.props.removePost(post)}
                voteDown={() => this.props.votePost(this.getDownVote(post))}
                voteUp={() => this.props.votePost(this.getUpVote(post))}
              />

              {comments &&
                this.filterComments(post).map(comment => (
                  <div key={comment.id} className="card mb-2 mx-2">
                    <CardDetail
                      data={comment}
                      edit={() => {
                        this.props.getComment(comment);
                        this.toggleComment();
                      }}
                      remove={() => this.props.deleteComment(comment)}
                      voteDown={() =>
                        this.props.voteComment(this.getDownVote(comment))
                      }
                      voteUp={() =>
                        this.props.voteComment(this.getUpVote(comment))
                      }
                    />
                  </div>
                ))}
            </div>
          ))}

        <Modal
          isOpen={this.state.modalComment}
          contentLabel="Minimal Modal Example">
          <CommentFormContainer toggle={this.toggleComment} />
        </Modal>

        <Modal isOpen={this.state.modal} contentLabel="Minimal Modal Example">
          <PostFormContainer toggle={this.togglePost} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post,
  comments: state.comment
});

export default connect(mapStateToProps, {
  getParentId,
  getPost,
  removePost,
  votePost,
  getCommentPost,
  deleteComment,
  voteComment,
  getComment
})(PostContainer);
