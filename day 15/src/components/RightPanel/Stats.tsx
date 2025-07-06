import { FaCircleDown, FaCircleUp } from "react-icons/fa6";


const skills = [
  {
    title: "Sports",
    progress: "71%",
    type: "down",
  },
  {
    title: "Blogging",
    progress: "92%",
    type: "up",
  },
  {
    title: "Leadership",
    progress: "33%",
    type: "down",
  },
  {
    title: "Meditation",
    progress: "56%",
    type: "up",
  },
  {
    title: "Philosophy",
    progress: "79%",
    type: "up",
  },
];

const Stats = () => {
  return (
    <div>
      <div className="header mb-4">
        <div className="font-bold text-2xl">Developed areas</div>
        <div className="text-gray-500">Most common areas of interest</div>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        {skills.map((skill, index) => (
          <div key={index} className="grid grid-cols-4 items-center gap-6">
            {/* Skill title in fixed-width column */}
            <span className="text-lg font-semibold col-span-1">{skill.title}</span>

            {/* Progress bar + % + arrow in one line */}
            <div className="col-span-3 flex items-center gap-2">
              <div className="w-full h-3 bg-gray-200 rounded relative">
                <div
                  className="absolute top-0 left-0 h-3 bg-blue-500 rounded"
                  style={{ width: skill.progress }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700 mr-5">{skill.progress}</span>
              <span
                className={`font-medium ${
                  skill.type === "up" ? "bg-green-500" : "bg-red-500"
                } text-white rounded p-1 rounded-full`}
              >
                {skill.type === "up" ? <FaCircleUp /> : <FaCircleDown/>}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Stats;
