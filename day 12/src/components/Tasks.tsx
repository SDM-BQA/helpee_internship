import { toast } from "react-toast";
import useTodoStore from "../store/TodoStore";

const Tasks = ({ task }) => {
  const taskDescription = task.description;
  // if (task.description.length > 65) {
  //   taskDescription = `${task.description.slice(0, 65)}...`;
  // }
  let priorityColorClass = "";
  let statusColor = "";

  if (task.priority.priorityNum === 3) priorityColorClass = "text-red-600";
  else if (task.priority.priorityNum === 2)
    priorityColorClass = "text-yellow-300";
  else priorityColorClass = "text-green-300";

  if (task.status === "active") statusColor = "text-red-300";
  else statusColor = "text-green-500";

  //   store
  const taskStatus = useTodoStore((state) => state.taskStatus);
  const taskDelete = useTodoStore((state) => state.deleteTask);

  const strikeThrough =
    task.status === "completed" ? "line-through italic" : "";

  return (
    <div className="w-[800px] border p-5 rounded-2xl flex gap-2 justify-between items-center">
      <div className="flex flex-col w-1/2 gap-1">
        <span className="flex items-center gap-2 text-blue-500 text-md font-semibold">
          {task.tag.toUpperCase()} |{" "}
          <span className={priorityColorClass}>
            {task.priority.name.toUpperCase()}
          </span>
        </span>
        <span className={`font-bold text-lg ${strikeThrough}`}>
          {task.taskName}
        </span>
        <span className={`max-w-[500px] ${strikeThrough}`}>
          {taskDescription}
        </span>
        <span className=''>
         <span className="font-bold">Task added at: </span> <span className="font-semibold">{task.time}</span>
        </span>
      </div>
      <div className="flex flex-col gap-1 w-1/6">
        <span className={`font-bold ${statusColor}`}>
          {task.status.toUpperCase()}
        </span>
      </div>
      <div className="flex flex-col gap-1 w-1/6">
        <div
          className="text-center p-2 bg-green-400 text-white border border-black cursor-pointer font-semibold rounded-lg"
          onClick={() => taskStatus(task.id)}
        >
          {task.status === "active" ? "Mark As Done" : "Not Done"}
        </div>
        <div
          className="text-center p-2 bg-red-400 text-white border border-black cursor-pointer font-semibold rounded-lg"
          onClick={() => {
            toast.success('Task Deleted Successfully')
            taskDelete(task.id)
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default Tasks;
