import { useState } from "react";
import Chart from "react-apexcharts";

const RadarChart = () => {
  const [chartData] = useState({
    options: {
      labels: ["April", "May", "June", "July", "August", "September"],
    },
    series: [
      {
        name: "Radar Series 1",
        data: [45, 52, 38, 24, 33, 10],
      },
      //   {
      //     name: "Radar Series 2",
      //     data: [26, 21, 20, 6, 8, 15],
      //   },
    ],
  });

  return (
    <div className="radar">
      <div className="text-center text-2xl font-bold">Radar Chart</div>

      <Chart
        options={chartData.options}
        series={chartData.series}
        type="radar"
        width="600"
      />
    </div>
  );
};

export default RadarChart;
