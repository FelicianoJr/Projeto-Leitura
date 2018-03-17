import React from "react";

const GroupButtonModal = ({ toggle, pristine, submitting }) => {
  return (
    <div className="modal-footer">
      <button
        type="button"
        onClick={toggle}
        className="btn btn-danger btn-sm"
      >
        Fechar
      </button>
      <button
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-info btn-sm"
      >
        Salvar
      </button>
    </div>
  );
};

export default GroupButtonModal;
