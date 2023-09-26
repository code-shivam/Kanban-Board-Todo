export const taskList = [
    { title: "Task", filterStatus: "todo", myClassName: "todoTask" },
    {
      title: "In Progress",
      filterStatus: "inProgress",
      myClassName: "inProgressTodoTask",
    },
    { title: "Done", filterStatus: "done", myClassName: "doneTodoTask" },
  ];



  export const GetDateMonthTime = (epochTime) => {
    const dateObj = new Date(epochTime);
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    };
    const dateTime = dateObj.toLocaleString('en-IN', options).replace(',', '');
    const formattedDateTime = `${dateTime}`;
    return formattedDateTime;
  };
  
  