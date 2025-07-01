import { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [chartData] = useState({
    options: {
      chart: {
        id: "basic-line",
      },
      xaxis: {
        type: "datetime",
      },
    },
    series: [
      {
        name: "Temperature",
        data: [
          { x: new Date("2023-01-01").getTime(), y: 30 },
          { x: new Date("2023-01-02").getTime(), y: 32 },
          { x: new Date("2023-01-03").getTime(), y: 31 },
          { x: new Date("2023-01-04").getTime(), y: 29 },
          { x: new Date("2023-01-05").getTime(), y: 35 },
        ],
      },
    ],
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <div className="text-2xl font-bold">Line Chart</div>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
