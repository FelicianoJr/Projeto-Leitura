import React from "react";

const ButtonSubmit = ({ pristine, submitting }) => {
  return (
    <div>
      <button
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-primary"
      >
        Salvar
      </button>
    </div>
  );
};

export default ButtonSubmit;
