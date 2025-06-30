import { useState } from "react";
import Chart from "react-apexcharts";

const dummy = [44, 55, 41, 17, 15];

const DonutChart = () => {
  const [chartData] = useState({
    options: {
      labels: ["A", "B", "C", "D", "E"],
    },
    series: dummy,
  });
  return (
    <div className="donut">
      <div className="text-center text-2xl font-bold">Donut Chart</div>

      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="500"
      />
    </div>
  );
};

export default DonutChart;
