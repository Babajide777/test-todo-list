import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const SingleTodo = ({ todo, _id, first }) => {
  const handleClick = () => {
    fetch(`http://localhost:4000/api/deletetodo/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => first())
      .catch((err) => console.log(err));
  };

  return (
    <li className="flex justify-between items-center bg-[#f2f2f2] py-3 rounded-md mb-6 px-2">
      <p className="text-xl">{todo}</p>
      <MdDeleteOutline
        color="#fff"
        size="1.5rem"
        className="bg-[#8e49e8] cursor-pointer hover:opacity-50"
        onClick={handleClick}
      />
    </li>
  );
};

export default SingleTodo;
