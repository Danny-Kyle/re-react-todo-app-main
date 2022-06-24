import React, { useContext, useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  const updateTasks = (taskList) => {
    setTasks(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
  };

  return (
    <AppContext.Provider value={{ tasks, updateTasks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
