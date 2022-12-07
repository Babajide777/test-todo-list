import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const SingleTodo = ({ todo }) => {
  return (
    <li className="flex justify-between items-center bg-[#f2f2f2] py-3 rounded-md mb-6 px-2">
      <p className="text-xl">{todo}</p>
      <MdDeleteOutline
        color="#fff"
        size="1.5rem"
        className="bg-[#8e49e8] cursor-pointer hover:opacity-50"
      />
    </li>
  );
};

export default SingleTodo;
