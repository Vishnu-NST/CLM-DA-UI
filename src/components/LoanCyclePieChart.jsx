import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const LoanCyclePieChart = () => {
	const loanCycleData = [
		{ name: 'First Cycle Loans Outstanding Amount', value: 70, fill: '#00B85E' },
		{
			name: 'Second Cycle Loans Outstanding Amount',
			value: 30,
			fill: '#8794C2',
		},
	];
	return (
		<Grid item xs={4}>
			<Card>
				<CardContent>
					<Typography
						variant="h6"
						style={{
							fontSize: '1.125rem',
							fontWeight: '600',
							marginBottom: '1rem',
						}}
					>
						Loan cycle
					</Typography>
					<Divider />
					<ResponsiveContainer width="100%" height={300}>
						<PieChart
							width={500}
							height={50}
							margin={{
								top: 0,
								right: 0,
								left: 0,
								bottom: -10,
							}}
						>
							<Pie
								dataKey="value"
								data={loanCycleData}
								cx="50%"
								cy="50%"
								innerRadius={50}
								outerRadius={120}
								fill="#82ca9d"
								startAngle={180}
								endAngle={0}
								paddingAngle={5}
							/>
							<Tooltip />
							<Legend
								layout="horizontal"
								// verticalAlign="top"
								align="center"
								wrapperStyle={{ top: 220 }}
							/>
						</PieChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</Grid>
	);
};
export default LoanCyclePieChart;
