import { useState } from "react";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  const [chartData] = useState({
    options : {
  chart: {
    type: 'bar',
    stacked: true
  },
  series: [{
    data: [{
      x: 'category A',
      y: 10
    }, {
      x: 'category B',
      y: 18
    }, {
      x: 'category C',
      y: 13
    }]
  }]
}
  });
  return (
    <div className="donut">
      <div className="text-2xl font-bold">TreeMap Chart</div>

      <Chart
        options={chartData.options}
        series={chartData.options.series}
        type="bar"
        width="500"
      />
    </div>
  );
};

export default ColumnChart;
