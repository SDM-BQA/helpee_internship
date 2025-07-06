const ProfileStats = ({Icon, taskName, completePercent, bgGradient}) => {
  return (
    <div className={`w-1/2 h-full  px-[2.5rem] py-[2rem] rounded-3xl flex justify-between flex-col ${bgGradient}`}>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-xl">
          {taskName}
          <br />
          tasks
        </span>
        <span className="p-2 backdrop-blur-xl bg-white/30 rounded-lg">
          <Icon size={25} />
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-[3rem]">{completePercent}%</span>
        <span className="text-gray-400">Avg. Completed</span>
      </div>
    </div>
  );
};

export default ProfileStats;
