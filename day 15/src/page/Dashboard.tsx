import LeftPanel from "../components/LeftPanel/LeftPanel";
import RightPanel from "../components/RightPanel/RightPanel";

const Dashboard = () => {
  return (
    <div className="flex  items-center justify-between ">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Dashboard;
