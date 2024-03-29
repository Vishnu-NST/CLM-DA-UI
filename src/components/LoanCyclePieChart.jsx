import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';
const LoanCyclePieChart = (props) => {
	const data = props.data;
	const fillValues = ['#00B85E', '#8794C2'];
	const formattedData = data
		? Object.entries(data).map(([name, value], index) => ({
				name,
				value,
				fill: fillValues[index],
			}))
		: null;
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
								data={formattedData}
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
								// formatter={(value) => (
								// 	<span style={{ fontSize: '0.75rem' }}>
								// 		{value == 'firstCycleLOA'
								// 			? 'First cycle loans Outstanding Amount'
								// 			: 'Second cycle loans Outstanding Amount'}
								// 	</span>
								// )}
								formatter={(value, entry) => (
									<span style={{ fontSize: '0.75rem' }}>
										{entry.payload.name === 'firstCycleLOA'
											? `First cycle loans Outstanding Amount: ${entry.payload.payload.payload.value}`
											: `Second cycle loans Outstanding Amount: ${entry.payload.payload.payload.value}`}
									</span>
								)}
							/>
						</PieChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</Grid>
	);
};
export default LoanCyclePieChart;
