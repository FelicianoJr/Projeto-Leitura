import React from "react";
import { connect } from "react-redux";
import { UUID } from "../util/UUID";
import Modal from "react-modal";
import { removePost, votePost, getPost, getComment } from "../actions";
import GroupButtonFooter from "../components/GroupButtonFooter";
import CardBodyDetail from "../components/CardBodyDetail";
import FormPostContainer from "./FormPostContainer";
import FormCommentContainer from "./FormCommentContainer";
import { getMakeFilterPost } from "../selectors/index";

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
  constructor(props) {
    super(props);
    this.state = {
      modalPost: false,
      modalComment: false
    };
  }

  componentDidMount() {
    Modal.setAppElement("#root");
  }

  setVoteDown = data => {
    return { id: data.id, option: "downVote" };
  };

  setVoteUp = data => {
    return { id: data.id, option: "upVote" };
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
                voteDown={() => votePost(this.setVoteDown(post))}
                voteUp={() => votePost(this.setVoteUp(post))}
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
  const getSort = getMakeFilterPost();
  const mapStateToProps = (state, props) => {
    return {
      posts: getSort(state, props)
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: data => dispatch(getPost(data)),
    removePost: data => dispatch(removePost(data)),
    votePost: data => dispatch(votePost(data)),
    getComment: data => dispatch(getComment(data))
  };
};

export default connect(makeMapStateToProps, mapDispatchToProps)(PostContainer);
