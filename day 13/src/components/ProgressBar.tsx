import "react-circular-progressbar/dist/styles.css";
import useTodoStore from "../store/TodoStore";
import { Flex, Progress } from "antd";
const ProgressBar = () => {
  const todos = useTodoStore((state) => state.todos);
  const filterType = useTodoStore((state) => state.filterType);

  const filteredTasks =
    filterType === "all"
      ? todos
      : todos.filter((task) => task.tag.toLowerCase() === filterType);

  const completedTodo = filteredTasks.filter(
    (todo) => todo.status === "completed"
  );
  const percentage = Math.ceil(
    (completedTodo.length / filteredTasks.length) * 100
  );

  return (
    <Flex
      align="center"
      justify="between"
      style={{
        width: "100%",
        border: "2px solid gray",
        padding: "1.5rem",
        borderRadius: "1rem",
      }}
    >
      <Flex style={{ width: "100%" }} vertical={true} gap={"1rem"}>
        <span
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#f0b100",
          }}
        >
          Tasks Progress Report
        </span>
        <span
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "#1677ff",
          }}
        >
          Total Tasks Added: {filteredTasks.length}
        </span>
        <span
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "#00c951",
          }}
        >
          Total Tasks Completed: {completedTodo.length}
        </span>
      </Flex>
      <Progress type="circle" percent={percentage} />
    </Flex>
  );
};

export default ProgressBar;
