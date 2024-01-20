import { AppBar, Card, Grid, Typography } from '@mui/material';
import CollectivePoolData from '@/components/CollectivePoolData';
import GeographyData from '@/components/GeographyData';
import LineChart from '@/components/LineChart';
import LoanCyclePieChart from '@/components/LoanCyclePieChart';
import { useAppState } from '@/store/useAppState';

const BankDashboard = () => {
	const app = useAppState();
	console.log(app);
	return (
		<>
			<AppBar
				elevation={0}
				sx={{
					width: '95%',
					height: '8%',
					backgroundColor: '#fff',
					mt: '1.5rem',
					mb: '1.5rem',
				}}
			>
				<Typography
					variant="h6"
					component="div"
					sx={{
						gap: '5px',
						ml: '2rem',
						fontWeight: '600',
						fontSize: '22px',
						color: '#1B1B1B',
					}}
				>
					Dashboard
				</Typography>
			</AppBar>
			<Grid container direction="column" height="80vh">
				<Grid item container height="60%" width="90%">
					<Grid item xs={12}>
						<Card>
							<LineChart />
						</Card>
					</Grid>
				</Grid>

				<Grid item container height="40%" width="90%">
					<Grid item xs={4}>
						<Card>
							<CollectivePoolData />
						</Card>
					</Grid>
					<LoanCyclePieChart />
					<Card>
						<GeographyData />
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default BankDashboard;
