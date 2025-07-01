import { useState } from "react";
import Chart from "react-apexcharts";

const TreeMap = () => {
  const [chartData] = useState({
    options: {
      chart: {
        type: "treemap",
      },
    },
    series: [
      {
        data: [
          {
            x: "New Delhi",
            y: 218,
          },
          {
            x: "Kolkata",
            y: 149,
          },
          {
            x: "Mumbai",
            y: 184,
          },
          {
            x: "Ahmedabad",
            y: 55,
          },
          {
            x: "Bangaluru",
            y: 84,
          },
          {
            x: "Pune",
            y: 31,
          },
          {
            x: "Chennai",
            y: 70,
          },
        ],
      },
    ],
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <div className="text-2xl font-bold">TreeMap Chart</div>

          <Chart
            options={chartData.options}
            series={chartData.series}
            type="treemap"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default TreeMap;
