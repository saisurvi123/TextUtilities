import React from "react";
import { useState } from "react";

function Alert(props) {
  return (
    props.Message && <div className="container">
      <div class={`alert alert-${props.Message.verdict} alert-dismissible fade show`} role="alert">
        <strong>{props.Message.verdict}</strong>: {props.Message.msg} 
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
export default Alert
