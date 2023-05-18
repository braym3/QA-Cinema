import DiscussionModal from "./DiscussionModal";
import "./Discussion.css";
import React, { useEffect, useState } from "react";
import { getDiscussions } from "../../Services/DiscussionService";
import { getFilms } from "../../Services/filmsCalls";
import SingleDiscussion from "./SingleDiscussion";

const Discussion = () => {
  const [showComment, setShowComment] = useState(-1);
  const [newDiscussion, setNewDiscussion] = useState(false);
  const [discussionData, setDiscussionData] = useState([]);
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    getFilms()
      .then((films) => {
        setFilmData(films);
      })
      .catch((err) => console.error(err));
    getDiscussions()
      .then((discussion) => {
        if (discussion != null) setDiscussionData(discussion);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleCloseComment = () => setShowComment(-1);
  const handleShowComment = (index) => setShowComment(index);
  const handleCloseDiscussion = () => setNewDiscussion(false);
  const handleShowDiscussion = () => setNewDiscussion(true);

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
      {!filmData.length
        ? false
        : discussionData.map((discussion, index) => {
            return (
              <SingleDiscussion
                discussion={discussion}
                index={index}
                handleShowComment={handleShowComment}
                handleCloseComment={handleCloseComment}
                filmData={filmData}
                showComment={showComment}
              />
            );
          })}
    </>
  );
};

export default Discussion;
