import { GetDateMonthTime } from "../constant";

function TaskList({
  title,
  tasks,
  updateTaskStatus,
  filterStatus,
  filterClassName,
}) {
  return (
    <div className="subContainer">
      <h1 className="heading">{title}</h1>
      <div className="myContainer">
        {tasks.map(
          (task, index) =>
            (filterStatus === undefined || task.status === filterStatus) && (
              <div className={filterClassName} key={index} draggable>
                <p className="title">{task.todo}</p>
                <p className="time">Time: {GetDateMonthTime(task.time)}</p>
                <div className="buttonSection">
                  <button
                    className="prevButton"
                    disabled={task.status === "todo"}
                    onClick={() =>
                      updateTaskStatus(
                        index,
                        task.status === "inProgress" ? "todo" : "inProgress"
                      )
                    }
                  >
                    Prev
                  </button>
                  <button
                    className="nextButton"
                    disabled={task.status === "done"}
                    onClick={() =>
                      updateTaskStatus(
                        index,
                        task.status === "todo" ? "inProgress" : "done"
                      )
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TaskList;
