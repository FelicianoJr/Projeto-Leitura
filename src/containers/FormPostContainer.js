import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { editPost, addPost } from "../actions";
import GroupButtonModal from "../components/GroupButtonModal";
import GroupFieldBody from "../components/GroupFieldBody";
import GroupFieldTitle from "../components/GroupFieldTitle";

let FormPostContainer = props => {
  const {
    handleSubmit,
    toggle,
    pristine,
    submitting,
    initialValues,
    categories,
    editPost,
    addPost
  } = props;

  const submit = values => {
    if (initialValues.body) {
      editPost(values);
    } else {
      addPost(values);
    }
    toggle();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="modal-body">
          <GroupFieldTitle categories={categories} />
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

FormPostContainer = reduxForm({
  form: "post",
  initialValues: {},
  enableReinitialize: true
})(FormPostContainer);

const mapDispatchToProps = dispatch => {
  return {
    editPost: data => dispatch(editPost(data)),
    addPost: data => dispatch(addPost(data))
  };
};

FormPostContainer = connect(
  state => ({
    initialValues: state.editModal.post,
    categories: state.categories
  }),
  mapDispatchToProps
)(FormPostContainer);

export default FormPostContainer;
