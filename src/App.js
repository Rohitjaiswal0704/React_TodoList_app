import React, { useState } from "react";
import Create from "./component/Create";
import Show from "./component/Show";
import "./App.css"

function App() {
  const [tasks, setTask] = useState([]);

  return (
    <div className="main">

      <div className="page1">

        <h1 className="h1">TO DO LIST</h1>

      <Create tasks={tasks} setTask={setTask} />

      <Show tasks={tasks} setTask={setTask} />

      </div>
    </div>
  );
}

export default App;
