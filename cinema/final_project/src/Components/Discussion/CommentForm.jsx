import StarRating from "./StarRating";
import React, { useState, useEffect } from "react";
import { addComment } from "../../Services/discussionService";
import { addRating } from "../../Services/filmsService";
import ModerationII from "./ModerationII";
import "./Discussion.css";

const CommentForm = ({ disID, filmID }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [body, setBody] = useState();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (body) {
      const inappropriate = ModerationII(body.comment);
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
      addRating(filmID, { rating: rating });
    }
  }, [body]);

  return (
    <form
      onSubmit={() => {
        setBody({ email: email, comment: comment, rating: rating });
      }}
    >
      <label name="email">Email</label> <br />
      <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" required /> <br />
      <label>Comment</label> <br />
      <textarea onChange={(e) => setComment(e.target.value)} id="comment" type="text-field" required /> <br />
      <label>Rating</label>
      <StarRating rating={rating} setRating={setRating} />
      <button>Add comment</button>
    </form>
  );
};

export default CommentForm;
