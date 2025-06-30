import { useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const [chartData] = useState({
    options:{},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  });
  return (
    <div className="donut">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default DonutChart;
