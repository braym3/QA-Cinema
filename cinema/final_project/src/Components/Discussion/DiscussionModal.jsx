import React from "react";
import "./Discussion.css";
import Modal from "react-bootstrap/Modal";
import DiscussionForm from "./DiscussionForm";

const DiscussionModal = ({ show, onHide, setDiscussionData, discussionData, films }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add new Discussion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DiscussionForm setDiscussionData={setDiscussionData} discussionData={discussionData} films={films} />
      </Modal.Body>
    </Modal>
  );
};

export default DiscussionModal;
