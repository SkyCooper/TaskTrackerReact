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
      setBtn({ name: "HIDE ADD TASK BAR", bgColor: "green" });
    }
    setShow(!show)
  };
  return (
    <div className="header text-center">
      <h1 className="text-center">Task Tracker</h1>
      <button className="p-2 btn btn-lg" onClick={visibleClick} style={{background : btn.bgColor}}>{btn.name}</button>
      {show ? <AddTask tasks={tasks} setTasks={setTasks}/> : null}

      {/* {show && <AddTask tasks={tasks} setTasks={setTasks}/>} */}
    </div>
  );
};

export default Header;
