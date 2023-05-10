import CommentModal from "./CommentModal";
import "./Discussion.css";
import React, { useEffect, useState } from "react";
//import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getDiscussions } from "../../Services/DiscussionService";

const Discussion = () => {
  const [showComment, setShowComment] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState(false);
  const [initialDiscussion, setInitialDiscussion] = useState([
    {
      subject: "Lorem Ipsum",
      discussionId: 1,
      discussion: [
        {
          email: "Eliseo@gardner.biz",
          body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        },
        {
          email: "Jayne_Kuhic@sydney.com",
          body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        },
        {
          email: "Nikita@garfield.biz",
          body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
        },
      ],
    },
    {
      subject: "Breakfast",
      discussionId: 2,
      discussion: [
        {
          email: "dave@fullenglish.com",
          body: "I love bagels",
        },
        {
          email: "administrator@admin.com",
          body: "Dave this is for films",
        },
        {
          email: "dave@fullenglish.com",
          body: "Sorry mate",
        },
      ],
    },
  ]);
  const [discussionData, setDiscussionData] = useState([]);

  useEffect(() => {
    getDiscussions().then((discussion) => {
      setDiscussionData(discussion);
      console.log("Use Effect Called");
    });
  }, []);

  const handleCloseComment = () => setShowComment(false);
  const handleShowComment = () => setShowComment(true);
  const handleCloseDiscussion = () => setNewDiscussion(false);
  const handleShowDiscussion = () => setNewDiscussion(true);

  // Adding a  comment to an array of data
  const addComment = (e) => {
    e.preventDefault();
    let comment = {
      discussionId: 1,
      email: e.target[0].value,
      body: e.target[1].value,
    };

    setInitialDiscussion([...initialDiscussion, comment]);
    handleCloseComment();
  };

  // Showing all the comments for a given discussion
  const printData = (comments) =>
    comments.map((data, index) => {
      const { email, body } = data;
      return (
        <tr key={index}>
          <td>{email}</td>
          <td>{body}</td>
        </tr>
      );
    });

  const showDiscussion = () =>
    discussionData.map((discussion, index) => {
      console.log(discussion);
      const id = "discussion" + index.toString;
      return (
        <div class="discussion" id={id}>
          <h1>{discussion.subject}</h1>
          <button
            class="button-4"
            id={"comment" + index.toString}
            onClick={handleShowComment}
          >
            Reply to this discussion
          </button>
          <Modal show={showComment} onHide={handleCloseComment}>
            <Modal.Header closeButton>
              <Modal.Title>Add comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={addComment}>
                <label name="email">Email</label>
                <br />
                <input name="email" type="email" required />
                <br />
                <label>Comment</label>
                <br />
                <textarea id="comment" type="text-field" required />
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
              <tbody>{printData(discussion.discussion)}</tbody>
            </table>
          </div>
        </div>
      );
    });

  // To render
  return (
    <>
      <div id="discussion">
        <h1>Discussion Board</h1>
        <button class="button-4" onClick={handleShowDiscussion}>
          + Add New Discussion
        </button>
        <Modal show={newDiscussion} onHide={handleCloseDiscussion}>
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
      </div>
      {showDiscussion()}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Discussion;
