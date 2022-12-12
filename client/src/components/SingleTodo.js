import React, { useRef, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";

const SingleTodo = ({ todo, _id, first }) => {
  const inputEl = useRef(null);
  const [show, setShow] = useState(false);

  const handleDelete = () => {
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

  const handleEdit = () => {
    fetch(`http://localhost:4000/api/edit/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo }),
    })
      .then((res) => res.json())
      .then((res) => first())
      .catch((err) => console.log(err));
  };

  return (
    <li className="flex justify-between items-center bg-[#f2f2f2] py-3 rounded-md mb-6 px-2">
      <p className="text-xl">{todo}</p>
      {show && (
        <div className="flex items-center gap-1">
          <input
            type="text"
            className="border-[#ccc] border-[1px] w-[50%] rounded-md text-xs p-0.5"
            ref={inputEl}
            defaultValue={todo}
          />
          <GiCheckMark
            color="#68EACC"
            size="0.8rem"
            className="cursor-pointer hover:opacity-50"
            onClick={handleEdit}
          />
        </div>
      )}
      <div className="flex items-center gap-1">
        <FiEdit
          color="#fff"
          size="1.5rem"
          className="bg-[#8e49e8] cursor-pointer hover:opacity-50 rounded-md"
          onClick={() => setShow(!show)}
        />
        <MdDeleteOutline
          color="#fff"
          size="1.5rem"
          className="bg-[#8e49e8] cursor-pointer hover:opacity-50 rounded-md"
          onClick={handleDelete}
        />
      </div>
    </li>
  );
};

export default SingleTodo;
