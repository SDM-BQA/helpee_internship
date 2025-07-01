import BarChart from "../components/BarChart";
import ColumnChart from "../components/ColumnChart";
import DonutChart from "../components/DonutChart";
import LineChart from "../components/LineChart";
import RadarChart from "../components/RadarChart";
import TreeMap from "../components/TreeMap";

const Charts = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <BarChart />
      <LineChart />
      <DonutChart />
      <RadarChart />
      <TreeMap />
      <ColumnChart/>
    </div>
  );
};

export default Charts;
