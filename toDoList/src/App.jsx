import React from "react";
import ToDoApp from "./components/ToDoApp";
import StudentApp from "./components/StudentApp";

function App() {
  return (
    <div className="App">
      <h1>To-Do-List</h1>
      <ToDoApp />

      <h1>Quản lý sinh viên</h1>
      <StudentApp></StudentApp>
    </div>
  );
}

export default App;
