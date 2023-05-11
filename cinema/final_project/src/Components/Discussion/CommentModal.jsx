import React from "react";
import "./Discussion.css";
import Modal from "react-bootstrap/Modal";

const CommentModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label name="email">Email</label>
          <br />
          <input name="email" type="email" required />
          <br />
          <label>Comment</label>
          <br />
          <textarea id="comment" type="text-field" required />
          <br />
          <button className="button-4" type="submit">
            Add comment
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CommentModal;
