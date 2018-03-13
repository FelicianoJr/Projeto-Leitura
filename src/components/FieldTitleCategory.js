import React from "react";
import { Field } from "redux-form";

const FieldTitleCategory = ({ categories = [] }) => {
  return (
    <div>
      <div className="form-group">
        <label>Titulo</label>
        <Field
          name="title"
          id="title"
          className="form-control"
          component="input"
          type="text"
        />
      </div>
      <div className="form-group">
        <label>Categoria</label>
        <Field
          name="category"
          id="category"
          className="form-control"
          component="select"
        >
          <option />
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {" "}
              {category.name}
            </option>
          ))}
        </Field>
      </div>
    </div>
  );
};

export default FieldTitleCategory;
