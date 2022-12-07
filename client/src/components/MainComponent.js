import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

const MainComponent = () => {
  return (
    <main className="flex items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-b from-[#68EACC] to-[#497BE8]">
      <section>
        <h1>Todo App</h1>
        <div>
          <input type="text" placeholder="Enter a new Todo"></input>
          <BsFillPlusSquareFill
            color="#8E49E8"
            size="3rem"
          ></BsFillPlusSquareFill>
        </div>
        <p>
          You have <span className="pending"></span> pending Todos
        </p>
      </section>
    </main>
  );
};

export default MainComponent;
