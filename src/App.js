import React, { useState } from "react";
import { FormComponent } from "./components/FormComponent";
import { Header } from "./components/Header";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [text, setText] = useState("");

  // localStorage.setItem("tasks", JSON.stringify(tasks));
  // const storedTasks = JSON.parse(localStorage.getItem('tasks') || "[]");

  return (
    <div className={`${darkTheme ? "dark" : ""}`}>
      <div>
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <FormComponent
          text={text}
          setText={setText}
        />
      </div>
      <div className="">
            <p className=" flex justify-center">Created by Okechukwu || &copy; Copyright 2022. All rights reserved.</p>
        </div>
    </div>
  );
};



export default App;
