import { Grid, Typography } from '@mui/material';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

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
				</PieChart>
			</ResponsiveContainer>
		</Grid>
	);
};

export default FullPieChart;
