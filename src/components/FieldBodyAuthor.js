import React from "react";
import { Field } from "redux-form";

const FieldBodyAuthor = () => {
  return (
    <div>
      
        <div className="form-group">
          <label >Autor</label>
          <Field
            name="author"
            className="form-control"
            id="author"
            component="input"
            type="text"
          />
        </div>
        <div className="form-group">
          <label >Descrição</label>
          <Field
            name="body"
            className="form-control"
            id="body"
            component="textarea"
            type="text"
          />
      </div>
    </div>
  );
};

export default FieldBodyAuthor;
