import Header from "../components/Header";
import ShowTask from "../components/ShowTask";
import { useState } from "react";

const Main = () => {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);
  return (
    <div className="container w-50">
      <div className="task-card">
        <Header tasks={tasks} setTasks={setTasks} />
        <ShowTask tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Main;
