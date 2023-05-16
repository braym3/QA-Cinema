import React, { useState, useEffect } from "react";
import "./Discussion.css";
import Modal from "react-bootstrap/Modal";
import Moderation from "./Moderation";
import { addComment } from "../../Services/DiscussionService";

const CommentModal = ({ show, onHide, disID }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [body, setBody] = useState();

  useEffect(() => {
    // These are in an if statement so the methods don't call when the body is empty
    if (body) {
      // get disid from disdata
      // comment is just new comment
      const inappropriate = Moderation(body.comment);
      if (inappropriate) {
        return alert("This post has been flagged for profanity as it contains the term: " + inappropriate.flagged);
      }
      addComment(disID, body);
    }
  }, [body]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label name="email">Email</label>
          <br />
          <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" required />
          <br />
          <label>Comment</label>
          <br />
          <textarea onChange={(e) => setComment(e.target.value)} id="comment" type="text-field" required />
          <br />
          <button
            onClick={() =>
              setBody({
                email: email,
                comment: comment,
              })
            }
            className="button-4"
            type="submit"
          >
            Add comment
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CommentModal;
