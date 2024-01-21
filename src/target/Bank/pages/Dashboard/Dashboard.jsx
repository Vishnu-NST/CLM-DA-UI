import FullPieChart from '@/components/FullPieChart';
import GeographyData from '@/components/GeographyData';
import LineChartComponent from '@/components/LineChart';
import LoanCyclePieChart from '@/components/LoanCyclePieChart';
import { useAppState } from '@/store/useAppState';

import { Card, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const BankDashboard = () => {
	// const aumStyles = {
	// 	color: 'var(--Sub-text-2, #8794C2)',
	// 	fontFamily: 'PoppinsReg',
	// 	fontSize: '0.75rem',
	// };
	// const aumTargetStyles = {
	// 	color: 'var(--Extra, #00B85E)',
	// 	fontSize: '1.2rem',
	// 	fontFamily: 'Poppins',
	// 	fontWeight: 600,
	// };
	const app = useAppState();
	console.log(app);
	return (
		<>
			<Grid container>
				<Grid item sm={7}>
					<Card>
						<Grid item display="flex" xs={12} flexDirection="row" ml={7}>
							<Card display="flex" flexDirection="row">
								<Typography>40</Typography>
								<Typography>Total AUM</Typography>
							</Card>
							<Card>
								<Typography>20</Typography>
								<Typography>Recent Added AUM</Typography>
							</Card>
						</Grid>
						<Typography></Typography>
						<LineChartComponent showLegend={false} />
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
						<GeographyData customWidth="90%" />
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default BankDashboard;
