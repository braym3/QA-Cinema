import CommentModal from "./CommentModal";
import DiscussionModal from "./DiscussionModal";
import "./Discussion.css";
import React, { useEffect, useState } from "react";
import { getDiscussions } from "../../Services/DiscussionService";

const Discussion = () => {
  const [showComment, setShowComment] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState(false);
  const [discussionData, setDiscussionData] = useState([]);
  const [body, setBody] = useState();

  useEffect(() => {
    getDiscussions().then((discussion) => {
      if (discussion != null) setDiscussionData(discussion);
    });
  }, []);

  const handleCloseComment = () => setShowComment(false);
  const handleShowComment = () => setShowComment(true);
  const handleCloseDiscussion = () => setNewDiscussion(false);
  const handleShowDiscussion = () => setNewDiscussion(true);

  const addComment = (e) => {
    e.preventDefault();
    let comment = {
      discussionId: 1,
      email: e.target[0].value,
      body: e.target[1].value,
    };
    handleCloseComment();
  };

  const printData = (comments) =>
    comments.map((data, index) => {
      const { email, comment } = data;
      return (
        <tr key={index}>
          <td>{email}</td>
          <td>{comment}</td>
        </tr>
      );
    });

  const showDiscussion = () =>
    discussionData.map((discussion, index) => {
      const id = "discussion" + index.toString;
      return (
        <div className="discussion" id={id} key={discussion._id}>
          <h1>{discussion.subject}</h1>
          <button
            className="button-4"
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

  return (
    <>
      <div id="discussion">
        <h1>Discussion Board</h1>
        <button className="button-4" onClick={handleShowDiscussion}>
          + Add New Discussion
        </button>
        <DiscussionModal
          show={newDiscussion}
          onHide={handleCloseDiscussion}
          body={body}
          setBody={setBody}
          setDiscussionData={setDiscussionData}
          discussionData={discussionData}
        />
      </div>
      {showDiscussion()}
    </>
  );
};

export default Discussion;
