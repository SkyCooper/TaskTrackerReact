import { useState } from "react";
import { v1 as uuid } from "uuid";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    const newTask = { id: id, task: task, date: date, complete: false };
    setTasks([newTask, ...tasks]);
    setTask("");
    setDate("");
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <div className="text-center  d-flex justify-content-between">
          <label htmlFor="task" className="fs-2">
            Task
          </label>{" "}
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            className="w-50 p-2"
          />
        </div>
        <div className="m-1 text-center d-flex justify-content-between">
          <label htmlFor="date" className="fs-4">
            Day & Time
          </label>{" "}
          <input
            className="w-50 p-2"
            type="datetime-local"
            id="date"
            value={String(date).replace("T", " ")}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="save-btn mt-4 w-25 p-3 rounded-pill btn btn-success mb-2"
          >
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
