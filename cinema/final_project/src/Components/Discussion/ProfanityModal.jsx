import Modal from "react-bootstrap/Modal";

const ProfanityModal = () => {
  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>Content Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Please do not use profanity in your posts</h1>
      </Modal.Body>
    </Modal>
  );
};

export default ProfanityModal;
