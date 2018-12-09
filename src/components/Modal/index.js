import React from "react";
import PropTypes from "prop-types";

const Modal = props => {
  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.msg}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.dismiss}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {props.description && <div className="modal-body">...</div>}
          {props.action && (
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={props.action}>
                {props.actionLabel}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  msg: PropTypes.string.isRequired,
  action: PropTypes.func,
  actionLabel: PropTypes.string
};

export default Modal;
