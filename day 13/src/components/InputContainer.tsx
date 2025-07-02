import { useState } from "react";
import { toast } from "react-toast";
import { Button, Col, Flex, Input, Row, Select } from "antd";
import useTodoStore from "../store/TodoStore";
import { FaCheck } from "react-icons/fa6";
import { Option } from "antd/es/mentions";

const InputContainer = () => {
  const taskTypes = [
    {
      name: "Select Task Type",
      value: "",
    },
    {
      name: "Urgent",
      value: "urgent",
    },
    {
      name: "Work",
      value: "work",
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

  const priorityTypes = [
    {
      name: "Select Task Priority",
      value: "",
      priorityNum: 0,
    },
    {
      name: "High",
      value: "High",
      priorityNum: 3,
    },
    {
      name: "Medium",
      value: "Medium",
      priorityNum: 2,
    },
    {
      name: "Low",
      value: "Low",
      priorityNum: 1,
    },
  ];

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [priority, setPriority] = useState({ value: "", priorityNum: 0 });

  const addTask = useTodoStore((state) => state.addTask);

  const handleClick = () => {
    if (!taskName || !description || !tag || !priority) {
      toast.error("Please fill in all fields!");
      return;
    }

    addTask({ id: Date.now(), taskName, description, tag, priority });
    toast.success("Task added!");

    setTaskName("");
    setDescription("");
    setTag("");
    setPriority({ value: "", priorityNum: 0 });
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "1rem",
        width: "800px",
        padding: "1rem",
      }}
    >
      <Flex vertical={true} gap={"1.5rem"} className="">
        <Row gutter={20}>
          <Col span={12}>
            <Input
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              type="text"
              placeholder="Enter task name..."
              style={{
                fontSize: "1.3rem",
                padding: ".7rem",
                fontWeight: "bold",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "2px solid gray",
                outline: "none",
              }}
            />
          </Col>
          <Col span={12}>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Enter task description..."
              style={{
                fontSize: "1.3rem",
                padding: ".7rem",
                fontWeight: "bold",
                // border:"none",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "2px solid gray",
                outline: "none",
              }}
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col flex={12}>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              style={{
                 width:"100%",
                fontWeight: "bold",
                padding: ".7rem",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "2px solid gray",
                outline: "none",
                fontSize: "1.2rem",
              }}
            >
              {taskTypes.map((taskType) => (
                <option key={taskType.name} value={taskType.value}>
                  {taskType.name}
                </option>
              ))}
            </select>
          </Col>
          <Col flex={12}>
            <select
              value={priority.value}
              onChange={(e) =>
                setPriority(
                  priorityTypes.find((p) => p.value === e.target.value) || {
                    value: "",
                    priorityNum: 0,
                  }
                )
              }
              style={{
                width:"100%",
                fontWeight: "bold",
                padding: ".7rem",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "2px solid gray",
                outline: "none",
                fontSize: "1.2rem",
              }}
            >
              {priorityTypes.map((priorityType) => (
                <option key={priorityType.value} value={priorityType.value}>
                  {priorityType.name}
                </option>
              ))}
            </select>
          </Col>
        </Row>
      </Flex>
      <Button
        size="large"
        icon={<FaCheck />}
        shape="round"
        style={{
          // mt-3 w-full text-center font-bold text-lg cursor-pointer p-2 px-12 border rounded-2xl bg-blue-500 text-white hover:bg-blue-600 active:scale-[.9]
          marginTop: "1.5rem",
          width: "100%",
          color: "#fff",
          fontWeight: "bolder",
          padding: "1.5rem",
        }}
        type="primary"
        variant="filled"
        onClick={handleClick}
      >
        Add
      </Button>
    </div>
  );
};

export default InputContainer;
