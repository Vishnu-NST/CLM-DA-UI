import { Divider, Grid, Typography } from '@mui/material';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const FullPieChart = () => {
	const data = [
		{ name: 'Group A', value: 5067, fill: '#8794C2' },
		{ name: 'Group B', value: 3800, fill: '#F8F9FB' },
		{ name: 'Group C', value: 5067, fill: '#00B85E' },
	];
	return (
		<Grid item xs={6}>
			<Typography
				variant="h6"
				style={{
					fontSize: '1.125rem',
					fontWeight: '600',
					marginBottom: '1rem',
				}}
			>
				Loan Overview
			</Typography>
			<Divider />
			<ResponsiveContainer width="100%" height={400}>
				<PieChart width={500} height={200}>
					<Pie
						dataKey="value"
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={70}
						outerRadius={120}
					/>
					<Tooltip />
				</PieChart>
			</ResponsiveContainer>
		</Grid>
	);
};

export default FullPieChart;
