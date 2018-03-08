import { connect } from "react-redux";
import React from "react";
import { Row, Col, Modal, ModalHeader } from "reactstrap";
import CommentFormContainer from "./CommentFormContainer";
import PostFormContainer from "./PostFormContainer";
import CardDetail from "../components/CardDetail";
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
    this.props.getAllPost();
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

  filterComments = post =>
    this.props.comments.filter(comment => comment.parentId === post.id);


  render() {
    return (
      <div>
        {this.props.posts &&
          this.props.posts.map(post => (
            <div key={post.id} className="card mb-2 mx-2">
              <CardDetail
                data={post}
                show={this.props.getCommentPost}
                new={this.props.getParentId}
                edit={this.props.getPost}
                delete={this.props.deletePost}
                vote={this.props.votePost}
              />
             
              {this.filterComments(post).map(comment => (
                <div key={comment.id} className="card mb-2 mx-2">
                  <CardDetail
                    data={comment}
                    edit={this.props.getComment}
                    delete={this.props.deleteComment}
                    vote={this.props.voteComment}
                  />
                </div>
              ))}
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
    getAllPost: () => dispatch(getAllPost()),
    getParentId: data => dispatch(getParentId(data)),
    getPost: data => dispatch(getPost(data)),
    deletePost: data => dispatch(removePost(data)),
    votePost: data => dispatch(votePost(data)),
    getCommentPost: data => dispatch(getCommentPost(data)),
    deleteComment: data => dispatch(deleteComment(data)),
    voteComment: data => dispatch(voteComment(data)),
    getComment: data => dispatch(getComment(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
