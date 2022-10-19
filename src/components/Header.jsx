import { useState } from "react";
import AddTask from "./AddTask";

const Header = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState({
    name: "SHOW ADD TASK BAR",
    bgColor: "green",
  });

  const visibleClick = () => {
    show
      ? setBtn({ name: "SHOW ADD TASK BAR", bgColor: "green" })
      : setBtn({ name: "HIDE ADD TASK BAR", bgColor: "red" });
    setShow(!show);
  };
  return (
    <div className="header text-center">
      <h1 className="text-center">Task Tracker</h1>
      <button
        className="p-3 w-50 text-white rounded-pill mb-2"
        onClick={visibleClick}
        style={{ background: btn.bgColor, fontSize : "1.5rem" }}
      >
        {btn.name}
      </button>
      {show && <AddTask tasks={tasks} setTasks={setTasks} />}
    </div>
  );
};

export default Header;
