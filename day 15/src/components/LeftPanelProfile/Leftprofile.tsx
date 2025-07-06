import {
  IoReload,
  IoPeople,
  IoCheckmarkDoneCircle,
  IoTrophy,
} from "react-icons/io5";

const LeftProfile = () => {
  return (
    <div className="flex flex-col justify-between  w-2/5 h-full rounded-3xl bg-white px-[2.5rem] py-[2rem]">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">Profile</div>
        <div className="cursor-pointer">
          <IoReload size={20} color="gray" />
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto items-center">
        {/* img */}
        <div className="relative w-[150px] h-[150px] rounded-full bg-gray-300 mb-8">
          <div className="absolute w-[180px] h-[180px] rounded-full border-4 border-gray-200 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[20px] h-[20px] absolute right-0 bottom-0 bg-black rounded-full"></div>
          <img
            src="https://www.columbiasc.edu/sites/default/files/thumbnail_K.%20Barnett_Headshot.jpg"
            alt="img"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="font-bold text-2xl mb-2">Kristin Watson</div>
        <div className="text-gray-400">Design Manager</div>
      </div>
      <div className="flex items-center justify-around">
        <div className="flex items-center gap-2 justify-between px-4 py-2 shadow rounded-xl">
          <span>
            <IoPeople color="#de583b" />
          </span>
          <span>11</span>
        </div>
        <div className="flex items-center gap-2 justify-between px-4 py-2 shadow rounded-xl">
          <span>
            <IoCheckmarkDoneCircle color="#de583b" />
          </span>
          <span>56</span>
        </div>
        <div className="flex items-center gap-2 justify-between px-4 py-2 shadow rounded-xl">
          <span>
            <IoTrophy color="#de583b" />
          </span>
          <span>12</span>
        </div>
      </div>
    </div>
  );
};

export default LeftProfile;
