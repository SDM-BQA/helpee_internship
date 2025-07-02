import { Flex } from "antd";
import useTodoStore from "../store/TodoStore";
import Tasks from "./Tasks";

interface Tasks {
  id: string;
  name: string;
  description: string;
  tag: string;
  priority: {
    name: string;
    value: string;
    priorityNum: number;
  };
  time: string;
  status: string;
}

const TaskContainer = () => {
  const tasks: Tasks[] = useTodoStore((state) => state.todos);
  const filterType = useTodoStore((state) => state.filterType);

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
      {!filteredTasks.length && (
        <div
          style={{
            fontSize: "1.4rem",
            fontWeight: "bolder",
            fontStyle: "italic",
            color: "#1677ff",
          }}
        >
          Add some task to see...
        </div>
      )}
      <Flex vertical={true} gap={"1.5rem"}>
        {sortedTasks.map((task, id) => (
          <Tasks key={id} task={task} />
        ))}
      </Flex>
    </>
  );
};

export default TaskContainer;
