import { ResponsiveBump } from '@nivo/bump'

const MyBump = ({ data }) => (
    <ResponsiveBump /* or Bump for fixed dimensions */
        data={data}
        xOuterPadding={0.45}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        endLabel={false}
        pointSize={10}
        activePointSize={15}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={6}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        enableGridY={false}
        axisLeft={{ legend: 'ranking', legendOffset: -40 }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
    />
)

export default MyBump