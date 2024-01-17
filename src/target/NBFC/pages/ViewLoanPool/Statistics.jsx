import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	PieChart,
	Pie,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const PoolAssetDataStyle = {
	color: 'var(--Sub-text-2, #8794C2)',
	fontSize: '0.75rem',
	lineHeight: '0rem',
	letterSpacing: '-0.015rem',
	pl: 1,
};
const Statistics = () => {
	const data = [
		{
			name: 'Quarter 1',
			Principal: 4000,
			Interest: 2400,
			amt: 2400,
		},
		{
			name: 'Quarter 2',
			Principal: 3000,
			Interest: 1398,
			amt: 2210,
		},
		{
			name: 'Quarter 3',
			Principal: 2000,
			Interest: 9800,
			amt: 2290,
		},
		{
			name: 'Quarter 4',
			Principal: 2780,
			Interest: 3908,
			amt: 2000,
		},
	];

	const data02 = [
		{ name: 'Group A', value: 2400, fill: '#C4161C' },
		{ name: 'Group B', value: 5567, fill: '#8794C2' },
	];

	const data3 = [
		{ name: 'First Loan Pool Cycle', value: 70, fill: '#8794C2' },
		{ name: 'Second Loan Pool Cycle', value: 30, fill: '#E7EAF3' },
	];

	return (
		<div
			style={{
				padding: '1.5rem',
				backgroundColor: 'white',
				border: '1px solid rgba(135, 148, 194, 0.2)',
				borderRadius: '1.25rem',
			}}
		>
			<Grid
				container
				spacing={4}
				sx={{
					backgroundColor: '#F8F9FB',
				}}
			>
				<Grid item xs={12}>
					<Grid
						container
						spacing={4}
						// backgroundColor="red"
						sx={{ backgroundColor: '#fff' }}
					>
						<Grid item xs={6}>
							<Typography
								variant="h6"
								style={{
									fontSize: '1.125rem',
									fontWeight: '600',
									marginBottom: '1rem',
								}}
							>
								Summary
							</Typography>

							<Divider />
							<br />

							<div style={{ height: '400px' }}>
								<ResponsiveContainer width="100%" height="100%">
									<BarChart
										// width={500}
										// height={100}
										data={data}
										margin={{
											top: 5,
											right: 30,
											left: 20,
											bottom: 5,
										}}
									>
										<XAxis dataKey="name" />
										<YAxis />
										<Tooltip />
										<Legend />
										<Bar
											dataKey="Interest"
											fill="#8794C2"
											background={{ fill: '#eee' }}
											barSize={40}
										/>
										<Bar
											dataKey="Principal"
											fill="#C4161C"
											background={{ fill: '#eee' }}
											barSize={40}
										/>
									</BarChart>
								</ResponsiveContainer>
							</div>
						</Grid>
						<Grid item xs={6}>
							<br />
							<Card elevation={0}>
								<Grid
									container
									alignItems="center"
									justifyContent="center"
									backgroundColor="#F8F9FB"
								>
									<Grid item xs={6}>
										<ResponsiveContainer
											width="100%"
											height={400}
										>
											<PieChart width={500} height={200}>
												<Pie
													dataKey="value"
													data={data02}
													cx="50%"
													cy="50%"
													innerRadius={70}
													outerRadius={120}
												/>
												<Tooltip />
											</PieChart>
										</ResponsiveContainer>
									</Grid>
									<Grid item xs={6}>
										<Card
											elevation={0}
											sx={{
												mb: 6,
												display: 'inline-block',
												backgroundColor: 'white',
												height: '4.5rem',
												width: '8rem',
											}}
										>
											<Typography
												variant="subtitle2"
												fontWeight="bold"
												marginBottom="1rem"
												fontSize="22px"
												sx={{ pt: 1, pl: 1 }}
											>
												69,000
											</Typography>
											<Typography sx={PoolAssetDataStyle}>
												Total No of Account
											</Typography>
										</Card>

										<Box sx={{ mb: 4 }}>
											<Typography
												variant="subtitle2"
												fontWeight="bold"
												marginBottom="1rem"
											>
												69,000
											</Typography>
											<Typography sx={PoolAssetDataStyle}>
												Total No of Account
											</Typography>
										</Box>

										<Box sx={{ mb: 4 }}>
											<Typography
												variant="subtitle2"
												fontWeight="bold"
												marginBottom="1rem"
											>
												69,000
											</Typography>
											<Typography sx={PoolAssetDataStyle}>
												Total No of Account
											</Typography>
										</Box>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} sm={4}>
					<Card>
						<CardContent style={{ height: '19rem' }}>
							<Grid container spacing={2}>
								<Grid item xs={6} style={{ marginBottom: '1.5rem' }}>
									<Typography
										variant="subtitle2"
										fontWeight="bold"
										marginBottom="1rem"
									>
										₹ 50Cr
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										AUM
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography
										variant="subtitle2"
										fontWeight="bold"
										marginBottom="1rem"
									>
										₹ 1Cr
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										Total Outstanding Amount
									</Typography>
								</Grid>
								<Grid item xs={6} style={{ marginBottom: '1.5rem' }}>
									<Typography
										variant="subtitle2"
										fontWeight="bold"
										marginBottom="1rem"
									>
										10,000
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										Total Customers
									</Typography>
								</Grid>

								<Grid item xs={6} style={{ marginBottom: '1.5rem' }}>
									<Typography
										variant="subtitle2"
										fontWeight="bold"
										marginBottom="1rem"
									>
										7,000
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										Total Disbursement
									</Typography>
								</Grid>

								<Grid item xs={6} style={{ marginBottom: '1.5rem' }}>
									<Typography
										variant="subtitle2"
										fontWeight="bold"
										marginBottom="1rem"
									>
										28
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										No. of States
									</Typography>
								</Grid>

								<Grid item xs={6}>
									<Typography
										variant="subtitle2"
										fontWeight="bold"
										marginBottom="1rem"
									>
										08
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										No. of Districts
									</Typography>
								</Grid>

								<Grid item xs={6}>
									<Typography
										variant="subtitle2"
										fontWeight="bold"
										marginBottom="1rem"
									>
										25
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										No. of Branches
									</Typography>
								</Grid>

								<Grid item xs={6}>
									<Typography
										variant="subtitle2"
										fontWeight="bold"
										marginBottom="1rem"
									>
										16%
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										Average IRR
									</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} sm={4}>
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
							{/* <LoanCycleChart /> */}
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
										data={data3}
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
										// layout="horizontal"
										// verticalAlign="top"
										align="center"
										wrapperStyle={{ top: 220 }}
									/>
								</PieChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} sm={4}>
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
								Geography
							</Typography>
							<Divider />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};
export default Statistics;
