const ShowTask = ({ tasks, setTasks }) => {
  const changeLine = (task) => {
    const newTask = { ...task, complete: !task.complete };
    setTasks([...tasks.filter((e) => !(e.id === task.id)), newTask]);
  };

  const delTask = (task) => {
    const deletedTask = tasks.filter((e) => e.id !== task.id);
    setTasks(deletedTask);
  };

  return (
    <div className="tasks">
      <div className="tasks-list">
        {tasks.map((task) => {
          console.log(task);
          return (
            <div
              key={task.id}
              className="task-item d-flex justify-content-around border border-1 align-item-center bg-light text-dark m-4"
            >
              <div
                onClick={() => changeLine(task)}
                className="task-name "
                style={{
                  textDecoration: task.complete && "line-through",
                }}
              >
                <h2 className="task-title">{task.task}</h2>
                <p className="task-date">{task.date}</p>
              </div>
              <div className="m-4">
                <i className="fa-solid fa-edit fa-2xl text-warning mx-4"></i>
                <i
                  className="fa-solid fa-trash fa-2xl text-danger"
                  onClick={() => delTask(task)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTask;
