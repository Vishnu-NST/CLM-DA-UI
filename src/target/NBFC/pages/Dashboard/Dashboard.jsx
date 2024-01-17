import {
	Box,
	Card,
	CardContent,
	Divider,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';
import LoanCycleChart from '@/components/LoanCycleChart';
import {
	BarChart,
	Bar,
	Cell,
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
};
const Dashboard = () => {
	const data = [
		{
			name: 'Quarter 1',
			principal: 4000,
			interest: 2400,
			amt: 2400,
		},
		{
			name: 'Quarter 2',
			principal: 3000,
			interest: 1398,
			amt: 2210,
		},
		{
			name: 'Quarter 3',
			principal: 2000,
			interest: 9800,
			amt: 2290,
		},
		{
			name: 'Quarter 4',
			principal: 2780,
			interest: 3908,
			amt: 2000,
		},
	];

	const data02 = [
		{ name: 'Group A', value: 2400, fill: '#af3f3fde' },
		{ name: 'Group B', value: 4567 },
		{ name: 'Group C', value: 1398 },
		{ name: 'Group D', value: 9800 },
		{ name: 'Group E', value: 3908 },
		{ name: 'Group F', value: 4800 },
	];

	const data3 = [
		{ name: 'First Loan Pool Cycle', value: 70, fill: '#8794C2' },
		{ name: 'Second Loan Pool Cycle', value: 30, fill: '#E7EAF3' },
	];

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

	return (
		<>
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
							<Grid
								container
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								sx={{ mb: 5 }}
							>
								<Grid item>
									<Typography
										variant="h6"
										style={{
											fontSize: '1.125rem',
											fontWeight: '600',
										}}
									>
										Summary
									</Typography>
								</Grid>
								<Grid item>
									<FormControl sx={{ minWidth: 120 }}>
										<InputLabel id="demo-simple-select-label">
											Year
										</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											// value={age}
											label="Age"
											onChange={() => {}}
										>
											<MenuItem value={10}>2023</MenuItem>
											<MenuItem value={20}>2022</MenuItem>
											<MenuItem value={30}>2021</MenuItem>
										</Select>
									</FormControl>
								</Grid>
							</Grid>

							{/* <Typography
								variant="h6"
								style={{
									fontSize: '1.125rem',
									fontWeight: '600',
									marginBottom: '1rem',
								}}
							>
								Loan cycle
							</Typography> */}

							<Divider />

							<div style={{ height: '400px' }}>
								<ResponsiveContainer>
									<BarChart
										width={500}
										height={300}
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
											dataKey="interest"
											fill="#8794C2"
											background={{ fill: '#eee' }}
											barSize={40}
										/>
										<Bar
											dataKey="principal"
											fill="#C4161C"
											barSize={40}
										/>
									</BarChart>
								</ResponsiveContainer>
							</div>
						</Grid>
						<Grid item xs={6}>
							<Card>
								<Grid
									container
									// spacing={2}
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
													innerRadius={50}
													outerRadius={120}
													fill="#82ca9d"
												/>
												<Tooltip />
											</PieChart>
										</ResponsiveContainer>
									</Grid>
									<Grid item xs={6}>
										<Box
											sx={{
												mb: 6,
												display: 'inline-block',
												backgroundColor: 'white',
											}}
										>
											<Typography
												variant="subtitle2"
												fontWeight="bold"
												marginBottom="1rem"
												fontSize="22px"
											>
												69,001
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

							{/* <PieChart
								width={800}
								height={400}
								onMouseEnter={() => {}}
							>
								<Pie
									data={data3}
									cx="50%"
									cy="50%"
									startAngle={180}
									endAngle={0}
									innerRadius={60}
									outerRadius={80}
									fill="#8884d8"
									paddingAngle={5}
									dataKey="value"
								>
									{data3.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
							</PieChart> */}

							{/* <ResponsiveContainer width="100%" height={300}>
								<PieChart width={500} height={200}>
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
									<Legend />
								</PieChart>
							</ResponsiveContainer> */}

							{/* <Divider /> */}
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};
export default Dashboard;
