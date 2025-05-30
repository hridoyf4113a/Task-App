export default function TaskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      if (!action.input) {
        alert("You just put nothing!");
        return tasks;
      }

      const newTask = {
        complete: false,
        input: action.input,
      };

      return [...tasks, newTask];
    }

    case "deleted": {
      return tasks.filter((_, idx) => idx !== action.i);
    }

    case "deleteAll":
      return [];

    case "completed": {
      const updatedTasks = tasks.map((task, idx) => {
        if (idx === action.id) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });
      return updatedTasks;
    }
    default:
      return tasks;
  }
}
