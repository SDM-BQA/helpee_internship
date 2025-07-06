import Navbar from "./Navbar";
import Profile from "../LeftPanelProfile/Profile";

const LeftPanel = () => {
  return (
    <div className="h-dvh w-9/10 px-8 py-10 border-r border-r-gray-300 bg-[#f4f6fa] flex flex-col gap-8">
      <Navbar />
      <Profile />
    </div>
  );
};

export default LeftPanel;
