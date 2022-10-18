const ShowTask = ({ tasks, setTasks }) => {
  const changeLine = (task) => {
    let newTask = { ...task, complete: !task.complete };
    setTasks([...tasks.filter((e) => !(e.id === task.id)), newTask]);
  };

  const delTask = (task) => {
    const deletedTask = tasks.filter((e) => e.id !== task.id);
    setTasks(deletedTask)
  };

  return (
    <div className="tasks">
      <div className="tasks-list">
        {tasks.map((task) => {
          console.log(task);
          return (
            <div key={task.id} className="task-item d-flex justify-content-around border border-1 align-item-center">
              <div
                onClick={() => changeLine(task)}
                className="task-name"
                style={{
                  textDecoration: task.complete ? "line-through" : "none",
                }}
              >
                <h2 className="task-title">{task.task}</h2>
                <p className="task-date">{task.date}</p>
              </div>
              <div>
                <i className="fa-solid fa-trash" onClick={() => delTask(task)}></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTask;
