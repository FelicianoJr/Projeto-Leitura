import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import React from "react";
import { editComment, addComment } from "../actions";

import {
  Button,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Input,
  Label
} from "reactstrap";

let CommentForm = props => {
  const {
    handleSubmit,
    toggle,
    pristine,
    submitting,
    editComment,
    addComment
  } = props;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <ModalBody>
          <FormGroup>
            <Label>Descrição</Label>
            <Input
              name="body"
              id="body"
              tag={Field}
              component="textarea"
              type="text"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          {props.initialValues.body ? (
            <Button
              type="submit"
              disabled={pristine || submitting}
              color="primary"
              onClick={handleSubmit(values => {
                editComment(values);
                toggle();
              })}
            >
              Comentar
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={pristine || submitting}
              color="primary"
              onClick={handleSubmit(values => {
                addComment(values);
                toggle();
              })}
            >
              Comentar
            </Button>
          )}
        </ModalFooter>
      </Form>
    </div>
  );
};

CommentForm = reduxForm({
  form: "comments",
  initialValues: {},
  enableReinitialize: true
})(CommentForm);

CommentForm = connect(
  state => ({
    initialValues: state.editor.comment
  }),
  { editComment, addComment }
)(CommentForm);

export default CommentForm;
