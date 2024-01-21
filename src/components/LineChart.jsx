import { LineChart, Line, XAxis, YAxis, Legend } from 'recharts';

const LineChartComponent = (props) => {
	const data = [
		{ name: 'SEP', 'Recent AUM': 30, 'Past AUM': 20 },
		{ name: 'OCT', 'Recent AUM': 35, 'Past AUM': 25 },
		{ name: 'NOV', 'Recent AUM': 31, 'Past AUM': 21 },
		{ name: 'DEC', 'Recent AUM': 36, 'Past AUM': 26 },
		{ name: 'JAN', 'Recent AUM': 28, 'Past AUM': 18 },
		{ name: 'FEB', 'Recent AUM': 35, 'Past AUM': 25 },
	];

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
				{payload.value === 0 ? '' : `${payload.value} Cr`}
			</text>
		</g>
	);

	return (
		<>
			<LineChart
				width={400}
				height={300}
				data={data}
				margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
			>
				<XAxis
					dot={false}
					axisLine={false}
					dataKey="name"
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
					dataKey="Recent AUM"
					stroke="#00B85E"
					strokeWidth={3}
					wrapperStyle={{ fontSize: '0.75rem' }}
					dot={false}
				/>
				<Line
					type="monotone"
					dataKey="Past AUM"
					stroke="#8794C2"
					strokeWidth={3}
					dot={false}
				/>
				{props.showLegend && (
					<Legend
						align="left"
						verticalAlign="middle"
						layout="vertical"
						formatter={(value) => (
							<span style={{ fontSize: '0.75rem' }}>{value}</span>
						)}
						payload={[
							{
								value: 'Recent AUM',
								type: 'circle',
								color: '#00B85E',
							},
							{
								value: 'Past AUM',
								type: 'circle',
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
