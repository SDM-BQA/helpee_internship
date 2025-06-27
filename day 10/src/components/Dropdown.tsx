import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Dropdown = () => {
  const [showDrop, setShowDrop] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  const jobRoles = [
    { id: 1, label: "Software Engineer" },
    { id: 2, label: "Data Analyst" },
    { id: 3, label: "Project Manager" },
    { id: 4, label: "UX Designer" },
    { id: 5, label: "Marketing Specialist" },
  ];

  const handleDropDown = () => {
    setShowDrop(!showDrop);
  };

  const handleSelected = (label:string) => {
    setSelected(label);
    setShowDrop(false);
  };

  return (
    <div className="flex items-center justify-center gap-2 flex-col relative ">
      <div className="text-2xl font-bold mb-2">Dropdown Component</div>
      <div
        className="flex items-center justify-between w-full p-3 cursor-pointer border rounded-lg"
        onClick={handleDropDown}
      >
        <span className="font-semibold">{selected ? selected : "Select an Option"}</span>
        <span>
          {!showDrop && <FaCaretDown />}
          {showDrop && <FaCaretUp />}
        </span>
      </div>
      {showDrop && (
        <div className="border w-full p-2 text-center rounded-lg flex gap-1 flex-col absolute top-26 transition delay-150">
          {jobRoles.map((role) => (
            <p
              key={role.id}
              className="rounded-lg cursor-pointer p-2 hover:border-gray-100 hover:bg-slate-200"
              onClick={() => handleSelected(role.label)}
            >
              {role.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
