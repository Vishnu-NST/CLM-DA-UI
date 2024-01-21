import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';
const LoanCyclePieChart = () => {
	const loanCycleData = [
		{ name: 'First Cycle Loans Outstanding Amount', value: 70, fill: '#00B85E' },
		{
			name: 'Second Cycle Loans Outstanding Amount',
			value: 30,
			fill: '#8794C2',
		},
	];
	const LegendCls = {
		fontColor: '#8794C2',
		fontSize: '0.75rem',
		marginTop: '-5px',
	};
	return (
		<Grid item xs={4} minWidth="100%">
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
					<ResponsiveContainer height={280}>
						<PieChart type="circle" height={50}>
							<Pie
								dataKey="value"
								data={loanCycleData}
								cx="50%"
								cy="50%"
								outerRadius={120}
								fill="#82ca9d"
								startAngle={180}
								paddingAngle={5}
								endAngle={0}
								cornerRadius={15}
								innerRadius={80}
							/>
							<Legend
								layout="vertical"
								align="center"
								wrapperStyle={LegendCls}
							/>
						</PieChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</Grid>
	);
};
export default LoanCyclePieChart;
