import React from "react";
import "./Discussion.css";
import Modal from "react-bootstrap/Modal";
import CommentForm from "./CommentForm";

const CommentModal = ({ show, onHide, disID, filmID }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CommentForm disID={disID} filmID={filmID} />
      </Modal.Body>
    </Modal>
  );
};

export default CommentModal;
