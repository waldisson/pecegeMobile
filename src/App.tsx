import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Router from "./routes/drawer.routes";
import { TasksContext } from "./contexts/tasks";

const App = () => {
  return (
    // <TasksContext.Provider value={{created:true}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer> 
    // </TasksContext.Provider>
  )
};

export default App;
