import { useState } from "react";
import { v1 as uuid } from "uuid";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    const newTask = { id: id, task: task, date: date, complete: false };
    setTask([...tasks, newTask]);
    setTask("");
    setDate("");
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Day & Time</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <div>
            <button type="submit" className="save-btn">
              Save Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
