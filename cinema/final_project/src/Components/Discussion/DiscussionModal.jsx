import React from "react";
import "./Discussion.css";
import Modal from "react-bootstrap/Modal";

const DiscussionModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add new Discussion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form /*onSubmit={addComment}*/>
          <label name="subject">Subject of new Discussion</label>
          <br />
          <input name="subject" type="text" required />
          <br />
          <label name="email">Email</label>
          <br />
          <input name="email" type="email" required />
          <br />
          <label>Comment</label>
          <br />
          <textarea id="comment" type="text-field" required />
          <br />
          <button class="button-4" type="submit">
            Start Discussion
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default DiscussionModal;
