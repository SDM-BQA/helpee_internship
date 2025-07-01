import { useState } from "react";
import useTodoStore from "../store/TodoStore";

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

  const setFilterType = useTodoStore((state)=>state.setFilterType)

  const [activeType, setActiveType] = useState("all");
  const taskTypeBGColor = activeType
    ? "bg-black text-white border-slate-600"
    : "bg-white text-black";
  //    className={`${taskTypeBGColor} border px-5 py-2 cursor-pointer font-semibold text-sm rounded-xl`}
  return (
    <>
      <div className="flex w-[800px] gap-2  items-center flex-wrap">
        {taskTypes.map((taskType) => (
          <div
            key={taskType.name}
            className={`${
              activeType === taskType.value ? taskTypeBGColor : ""
            } px-5 py-2 rounded-xl cursor-pointer border border-slate-400 font-semibold`}
            onClick={() => {
              setFilterType(taskType.value);
              setActiveType(taskType.value);
            }}
          >
            {taskType.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskTypeContainer;
