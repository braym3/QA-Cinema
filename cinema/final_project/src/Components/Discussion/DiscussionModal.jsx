import React from "react";
import "./Discussion.css";
import Modal from "react-bootstrap/Modal";
import { createDiscussion } from "../../Services/DiscussionService";
import { useEffect, useState } from "react";

const DiscussionModal = ({ show, onHide, setDiscussionData, discussionData, films }) => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [body, setBody] = useState();
  const [film, setFilm] = useState("");

  useEffect(() => {
    // These are in an if statement so the methods don't call when the body is empty
    if (body) {
      createDiscussion(body).then((discussion) => {});
      setDiscussionData([...discussionData, body]);
    }
  }, [body]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add new Discussion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onHide}>
          <label name="film">Please give the name of the film:</label>
          <select onChange={(e) => setFilm(e.target.value)} required>
            {films.map((data, index) => {
              const { title, _id } = data;
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
          <button
            onClick={() =>
              setBody({
                subject: subject,
                film: film,
                discussion: [
                  {
                    email: email,
                    comment: comment,
                  },
                ],
              })
            }
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
