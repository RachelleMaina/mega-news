import React from "react";
import Title from "../shared/Title";
import { comment } from "postcss";

const Comments = () => {
  const comments = [
    {
      author: "ellsmartx",
      comment:
        "how nice does this look 😍 I feel it should be delicious, thank you",
    },
    {
      author: "cassia",
      comment:
        "Take a rest, i'll be cheer up you again in 2 next game go go go",
    },
    {
      author: "amanda",
      comment: "you were stunning today, jan! 💗 great match 👍🏽👍🏽",
    },
    {
      author: "Denis Simonassi",
      comment: "It was a great match today Janzi! You did great😉🇩🇪",
    },
  ];
  return (
    <div className="w-1/2">
      <Title title="Comments" />
      <div className="flex flex-col gap-5 mt-5">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="bg-gray rounded-lg p-2 flex flex-col gap-1"
          >
            <div>
              <span className="text-black font-medium line-clamp-1 capitalize">
                {comment.author}
              </span>
            </div>
            <div>
              <span className="text-black-75 text-xs line-clamp-1 capitalize">
                {comment.comment}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
