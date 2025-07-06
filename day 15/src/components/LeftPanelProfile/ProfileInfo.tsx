import { GoStopwatch } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import LeftProfile from "./Leftprofile";
import ProfileStats from "./ProfileStats";
import ProfileTracker from "./ProfileTracker";

const ProfileInfo = () => {
  return (
    <div className="h-1/2 w-full flex gap-3">
      {/* Left */}
      <LeftProfile />

      {/*  */}
      <div className="w-3/5 flex flex-col gap-5">
        <div className="flex h-full gap-5">
          <ProfileStats
            taskName={"Prioritized"}
            Icon={GoStopwatch}
            completePercent={83}
            bgGradient={
              " bg-gradient-to-br from-pink-100 via-pink-200 to-orange-200"
            }
          />
          <ProfileStats
            taskName={"Additional"}
            Icon={FaRegCheckCircle}
            completePercent={56}
            bgGradient={
              "bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100"
            }
          />
        </div>
        {/*  */}
        <ProfileTracker />
      </div>
    </div>
  );
};

export default ProfileInfo;
