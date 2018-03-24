import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import PostContainer from "./PostContainer";
import NavBarContainer from "./NavBarContainer";
import CardBodyDetail from "../components/CardBodyDetail";
import FormCommentContainer from "./FormCommentContainer";
import { getMakeFilterComment } from "../selectors/index";
import { withRouter } from "react-router-dom";
import postAPI from "../api/postAPI";
import commnentAPI from "../api/commentAPI";

import {
  removeComment,
  voteComment,
  getComment,
  receivePost,
  receiveCommentForPost
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
  state = {
    modal: false
  };

  componentDidMount() {
    Modal.setAppElement("#root");
    const { id } = this.props.match.params;
    if (id) {
      this.findPostID(id);
    }
  }

  findPostID = id => {
    const { receivePost, history } = this.props;
    postAPI
      .getId(id).then(resp => {
        if (this.isResponseOk(resp)) {
          receivePost(resp);
          this.findCommentForId(resp.id);
        } else {
          history.push("/PageNotFound");
        }
      }).catch(error => console.log(error));
  };
 
  isResponseOk = resp => !resp.error && Object.keys(resp).length !== 0;

  findCommentForId = id => {
    const { receiveCommentForPost } = this.props;
    commnentAPI
      .getPostIdComments(id)
      .then(comment => {
        receiveCommentForPost(comment);
      })
      .catch(error => console.log(error));
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
                  voteDown={() =>
                    voteComment({ id: comment.id, option: "downVote" })
                  }
                  voteUp={() =>
                    voteComment({ id: comment.id, option: "upVote" })
                  }
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
    return {
      posts: state.posts,
      comments: getFilter(state, props)
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = {
  removeComment,
  voteComment,
  getComment,
  receivePost,
  receiveCommentForPost
};

export default withRouter(
  connect(makeMapStateToProps, mapDispatchToProps)(PostDetailContainer)
);
