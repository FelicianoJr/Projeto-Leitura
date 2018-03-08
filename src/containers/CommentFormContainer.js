import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import React from "react";
import { editComment, addComment } from "../actions";
import FieldBodyAuthor from "../components/FieldBodyAuthor";
import ButtonSubmit from "../components/ButtonSubmit";

let CommentFormContainer = props => {
  const { handleSubmit, toggle, pristine, submitting, initialValues } = props;

  const submit = values => {
    if (initialValues.body) {
      props.editComment(values);
    } else {
      props.addComment(values);
    }
    toggle();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="modal-body">
          <FieldBodyAuthor />
        </div>
        <div className="modal-footer">
          <ButtonSubmit pristine={pristine} submitting={submitting} />
        </div>
      </form>
    </div>
  );
};

CommentFormContainer = reduxForm({
  form: "comment",
  initialValues: {},
  enableReinitialize: true
})(CommentFormContainer);

const mapDispatchToProps = dispatch => {
  return {
    editComment: data => dispatch(editComment(data)),
    addComment: data => dispatch(addComment(data))
  };
};

CommentFormContainer = connect(
  state => ({
    initialValues: state.editor.comment
  }),
  mapDispatchToProps
)(CommentFormContainer);

export default CommentFormContainer;
