import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          timeAgo='Today at 4:45PM'
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          timeAgo='Today at 6:00PM'
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          timeAgo='Yesterday at 2:45PM'
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
