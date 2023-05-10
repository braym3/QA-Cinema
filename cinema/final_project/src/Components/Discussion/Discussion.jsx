import CommentModal from "./CommentModal";
import "./Discussion.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Discussion = () => {
  const [show, setShow] = useState(false);
  const [initialDiscussion, setInitialDiscussion] = useState([
    {
      discussionId: 1,
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      discussionId: 1,
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
      discussionId: 1,
      email: "Nikita@garfield.biz",
      body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
    },
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addComment = (e) => {
    e.preventDefault();
    let comment = {
      discussionId: 1,
      email: e.target[0].value,
      body: e.target[1].value,
    };

    setInitialDiscussion([...initialDiscussion, comment]);
    handleClose();
  };
  const printData = () =>
    initialDiscussion.map((data, index) => {
      const { email, body } = data;
      return (
        <tr key={index}>
          <td>{email}</td>
          <td>{body}</td>
        </tr>
      );
    });
  return (
    <>
      <div class="discussion">
        <h1>Discussion Board</h1>
        <button class="button-4">+ Add New Discussion</button>
      </div>
      <div class="discussion" id="discussion">
        <h1>This is the subject of the first discussion</h1>
        <button class="button-4" onClick={handleShow}>
          Reply to this discussion
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={addComment}>
              <label name="email">Email</label>
              <br />
              <input name="email" type="email"></input>
              <br />
              <label>Comment</label>
              <br />
              <textarea id="comment" type="text-field"></textarea>
              <br />
              <button class="button-4" type="submit">
                Add comment
              </button>
            </form>
          </Modal.Body>
        </Modal>
        <br></br>
        <br></br>
        <div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>{printData()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Discussion;
