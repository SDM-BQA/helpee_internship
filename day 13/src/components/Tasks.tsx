import { toast } from "react-toast";
import useTodoStore from "../store/TodoStore";
import { Button, Flex } from "antd";
import { FaCheck, FaXmark, FaDumpster } from "react-icons/fa6";

const Tasks = ({ task }) => {
  const taskDescription = task.description;
  // if (task.description.length > 65) {
  //   taskDescription = `${task.description.slice(0, 65)}...`;
  // }
  let priorityColorClass = "";
  let statusColor = "";

  if (task.priority.priorityNum === 3) priorityColorClass = "red";
  else if (task.priority.priorityNum === 2) priorityColorClass = "#ffe334";
  else priorityColorClass = "#94f1b6";

  if (task.status === "active") statusColor = "red";
  else statusColor = "green";

  let statusChgDiv = "";
  if (task.status === "active") statusChgDiv = "#00c951";
  else statusChgDiv = "#8B0000";

  //   store
  const taskStatus = useTodoStore((state) => state.taskStatus);
  const taskDelete = useTodoStore((state) => state.deleteTask);

  const italic = task.status === "completed" ? "italic" : "";
  const strikeThrough = task.status === "completed" ? "line-through" : "";

  const icon = task.status === "active" ? <FaCheck /> : <FaXmark />;

  return (
    <Flex
      style={{
        // backgroundColor:'#f3f3f3',
        width: "800px",
        border: "2px solid gray",
        padding: "1.5rem 1rem",
        borderRadius: "1rem",
      }}
      justify="between"
      align="center"
      gap={"1rem"}
    >
      <Flex
        style={{
          width: "50%",
        }}
        vertical={true}
        gap={"0.5rem"}
      >
        <Flex
          style={{
            color: "#1677ff",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          align="center"
          gap={"0.5rem"}
        >
          {task.tag.toUpperCase()} |{" "}
          <span
            style={{
              color: `${priorityColorClass}`,
            }}
          >
            {task.priority.name.toUpperCase()}
          </span>
        </Flex>
        <span
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            fontStyle: `${italic}`,
            textDecoration: `${strikeThrough}`,
          }}
        >
          {task.taskName}
        </span>
        <span
          style={{
            maxWidth: "500px",
            fontSize: "1.1rem",
            fontWeight: "normal",
            fontStyle: `${italic}`,
            textDecoration: `${strikeThrough}`,
          }}
        >
          {taskDescription}
        </span>
        <span>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Task added at:{" "}
          </span>{" "}
          <span>{task.time}</span>
        </span>
      </Flex>
      <Flex
        style={{
          color: `${statusColor}`,
          fontWeight: "bolder",
          width: "25%",
          fontSize: "1.2rem",
        }}
      >
        <span>{task.status.toUpperCase()}</span>
      </Flex>
      <Flex
        style={{
          width: "25%",
        }}
        vertical={true}
        gap={".7rem"}
      >
        {/* text-center p-3 bg-red-600 text-white border border-black cursor-pointer font-semibold rounded-lg */}
        <Button
          style={{
            backgroundColor: `${statusChgDiv}`,
            textAlign: "center",
            padding: "1.7rem",
            color: "#ffffff",
            border: "1px solid gray",
            borderRadius: ".5rem",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          onClick={() => taskStatus(task.id)}
          icon={icon}
        >
          <span>{task.status === "active" ? "Mark As Done" : "Not Done"}</span>
        </Button>
        <Button
          style={{
            backgroundColor: "#EE4B2B",
            textAlign: "center",
            padding: "1.7rem",
            color: "#ffffff",
            border: "1px solid gray",
            borderRadius: ".5rem",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          icon={<FaDumpster/>}
          onClick={() => {
            toast.success("Task Deleted Successfully");
            taskDelete(task.id);
          }}
        >
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default Tasks;
