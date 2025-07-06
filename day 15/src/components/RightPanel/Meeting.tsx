import { SiGooglemeet, SiZoom } from "react-icons/si";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const Meeting = ({ meet }) => {
  return (
    <div className="w-full flex items-center justify-between py-8 border-b border-gray-300 text-lg">
      {/* Left Section: Date & Time */}
      <div className="flex flex-col gap-1 w-1/4">
        <span className="text-[#b1b3b5]">{meet.date}</span>
        <span className="font-bold">{meet.time}</span>
      </div>

      {/* Middle Section: Title & Platform */}
      <div className="flex flex-col gap-1 w-2/4">
        <span className="text-xl font-bold">{meet.title}</span>
        <span className="flex gap-2 items-center text-gray-500">
          <span>
            {meet.platform === "Google Meet" ? (
              <SiGooglemeet color="black" />
            ) : (
              <SiZoom color="black" />
            )}
          </span>
          {meet.platform}
        </span>
      </div>

      {/* Right Section: Arrow Icon aligned to end */}
      <div className="w-1/4 flex justify-end">
        <HiOutlineArrowUpRight size={20} color="#7d7f81" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Meeting;
