import CommentModal from "./CommentModal";
import DiscussionModal from "./DiscussionModal";
import "./Discussion.css";
import React, { useEffect, useState } from "react";
import { getDiscussions } from "../../Services/DiscussionService";
import { getFilms } from "../../Services/filmsCalls";
import StaticStarRating from "./StaticStarRating";

const Discussion = () => {
  const [showComment, setShowComment] = useState(-1);
  const [newDiscussion, setNewDiscussion] = useState(false);
  const [discussionData, setDiscussionData] = useState([]);
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    getDiscussions().then((discussion) => {
      if (discussion != null) setDiscussionData(discussion);
    });
    getFilms().then((films) => {
      /*if (films != null) */ setFilmData(films);
    });
  }, []);

  const handleCloseComment = () => setShowComment(-1);
  const handleShowComment = (index) => setShowComment(index);
  const handleCloseDiscussion = () => setNewDiscussion(false);
  const handleShowDiscussion = () => setNewDiscussion(true);

  const printData = (comments) =>
    comments.map((data, index) => {
      const { email, comment, rating } = data;
      return (
        <tr key={index}>
          <td>{email}</td>
          <td id="comm">{comment}</td>
          <td id="rating">
            <StaticStarRating rating={rating} />
          </td>
        </tr>
      );
    });

  const showDiscussion = () =>
    discussionData.map((discussion, index) => {
      const id = "discussion" + index;
      return (
        <div className="discussion" id={id} key={discussion._id}>
          <h1>{discussion.subject}</h1>
          <h4>{discussion.film}</h4>
          <button className="button-4" id={"comment" + index.toString} onClick={() => handleShowComment(index)}>
            Reply to this discussion
          </button>
          <CommentModal show={showComment === index} onHide={handleCloseComment} disID={discussion._id} />
          <br></br>
          <div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th id="comm">Comment</th>
                  <th id="rating">Rating</th>
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
          setDiscussionData={setDiscussionData}
          discussionData={discussionData}
          films={filmData}
        />
      </div>
      {showDiscussion()}
    </>
  );
};

export default Discussion;
