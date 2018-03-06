import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import React from "react";
import FieldBodyAuthor from "../components/FieldBodyAuthor";
import FieldTitleCategory from "../components/FieldTitleCategory";
import ButtonSubmit from "../components/ButtonSubmit";
import { editPost, addPost } from "../actions";
import { UUID } from "../mocks/UUID";

let PostFormContainer = props => {
 console.log("props form")
  const { handleSubmit, toggle, pristine, submitting, initialValues } = props;
  
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
      <form onSubmit={handleSubmit(values => submit(values))}>
        <div className="modal-body">
          <FieldTitleCategory />
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
  initialValues: {
    id: UUID(),
    timestamp: Date.now()
  },
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
    initialValues: state.editor.post
  }),
  mapDispatchToProps
)(PostFormContainer);

export default PostFormContainer;
