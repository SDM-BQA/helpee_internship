import { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [chartData] = useState({
    options: {
      chart: {
        id: "basic-line",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-2",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-3",
        data: [20, 30, 35, 50, 40, 65, 60, 81],
      },
    ],
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <div className="text-center text-2xl font-bold">Line Chart</div>

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
