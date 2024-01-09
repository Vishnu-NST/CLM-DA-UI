import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import LoanCycleChart from '@/components/LoanCycleChart';

const PoolAssetDataStyle = {
	color: 'var(--Sub-text-2, #8794C2)',
	fontSize: '0.75rem',
	lineHeight: '0rem',
	letterSpacing: '-0.015rem',
};
const Dashboard = () => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Typography variant="h6">First Grid</Typography>
						</CardContent>
					</Card>
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
							<LoanCycleChart />
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
		</>
	);
};
export default Dashboard;
