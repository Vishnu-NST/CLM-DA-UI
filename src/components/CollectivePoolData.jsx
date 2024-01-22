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
const CollectivePoolData = (props) => {
	const data = props.data;
	return (
		<>
			<Grid container>
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Typography
									component="paragraph"
									sx={PoolAssetHeaderStyle}
								>
									₹ {data.aum.value} {data.aum.unit}
								</Typography>
								<Typography sx={PoolAssetDataStyle}>AUM</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography sx={PoolAssetHeaderStyle}>
									₹ {data.totalOutstandingAmount.value}{' '}
									{data.totalOutstandingAmount.unit}
								</Typography>
								<Typography sx={PoolAssetDataStyle}>
									Total Outstanding Amount
								</Typography>
							</Grid>
							<Grid item xs={6} mt="1rem">
								<Typography sx={PoolAssetHeaderStyle}>
									{data.totalCustomers}
								</Typography>
								<Typography sx={PoolAssetDataStyle}>
									Total Customers
								</Typography>
							</Grid>
							<Grid item xs={6} mt="1rem">
								<Typography sx={PoolAssetHeaderStyle}>
									{data.totalDisbursementAmount.value}{' '}
									{data.totalDisbursementAmount.unit}
								</Typography>
								<Typography sx={PoolAssetDataStyle}>
									Total Disbursement
								</Typography>
							</Grid>
							<Grid item xs={6} mt="1rem">
								<Typography sx={PoolAssetHeaderStyle}>
									{data.no_of_state}
								</Typography>
								<Typography sx={PoolAssetDataStyle}>
									No. of States
								</Typography>
							</Grid>
							<Grid item xs={6} mt="1rem">
								<Typography sx={PoolAssetHeaderStyle}>
									{data.no_of_district}
								</Typography>
								<Typography sx={PoolAssetDataStyle}>
									No. of Districts
								</Typography>
							</Grid>
							<Grid item xs={6} mt="1rem">
								<Typography sx={PoolAssetHeaderStyle}>
									{data.no_of_branch}
								</Typography>
								<Typography sx={PoolAssetDataStyle}>
									No. of Branches
								</Typography>
							</Grid>
							<Grid item xs={6} mt="1rem">
								<Typography sx={PoolAssetHeaderStyle}>
									{data.averageIrr.value} {data.averageIrr.unit}
								</Typography>
								<Typography sx={PoolAssetDataStyle}>
									Average IRR
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</>
	);
};
export default CollectivePoolData;
