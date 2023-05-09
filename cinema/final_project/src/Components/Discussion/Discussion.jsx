import "./Discussion.css";
import comments from "./comments.json";

const Discussion = () => {
  const printData = () =>
    comments.map((data, index) => {
      const { email, body } = data;
      return (
        <tr key={index}>
          <td>{email}</td>
          <td>{body}</td>
          <td>
            <form>
              <input id={index.toString} type="submit" value="Reply" />
            </form>
          </td>
        </tr>
      );
    });
  return (
    <>
      <div class="discussion">
        <h1>Discussion Board</h1>
      </div>
      <div class="discussion">
        <h1>This is the subject of the first discussion</h1>
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
