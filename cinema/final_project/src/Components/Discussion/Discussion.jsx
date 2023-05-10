import CommentModal from "./CommentModal";
import DiscussionModal from "./DiscussionModal";
import "./Discussion.css";
import React, { useEffect, useState } from "react";
import { getDiscussions } from "../../Services/DiscussionService";

const Discussion = () => {
  const [showComment, setShowComment] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState(false);

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
          <CommentModal
            show={showComment}
            onHide={handleCloseComment}
            addComment={addComment}
          />
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
        <DiscussionModal
          show={newDiscussion}
          onHide={handleCloseDiscussion}
          addComment={addComment}
        />
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
