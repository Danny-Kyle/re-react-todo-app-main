import React, { useContext, useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  const updateTasks = (taskList, updateLocalStorage = true) => {
    setTasks(taskList);
    if (updateLocalStorage) {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }
  };

  const showAllTasks = () => {
    const localData = localStorage.getItem("tasks");
    const JSONLocalData = localData ? JSON.parse(localData) : [];
    setTasks(JSONLocalData);
  };

  return (
    <AppContext.Provider value={{ tasks, updateTasks, showAllTasks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
