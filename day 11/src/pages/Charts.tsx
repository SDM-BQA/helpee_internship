import BarChart from "../components/BarChart"
import DonutChart from "../components/DonutChart"
import LineChart from "../components/LineChart"

const Charts = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
        <BarChart/>
        <LineChart/>
        <DonutChart/>
    </div>
  )
}

export default Charts