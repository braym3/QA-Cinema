import "./Discussion.css";
import StaticStarRating from "./StaticStarRating";
import CommentModal from "./CommentModal";
import React, { useState } from "react";
import Comment from "./Comment";

const SingleDiscussion = ({ discussion, index, filmData }) => {
  const [showComment, setShowComment] = useState(-1);
  const handleCloseComment = () => setShowComment(-1);
  const handleShowComment = (index) => setShowComment(index);

  const id = "discussion" + index;
  const [film] = filmData.filter(({ title }) => title === discussion.film);
  const avgRating = film.userRating.quantity === 0 ? 0 : film.userRating.aggregate / film.userRating.quantity;

  return (
    <div className="discussion" id={id} key={discussion._id}>
      <h1>{discussion.subject}</h1>
      <h4>
        {discussion.film}
        {<StaticStarRating rating={avgRating} />}
      </h4>
      <button className="button-4" id={"comment" + index.toString()} onClick={() => handleShowComment(index)}>
        Reply to this discussion
      </button>
      <CommentModal
        show={showComment === index}
        onHide={handleCloseComment}
        disID={discussion._id}
        filmID={discussion.filmId}
      />
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
          <tbody>
            {discussion.discussion.map((data, index) => {
              return <Comment data={data} index={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleDiscussion;
