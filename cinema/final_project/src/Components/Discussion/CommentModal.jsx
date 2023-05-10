import React from "react";
import "./Discussion.css";

const CommentModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal Title</h4>
        </div>
        <div className="modal-body">This is modal content</div>
        <div className="modal-footer">
          <button className="button-4">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
