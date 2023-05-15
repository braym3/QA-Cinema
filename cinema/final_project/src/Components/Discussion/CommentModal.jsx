import React, { useState, useEffect } from "react";
import "./Discussion.css";
import Modal from "react-bootstrap/Modal";
import Moderation from "./Moderation";
import { addComment } from "../../Services/DiscussionService";
// import profanity from "./profanity.json"

const CommentModal = ({ show, onHide, disID }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [body, setBody] = useState();
  //const [flagged, setFlagged] = useState("");

  useEffect(() => {
    // These are in an if statement so the methods don't call when the body is empty
    if (body) {
      // get disid from disdata
      // comment is just new comment

      // console.log("Censoring starting");
      // console.log(profanity.length);
      // for (let i = 0; i < profanity.length; i++) {
      //   console.log("FLi");
      //   let allMatches = profanity[i].match;
      //   let matches = [];
      //   let lastPipe = 0;
      //   for (let j = 0; j < allMatches.length; j++) {
      //     console.log("FLj1");
      //     if ("|" === profanity[i].match.charAt(j)) {
      //       matches.push(allMatches.substring(lastPipe, j));
      //       lastPipe = j + 1;
      //     }
      //   }
      //   matches.push(allMatches.substring(lastPipe));
      //   for (let j = 0; j < matches.length; j++) {
      //     console.log("FLj2");
      //     let asstc = body.comment.length - matches[j].length + 1;
      //     for (let k = 0; k < asstc; k++) {
      //       console.log("FLk");
      //       let sstc = body.comment.substring(k, k + matches[j].length);
      //       if (sstc === matches[j]) {
      //         let rude = true;
      //         if (profanity[i].exceptions) {
      //           profanity[i].exceptions.forEach((exception) => {
      //             console.log("FLfe");
      //             const split = exception.split("*");
      //             const word = split[0] + sstc + split[1];
      //             const context = body.comment.substring(
      //               k - split[0].length,
      //               k + matches[j].length + split[1].length
      //             );
      //             if (context === word) {
      //               rude = false;
      //             }
      //           });
      //         }
      //         if (rude) {
      //           console.log("Word was rude");
      //           return alert(
      //             "This post has been flagged for profanity as it contains the term: " +
      //               sstc
      //           );
      //         }
      //       }
      //     }
      //   }
      // }

      const inappropriate = Moderation(body.comment);

      console.log(inappropriate);

      if (inappropriate) {
        return alert(
          "This post has been flagged for profanity as it contains the term: " +
            inappropriate.flagged
        );
      }

      addComment(disID, body);
    }
  }, [body]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label name="email">Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            required
          />
          <br />
          <label>Comment</label>
          <br />
          <textarea
            onChange={(e) => setComment(e.target.value)}
            id="comment"
            type="text-field"
            required
          />
          <br />
          <button
            onClick={() =>
              setBody({
                email: email,
                comment: comment,
              })
            }
            className="button-4"
            type="submit"
          >
            Add comment
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CommentModal;
