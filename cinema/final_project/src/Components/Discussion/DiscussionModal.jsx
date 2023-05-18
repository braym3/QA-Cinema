import React from "react";
import "./Discussion.css";
import Modal from "react-bootstrap/Modal";
import { createDiscussion } from "../../Services/DiscussionService";
import { addRating } from "../../Services/filmsCalls";
import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import ModerationII from "./ModerationII";

const DiscussionModal = ({ show, onHide, setDiscussionData, discussionData, films }) => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [body, setBody] = useState();
  const [film, setFilm] = useState();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // These are in an if statement so the methods don't call when the body is empty
    // debugger;
    if (body) {
      const inappropriate = ModerationII(body.discussion[0].comment);
      if (inappropriate) {
        return alert("This post has been flagged for profanity");
      }
      createDiscussion(body).then((discussion) => {});
      setDiscussionData([...discussionData, body]);
    }
    if (rating) {
      addRating(body.filmId, { rating: rating });
    }
  }, [body]);

  const matchFilmId = (film) => {
    for (let i = 0; i < films.length; i++) {
      if (films[i].title === film) {
        return films[i]._id;
      }
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add new Discussion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onHide}>
          <label name="film">Please give the name of the film:</label>
          <select onChange={(e) => setFilm(e.target.value)} required>
            <option value={null}>-- Please select a film --</option>
            {films.map((data) => {
              const { title } = data;
              return <option value={title}>{title}</option>;
            })}
          </select>
          <br />
          <label name="subject">Subject of new Discussion</label>
          <br />
          <input onChange={(e) => setSubject(e.target.value)} name="subject" type="text" required />
          <br />
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
              if (film !== "-- Please select a film --") {
                setBody({
                  subject: subject,
                  film: film,
                  filmId: matchFilmId(film),
                  discussion: [
                    {
                      email: email,
                      comment: comment,
                      rating: rating,
                    },
                  ],
                });
              }
            }}
            className="button-4"
            type="submit"
          >
            Start Discussion
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default DiscussionModal;
