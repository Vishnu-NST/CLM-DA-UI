import { Grid, Typography } from '@mui/material';
import { Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

const FullPieChart = () => {
	const data = [
		{ name: 'Group A', value: 5067, fill: '#8794C2' },
		{ name: 'Group B', value: 3800, fill: '#c6c7c8' },
		{ name: 'Group C', value: 5067, fill: '#00B85E' },
	];
	const titleStyle = {
		fontSize: '1.125rem',
		fontWeight: '600',
		marginLeft: '0rem',
	};
	const legendCls = {
		fontColor: '#8794C2',
		fontSize: '0.75rem',
		bottom: -20,
	};
	return (
		<Grid item xs={6}>
			<Typography sx={titleStyle}>Loan Overview</Typography>
			<ResponsiveContainer width="100%" height={300}>
				<PieChart>
					<Pie
						dataKey="value"
						data={data}
						cx="50%"
						cy="50%"
						paddingAngle={8}
						cornerRadius={15}
						innerRadius={80}
						outerRadius={120}
					/>
					<Legend
						align="center"
						verticalAlign="bottom"
						layout="vertical"
						wrapperStyle={legendCls}
						formatter={(value, entry) => (
							<span style={{ fontSize: '0.75rem' }}>
								{entry.payload.name === 'soldLoanPool'
									? `No. of Sold Loan Pools: ${entry.payload.payload.payload.value}`
									: entry.payload.name === 'activePool'
										? `No. of Active Pools: ${entry.payload.payload.payload.value}`
										: `No. of Expired Pools: ${entry.payload.payload.payload.value}`}
							</span>
						)}
					/>
				</PieChart>
			</ResponsiveContainer>
		</Grid>
	);
};

export default FullPieChart;
