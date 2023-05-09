import "./Discussion.css";
import React from "react";

let initialDiscussion = [
  {
    discussionId: 1,
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    discussionId: 1,
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    discussionId: 1,
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
  },
];

const Discussion = () => {
  // function addComment() {
  //   return (
  //     <>
  //       <div id="updateModal" class="modal">
  //         <div class="modal-content">
  //           <form id="updatePersonForm">
  //             <label class="form-label" for="pID">
  //               ID:
  //             </label>
  //             <input
  //               class="form-control"
  //               type="text"
  //               name="pID"
  //               id="pID"
  //               required
  //             />
  //             <label class="form-label" for="pAge">
  //               Age:
  //             </label>
  //             <input class="form-control" type="number" name="pAge" id="pAge" />
  //             <label class="form-label" for="pJob">
  //               Job:
  //             </label>
  //             <input class="form-control" type="text" name="pJob" id="pJob" />
  //             <div class="mt-3" />
  //             <button class="btn btn-success" type="submit">
  //               Submit
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  const printData = () =>
    initialDiscussion.map((data, index) => {
      const { email, body } = data;
      return (
        <tr key={index}>
          <td>{email}</td>
          <td>{body}</td>
        </tr>
      );
    });
  return (
    <>
      <div class="discussion">
        <h1>Discussion Board</h1>
        <button class="button-4">+ Add New Discussion</button>
      </div>
      <div class="discussion" id="discussion">
        <h1>This is the subject of the first discussion</h1>
        <button class="button-4">Reply to this discussion</button>
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
            <tbody>{printData()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Discussion;
