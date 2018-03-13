import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import FieldBodyAuthor from "../components/FieldBodyAuthor";
import FieldTitleCategory from "../components/FieldTitleCategory";
import ButtonSubmit from "../components/ButtonSubmit";
import { editPost, addPost } from "../actions";

let PostFormContainer = props => {
  const {
    handleSubmit,
    toggle,
    pristine,
    submitting,
    initialValues,
    categories
  } = props;

  const submit = values => {
    if (initialValues.body) {
      props.editPost(values);
    } else {
      props.addPost(values);
    }
    toggle();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="modal-body">
          <FieldTitleCategory categories={categories} />
          <FieldBodyAuthor />
        </div>
        <div className="modal-footer">
          <ButtonSubmit pristine={pristine} submitting={submitting} />
        </div>
      </form>
    </div>
  );
};

PostFormContainer = reduxForm({
  form: "post",
  initialValues: {},
  enableReinitialize: true
})(PostFormContainer);

const mapDispatchToProps = dispatch => {
  return {
    editPost: data => dispatch(editPost(data)),
    addPost: data => dispatch(addPost(data))
  };
};

PostFormContainer = connect(
  state => ({
    initialValues: state.editModal.post,
    categories: state.categories
  }),
  mapDispatchToProps
)(PostFormContainer);

export default PostFormContainer;
