import { useState } from "react";
import useTodoStore from "../store/TodoStore";
import { Button, Flex } from "antd";

const TaskTypeContainer = () => {
  const taskTypes = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Work",
      value: "work",
    },
    {
      name: "Urgent",
      value: "urgent",
    },
    {
      name: "Health",
      value: "health",
    },
    {
      name: "Personal",
      value: "personal",
    },
    {
      name: "Educational",
      value: "education",
    },
    {
      name: "Misc.",
      value: "misc",
    },
  ];

  const setFilterType = useTodoStore((state) => state.setFilterType);

  const [activeType, setActiveType] = useState("all");
  const taskBtnType = activeType ? "primary" : "";
  return (
    <>
      <Flex
        style={{
          width: "800px",
        }}
        wrap={true}
        align="center"
        gap={"1rem"}
      >
        {taskTypes.map((taskType) => (
          <Button
            style={{
              padding: "1.5rem 1rem",
              fontSize: "1.2rem",
              fontWeight: "normal",
            }}
            shape="round"
            key={taskType.name}
            type={`${activeType === taskType.value ? taskBtnType : ""}`}
            onClick={() => {
              setFilterType(taskType.value);
              setActiveType(taskType.value);
            }}
          >
            {taskType.name}
          </Button>
        ))}
      </Flex>
    </>
  );
};

export default TaskTypeContainer;
