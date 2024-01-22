import { LineChart, Line, XAxis, YAxis, Legend } from 'recharts';

const LineChartComponent = (props) => {
	const data = props.data;
	const dataKeys = data ? Object.keys(data[0]) : '';
	const CustomXAxisTick = ({ x, y, payload }) => (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={16}
				textAnchor="middle"
				fill="#A3AED0"
				fontSize={12}
				fontFamily="Poppins"
			>
				{payload.value}
				{props.yAxisUnit}
			</text>
		</g>
	);

	const CustomYAxisTick = ({ x, y, payload }) => (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={16}
				textAnchor="end"
				fill="#A3AED0"
				fontSize={12}
				fontFamily="Poppins"
			>
				{payload.value === 0
					? ''
					: `${payload.value} ${props.yAxisUnitSuffix}`}
			</text>
		</g>
	);

	return (
		<>
			<LineChart
				width={450}
				height={300}
				data={data}
				style={{ marginLeft: '7rem' }}
			>
				<XAxis
					dot={false}
					axisLine={false}
					dataKey={dataKeys[0]}
					tick={<CustomXAxisTick />}
				/>
				<YAxis
					dot={false}
					axisLine={false}
					tick={<CustomYAxisTick />}
					ticks={[10, 20, 30, 40, 50, 60]}
				/>
				<Line
					type="monotone"
					dataKey={dataKeys[1]}
					stroke="#00B85E"
					strokeWidth={3}
					wrapperStyle={{ fontSize: '0.75rem' }}
					dot={false}
				/>
				<Line
					type="monotone"
					dataKey={dataKeys[2]}
					stroke="#8794C2"
					strokeWidth={3}
					dot={false}
				/>
				{props.showLegend && (
					<Legend
						// align="left"
						// verticalAlign="middle"  //Uncommet to move legend to the left center.
						layout="horizontal"
						formatter={(value, entry) => (
							<span style={{ fontSize: '0.75rem' }}>
								{value} {entry.unit}
							</span>
						)}
						wrapperStyle={{
							paddingLeft: '10px',
						}}
						payload={[
							{
								value: 'Recent AUM',
								type: 'rect',
								color: '#00B85E',
							},
							{
								value: 'Past AUM',
								type: 'rect',
								rotation: '90deg',
								color: '#8794C2',
							},
						]}
					/>
				)}
			</LineChart>
		</>
	);
};

export default LineChartComponent;
