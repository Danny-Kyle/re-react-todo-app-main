import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import Button from "./Button";

export const FormComponent = ({ text, setText }) => {
  const { tasks, updateTasks } = useGlobalContext();
  const [taskList, setTaskList] = useState(tasks)

  useEffect(() => {
    setTaskList(tasks)
  }, [tasks])

  const checkKeyPressed = (e) => {
    if (e.keyCode === 13 && text) {
      e.preventDefault();
      addTask(text);
      setText("");
    }
  };

  function addTask(task) {
    const newTask = {
      id: new Date().getTime().toString(),
      text: task,
      status: false,
    };
    updateTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    updateTasks(tasks.filter((task) => task.id !== id));
  };

  const clearAllTasks = () => {
    updateTasks([]);
  };

  const showActiveTasks = () => {
    const activeTasks = tasks.filter((task) => task.status === false);
    setTaskList(activeTasks);
  };

  const showCompletedTasks = () => {
    const completedTask = tasks.filter((task) => task.status === true);
    setTaskList(completedTask);
  };

  const showAllTasks = () => {
    setTaskList(tasks);
  }

  function updateTask(taskID) {
    const isTaskIdValid = tasks.find((task) => task.id === taskID);
    if (isTaskIdValid) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskID) {
          return { ...task, status: !task.status };
        } else {
          return task;
        }
      });
      updateTasks(updatedTasks);
    }
  }

  return (
    <div className=" px-96 justify-evenly center dark:bg-gray-900 bg-gray-300 tracking-wide">
      <input
        type="text"
        placeholder="Create a new Todo........."
        className="border dark:bg-gray-800 bg-slate-50 py-2 px-4 text-gray-900 dark:text-gray-100 flex justify-evenly center "
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => checkKeyPressed(e)}
      />

      {taskList.length > 0
        ? taskList.map((task) => (
            <div
              className="flex justify-between cursor-pointer bg-slate-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border py-[10px] px-[20px]"
              key={task.id}
            >
              <input type="checkbox" onClick={() => updateTask(task.id)} />
              <h3
                className={`bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 ${
                  task.status ? "line-through" : " "
                }`}
              >
                {task.text}
              </h3>
              <FaTimes
                className="dark:text-slate-50 text-gray-800  cursor-pointer"
                onClick={() => deleteTask(task.id)}
              />
            </div>
          ))
        : "Let's Create a Task........"}

      <div className="flex bg-slate-50 dark:bg-gray-800 justify-between border px-4 font-medium tracking-wide text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring focus:ring-gray-900 focus:ring-opacity-80 rounded-md">
        <p>{tasks.length} Items Available</p>
        <div className="w-2/3 justify-between space-x-16">
          <Button label="All" onClick={showAllTasks} />
          <Button label="Active" onClick={showActiveTasks}/>
          <Button label="Completed" onClick={showCompletedTasks}/>
          <Button label="Clear List" onClick={clearAllTasks}/>
        </div>
      </div>
    </div>
  );
};

// for FaTimes hover:text-gray-800 dark:hover:text-slate-50 object-none object-right
