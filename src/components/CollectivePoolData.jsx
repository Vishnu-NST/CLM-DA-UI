import { Card, CardContent, Grid, Typography } from '@mui/material';

const PoolAssetDataStyle = {
	color: 'var(--Sub-text-2, #8794C2)',
	fontSize: '0.75rem',
	lineHeight: '0rem',
	letterSpacing: '-0.015rem',
};
const PoolAssetHeaderStyle = {
	marginBottom: '0.3rem',
	fontSize: '0.8rem',
	fontWeight: 'bold',
	// fontWeight: '700',
};
const Dashboard = () => {
	return (
		<>
			<Grid container>
				<Grid item>
					<Card>
						<CardContent>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<Typography
										component="paragraph"
										sx={PoolAssetHeaderStyle}
									>
										₹ 50Cr
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										AUM
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography sx={PoolAssetHeaderStyle}>
										₹ 1Cr
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										Total Outstanding Amount
									</Typography>
								</Grid>
								<Grid item xs={6} mt="1rem">
									<Typography sx={PoolAssetHeaderStyle}>
										10,000
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										Total Customers
									</Typography>
								</Grid>

								<Grid item xs={6} mt="1rem">
									<Typography sx={PoolAssetHeaderStyle}>
										7,000
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										Total Disbursement
									</Typography>
								</Grid>

								<Grid item xs={6} mt="1rem">
									<Typography sx={PoolAssetHeaderStyle}>
										28
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										No. of States
									</Typography>
								</Grid>

								<Grid item xs={6} mt="1rem">
									<Typography sx={PoolAssetHeaderStyle}>
										08
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										No. of Districts
									</Typography>
								</Grid>

								<Grid item xs={6} mt="1rem">
									<Typography sx={PoolAssetHeaderStyle}>
										25
									</Typography>
									<Typography sx={PoolAssetDataStyle}>
										No. of Branches
									</Typography>
								</Grid>

								<Grid item xs={6} mt="1rem">
									<Typography sx={PoolAssetHeaderStyle}>
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
			</Grid>
		</>
	);
};
export default Dashboard;
