import { FaRegCalendar } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import Meeting from "./Meeting";

interface Meet {
  title: string;
  date: string;
  time: string;
  platform: string;
}

const Meetings = () => {
  const meetings: Meet[] = [
    {
      title: "Quick Daily Meeting",
      date: "2025-07-11",
      time: "08:15",
      platform: "Zoom",
    },
    {
      title: "John Onboarding",
      date: "2025-07-11",
      time: "21:30",
      platform: "Google Meet",
    },
    {
      title: "Call With a New Team",
      date: "2025-07-12",
      time: "14:30",
      platform: "Google Meet",
    },
    {
      title: "Lead Designers Event",
      date: "2025-07-15",
      time: "16:00",
      platform: "Zoom",
    },
    {
      title: "AI Event",
      date: "2025-07-20",
      time: "11:00",
      platform: "Zoom",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* meetings */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <span className="text-2xl font-bold">My Meetings</span>
          <span className="p-1.5 bg-white rounded-2xl bg-[#fefffd]">
            <FaRegCalendar size={25} color="#666666" />
          </span>
        </div>
        <div className="flex flex-col">
          {meetings.map((meeting, id) => (
            <Meeting key={id} meet={meeting} />
          ))}
        </div>
        <div className="mt-8 cursor-pointer flex justify-center items-center text-gray-500 gap-2">
          <span>See all meetings</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
