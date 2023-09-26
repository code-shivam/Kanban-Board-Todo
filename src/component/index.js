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
                <div className={filterClassName} key={index}>
                  <p className="title">{task.todo}</p>
                  <p className="time">Time: {GetDateMonthTime(task.time)}</p>
                  {task.status === "todo" && (
                    <div className="buttonSection">
                      <button className="prevButton" disabled>
                        Prev
                      </button>
                      <button
                        className="nextButton"
                        onClick={() => updateTaskStatus(index, "inProgress")}
                      >
                        Next
                      </button>
                    </div>
                  )}
                  {task.status === "inProgress" && (
                    <div className="buttonSection">
                      <button
                        className="prevButton"
                        onClick={() => updateTaskStatus(index, "todo")}
                      >
                        Prev
                      </button>
                      <button
                        className="nextButton"
                        onClick={() => updateTaskStatus(index, "done")}
                      >
                        next
                      </button>
                    </div>
                  )}
                  {task.status === "done" && (
                    <div className="buttonSection">
                      <button
                        className="prevButton"
                        onClick={() => updateTaskStatus(index, "inProgress")}
                      >
                        Prev
                      </button>
                      <button className="nextButton" disabled>
                        next
                      </button>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    );
  }


  export default TaskList
  