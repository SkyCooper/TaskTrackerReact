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
              className="task-item d-flex justify-content-between border border-1 align-item-center bg-light text-dark m-4"
            >
              <div
                onClick={() => changeLine(task)}
                className="task-name d-flex justify-content-around"
                style={{
                  textDecoration: task.complete && "line-through",
                }}
              >
                <div className="my-4">
                  {task.complete ? (
                    <i className="fa-solid fa-check-circle fa-2xl text-success mx-4"></i>
                  ) : (
                    <i className="fa-solid fa-check fa-2xl text-dark mx-4"></i>
                  )}
                </div>
                <div className="px-3">
                  <h3 className="task-title">{task.task.toUpperCase()}</h3>
                  <p className="task-date">
                    {task.date
                      .toString()
                      .replaceAll("-", "/")
                      .replace("T", " - ")}
                  </p>
                </div>
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
