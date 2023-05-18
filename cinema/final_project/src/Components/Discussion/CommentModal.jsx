import React, { useState, useEffect } from "react";
import "./Discussion.css";
import Modal from "react-bootstrap/Modal";
import ModerationII from "./ModerationII";
import { addComment } from "../../Services/DiscussionService";
import { addRating } from "../../Services/filmsCalls";
import StarRating from "./StarRating";

const CommentModal = ({ show, onHide, disID, filmId }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [body, setBody] = useState();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // These are in an if statement so the methods don't call when the body is empty
    console.log(body, "in use effect");
    if (body) {
      const inappropriate = ModerationII(body.comment);
      console.log(body.rating);
      if (inappropriate) {
        return alert("This post has been flagged for profanity");
      }
      addComment(disID, body)
        .then((res) => {
          console.log(res, "in add comment res");
        })
        .catch((err) => console.error(err));
    }
    if (rating) {
      addRating(filmId, { rating: rating });
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
          <label>Rating</label>
          <StarRating rating={rating} setRating={setRating} />
          <button
            onClick={() => {
              setBody({
                email: email,
                comment: comment,
                rating: rating,
              });
            }}
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
