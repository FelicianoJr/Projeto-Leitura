import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import React from "react";
import { editPost, addPost } from "../actions";
import { UUID } from "../mocks/UUID";

import {
  Button,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Input,
  Label
} from "reactstrap";

let PostForm = props => {
  const {
    handleSubmit,
    toggle,
    pristine,
    submitting,
    editPost,
    addPost
  } = props;

  return (
    
    <Form onSubmit={handleSubmit}>
      <ModalBody>
        <FormGroup>
          <Label>Titulo</Label>
          <Input
            name="title"
            id="title"
            tag={Field}
            component="input"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Categoria</Label>
          <Input
            name="category"
            id="category"
            tag={Field}
            component="input"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Autor</Label>
          <Input
            name="author"
            id="author"
            tag={Field}
            component="input"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Descrição</Label>
          <Input
            name="body"
            id="author"
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
              editPost(values);
              toggle();
            })}
          >
            Editar
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={pristine || submitting}
            color="primary"
            onClick={handleSubmit(values => {
              addPost(values);
              toggle();
            })}
          >
            Salvar
          </Button>
        )}
      </ModalFooter>
    </Form>
  );
};

PostForm = reduxForm({
  form: "simple",
  initialized: true,
  initialValues: {
    timestamp: Date.now(),
    id: UUID()
  },
  enableReinitialize: true
})(PostForm);

PostForm = connect(
  state => ({
    initialValues: state.editor.post
  }),
  { editPost, addPost }
)(PostForm);

export default PostForm;
