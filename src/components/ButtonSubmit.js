import React from "react";

const ButtonSubmit = ({ pristine, submitting }) => {
  return (
    <div>
      <button
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-dark btn-sm"
      >
        Salvar
      </button>
    </div>
  );
};

export default ButtonSubmit;
