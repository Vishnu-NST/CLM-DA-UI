import FullPieChart from '@/components/FullPieChart';
import GeographyData from '@/components/GeographyData';
import LineChartComponent from '@/components/LineChart';
import LoanCyclePieChart from '@/components/LoanCyclePieChart';
import { Card, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const BankDashboard = () => {
	const aumStyles = {
		color: 'var(--Sub-text-2, #8794C2)',
		fontFamily: 'PoppinsReg',
		fontSize: '0.75rem',
	};
	const aumTargetStyles = {
		color: 'var(--Extra, #00B85E)',
		fontSize: '1.2rem',
		fontFamily: 'Poppins',
		fontWeight: 600,
	};
	return (
		<>
			<Grid container>
				<Grid item sm={7}>
					<Card>
						<Grid item display="flex" xs={12} flexDirection="row">
							<Grid item xs={4} display="flex" flexDirection="column">
								<Typography
									style={{
										color: 'var(--TEXT1, #1B1B1B)',
										fontFamily: 'Poppins',
										fontSize: '2rem',
										fontStyle: 'normal',
										fontWeight: 600,
									}}
								>
									₹50Cr
								</Typography>
								<Typography sx={aumStyles}>AUM Target</Typography>
							</Grid>
							<Grid
								item
								xs={1.5}
								display="flex"
								flexDirection="column"
							>
								<Typography sx={aumTargetStyles}>+ ₹45cr</Typography>
								<Typography sx={aumStyles}>Total AUM</Typography>
							</Grid>
							<Grid
								item
								xs={2.5}
								display="flex"
								flexDirection="column"
							>
								<Typography sx={aumTargetStyles}>+ ₹35cr</Typography>
								<Typography sx={aumStyles}>
									Recent Added AUM
								</Typography>
							</Grid>
							<Grid item xs={2} display="flex" flexDirection="column">
								<Typography sx={aumTargetStyles}>+ ₹10cr</Typography>
								<Typography sx={aumStyles}>Past AUM</Typography>
							</Grid>
						</Grid>
						<LineChartComponent />
					</Card>
				</Grid>
				<Grid item sm={5} width>
					<Box
						sx={{
							backgroundColor: '#F8F9FB',
							borderRadius: '8px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<FullPieChart />
					</Box>
				</Grid>
			</Grid>
			<Divider />
			&nbsp; &nbsp; &nbsp;
			<Grid container spacing={5}>
				<Grid item sm={6}>
					<Card>
						<LoanCyclePieChart />
					</Card>
				</Grid>
				<Grid item sm={6}>
					<Card>
						<GeographyData />
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default BankDashboard;
