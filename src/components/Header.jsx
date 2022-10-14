import { useState } from "react";
import AddTask from "./AddTask";

const Header = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState({
    name: "SHOW ADD TASK BAR",
    bgColor: "red",
  });

  const visibleClick = () => {
    if (show) {
      setBtn({ name: "SHOW ADD TASK BAR", bgColor: "red" });
    } else {
      setBtn({ name: "CLOSE ADD TASK BAR", bgColor: "blue" });
    }
    setShow(!show)
  };
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <button onClick={visibleClick}>{btn.name}</button>
      {show ? <AddTask tasks={tasks} setTasks={setTasks}/> : null}

      {/* {show && <AddTask tasks={tasks} setTasks={setTasks}/>} */}
    </div>
  );
};

export default Header;
