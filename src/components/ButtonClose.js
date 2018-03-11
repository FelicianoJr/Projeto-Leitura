import React from "react";

const ButtonClose = ({ toggle }) => {
  return (
    <div>
      <button type="button" onClick={toggle} className="close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default ButtonClose;
