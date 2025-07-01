import { useState } from "react";
import { toast } from "react-toast";
import useTodoStore from "../store/TodoStore";

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
    <div className="border border-2 border-slate-500 rounded-2xl w-[800px] p-2">
      <div className="grid grid-cols-2 gap-4 ">
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          placeholder="Enter task name..."
          className="outline-none w-full font-semibold text-lg p-4 border-b border-slate-200"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter task description..."
          className="outline-none w-full font-semibold text-lg p-4 border-b border-slate-200"
        />
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="outline-none w-full font-semibold text-lg p-4 border-b border-slate-200"
        >
          {taskTypes.map((taskType) => (
            <option key={taskType.name} value={taskType.value}>{taskType.name}</option>
          ))}
        </select>
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
          className="outline-none w-full font-semibold text-lg p-4 border-b border-slate-200"
        >
          {priorityTypes.map((priorityType) => (
            <option key={priorityType.value} value={priorityType.value}>
              {priorityType.name}
            </option>
          ))}
        </select>
      </div>
      <div
        onClick={handleClick}
        className="mt-3 w-full text-center font-bold text-lg cursor-pointer p-2 px-12 border rounded-2xl bg-blue-500 text-white hover:bg-blue-600 active:scale-[.9]"
      >
        Add
      </div>
    </div>
  );
};

export default InputContainer;
