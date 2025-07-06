import { FaCaretDown } from "react-icons/fa";
import MyBump from "./MyBump";

const GraphPanel = () => {
  const data = [
    {
      id: "January",
      data: [
        { x: 0, y: 5 },
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 1 },
        { x: 4, y: 3 },
      ],
    },
    {
      id: "February",
      data: [
        { x: 0, y: 2 },
        { x: 1, y: 3 },
        { x: 2, y: 1 },
        { x: 3, y: 5 },
        { x: 4, y: 2 },
      ],
    },
    {
      id: "March",
      data: [
        { x: 0, y: 3 },
        { x: 1, y: 4 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 1 },
      ],
    },

  ];

  return <div className="h-1/2 w-full">
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <span className="font-bold text-[1.5rem]">Focusing</span>
        {/* <span className="text-gray-500">Productivity analytics</span> */}
      </div>
      <div className="cursor-pointer text-lg flex items-center px-4 py-1 bg-white rounded-xl font-semibold">
        <span>Range: Last Month</span>
        <span className="ml-2">
          <FaCaretDown/>
        </span>
      </div>
    </div>
    <MyBump data={data}/>
  </div>;
};
export default GraphPanel;
