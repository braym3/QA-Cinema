import StaticStarRating from "./StaticStarRating";

const Comment = ({ data, index }) => {
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
};

export default Comment;
