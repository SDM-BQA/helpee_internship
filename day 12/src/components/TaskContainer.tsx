import useTodoStore from "../store/TodoStore";
import Tasks from "./Tasks";

interface Tasks {
  id: string,
  name:string,
  description:string,
  tag:string,
  priority:{
    name:string,
    value:string,
    priorityNum:number
  },
  time:string,
  status:string
}

const TaskContainer = () => {
    const tasks:Tasks[] = useTodoStore((state)=>state.todos)
    const filterType = useTodoStore((state)=>state.filterType)

  
  const filteredTasks =
    filterType === "all"
      ? tasks
      : tasks.filter((task) => task.tag.toLowerCase() === filterType);




 const sortedTasks = [...filteredTasks].sort((a, b) => {
    const aPriority = a.priority?.priorityNum || 0;
    const bPriority = b.priority?.priorityNum || 0;
    return bPriority - aPriority;
  });
  return (
    <>
      {!filteredTasks.length && <div className="text-xl font-bold italic text-blue-500">Add some task to see...</div> }
      <div className="flex flex-col gap-3">
        {sortedTasks.map((task, id) => (
          <Tasks key={id} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskContainer;
