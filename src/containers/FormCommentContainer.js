import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { editComment, addComment } from "../actions";
import GroupFieldBody from "../components/GroupFieldBody";
import GroupButtonModal from "../components/GroupButtonModal";

let FormCommentContainer = props => {
  const {
    handleSubmit,
    toggle,
    pristine,
    submitting,
    initialValues,
    editComment,
    addComment
  } = props;

  const submit = values => {
    if (initialValues.body) {
      editComment(values);
    } else {
      addComment(values);
    }
    toggle();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="modal-body">
          <GroupFieldBody />
        </div>
        <GroupButtonModal
          toggle={toggle}
          pristine={pristine}
          submitting={submitting}
        />
      </form>
    </div>
  );
};

FormCommentContainer = reduxForm({
  form: "comment",
  initialValues: {},
  enableReinitialize: true
})(FormCommentContainer);

const mapDispatchToProps = {
  editComment,
  addComment
};

FormCommentContainer = connect(
  state => ({
    initialValues: state.editModal.comment
  }),
  mapDispatchToProps
)(FormCommentContainer);

export default FormCommentContainer;
