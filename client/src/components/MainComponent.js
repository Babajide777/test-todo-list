import React, { useEffect, useRef, useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import SingleTodo from "./SingleTodo";

const MainComponent = () => {
  const inputEl = useRef(null);
  const [allTodos, setAllTodos] = useState([]);
  const [first, setfirst] = useState(true);

  const handleNewTodo = () => {
    let todoValue = inputEl.current.value;
    if (todoValue !== "") {
      fetch("http://localhost:4000/api/create", {
        method: "POST",
        body: JSON.stringify({ todo: todoValue }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setfirst(!first))
        .catch((err) => console.log(err));
    }
  };

  const setFirstFunc = () => {
    setfirst(!first);
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/todos")
      .then((res) => res.json())
      .then((res) => setAllTodos(res.data))
      .catch((err) => console.log(err));
  }, [first]);

  return (
    <main className="flex items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-b from-[#68EACC] to-[#497BE8]">
      <section className="bg-white shadow-[0px 10px 15px rgba(0, 0, 0, 0.1)] w-[90%] md:w-[400px] p-6 rounded-xl">
        <h1 className="font-bold text-4xl mb-4">Todo App</h1>
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Enter a new Todo"
            className="border-[#ccc] border-[1px] w-[85%] rounded-md p-2"
            ref={inputEl}
          />
          <BsFillPlusSquareFill
            color="#8E49E8"
            size="2.5rem"
            className="cursor-pointer hover:opacity-50"
            onClick={handleNewTodo}
          />
        </div>
        <ul>
          {allTodos.map((eachTodo, i) => (
            <SingleTodo key={i} {...eachTodo} first={setFirstFunc} />
          ))}
        </ul>
        <p>You have {allTodos.length} pending Todo(s)</p>
      </section>
    </main>
  );
};

export default MainComponent;
