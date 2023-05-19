import StarRating from "./StarRating";
import { useEffect, useState } from "react";
import { createDiscussion } from "../../Services/discussionService";
import { addRating } from "../../Services/filmsService";
import ModerationII from "./ModerationII";
import "./Discussion.css";

const DiscussionForm = ({ setDiscussionData, discussionData, films }) => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [film, setFilm] = useState();
  const [body, setBody] = useState();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (body) {
      const inappropriate = ModerationII(body.discussion[0].comment);
      if (inappropriate) {
        return alert("This post has been flagged for profanity");
      }
      createDiscussion(body).then((discussion) => {});
      setDiscussionData([body, ...discussionData]);
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
    <form>
      <label name="film">Please give the name of the film:</label>
      <select onChange={(e) => setFilm(e.target.value)} required>
        <option value={null}>-- Please select a film --</option>
        {films.map((data) => {
          const { title } = data;
          return <option value={title}>{title}</option>;
        })}
      </select>
      <label name="subject">Subject of new Discussion</label> <br />
      <input onChange={(e) => setSubject(e.target.value)} name="subject" type="text" required /> <br />
      <label name="email">Email</label> <br />
      <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" required /> <br />
      <label>Comment</label> <br />
      <textarea onChange={(e) => setComment(e.target.value)} id="comment" type="text-field" required /> <br />
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
  );
};

export default DiscussionForm;
