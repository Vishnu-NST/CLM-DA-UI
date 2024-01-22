import CollectivePoolData from '@/components/CollectivePoolData';
import FullPieChart from '@/components/FullPieChart';
import GeographyData from '@/components/GeographyData';
import LineChartComponent from '@/components/LineChart';
import LoanCyclePieChart from '@/components/LoanCyclePieChart';
import { Card, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppState } from '@/store/useAppState';
import { useEffect, useState } from 'react';

const Dashboard = () => {
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
	const [dashboardData, setDashboardData] = useState(null);
	const reportaumData = dashboardData?.reportAUM;
	const aumTarget = reportaumData?.aumTarget;
	const totalAum = reportaumData?.totalAum;
	const recentAddedAum = reportaumData?.recentAddedAum;
	const pastAum = reportaumData?.pastAum;
	const lineGraphData = reportaumData?.graph;
	const loanOverviewData = dashboardData?.loanOverview;
	const loanCycleData = dashboardData?.loanCycle;
	const collectivePoolData = dashboardData?.['left-bottom-card'];

	const app = useAppState();
	// const nbfc_id = app.user.nbfc_id && 123;
	const nbfc_id = 123;
	console.log(app);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://52.66.247.118:30203/dashboard/nbfc/?nbfc_id=${nbfc_id}`,
				);
				const result = await response.json();
				setDashboardData(result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [nbfc_id]);

	return dashboardData ? (
		<>
			<Grid container>
				<Grid item sm={7}>
					<Card>
						<Grid
							item
							display="flex"
							xs={12}
							flexDirection="row"
							ml={12}
							mt={12}
						>
							<Grid
								item
								xs={4}
								display="flex"
								flexDirection="column"
								sx={{ marginTop: '-1rem' }}
							>
								<Typography
									style={{
										color: 'var(--TEXT1, #1B1B1B)',
										fontFamily: 'Poppins',
										fontSize: '2rem',
										fontStyle: 'normal',
										fontWeight: 600,
									}}
								>
									₹{aumTarget.value}
									{aumTarget.unit.toLowerCase()}
								</Typography>
								<Typography sx={aumStyles}>AUM Target</Typography>
							</Grid>
							<Grid
								item
								xs={1.5}
								display="flex"
								flexDirection="column"
							>
								<Typography sx={aumTargetStyles}>
									+₹{totalAum.value}
									{totalAum.unit.toLowerCase()}
								</Typography>
								<Typography sx={aumStyles}>Total AUM</Typography>
							</Grid>
							<Grid
								item
								xs={2.5}
								display="flex"
								flexDirection="column"
							>
								<Typography sx={aumTargetStyles}>
									+ ₹{recentAddedAum.value}
									{recentAddedAum.unit.toLowerCase()}
								</Typography>
								<Typography sx={aumStyles}>
									Recent Added AUM
								</Typography>
							</Grid>
							<Grid item xs={2} display="flex" flexDirection="column">
								<Typography sx={aumTargetStyles}>
									+ ₹{pastAum.value}
									{pastAum.unit.toLowerCase()}
								</Typography>
								<Typography sx={aumStyles}>Past AUM</Typography>
							</Grid>
						</Grid>
						<LineChartComponent
							showLegend={true}
							data={lineGraphData}
							yAxisUnitSuffix={lineGraphData[0].unit}
						/>
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
						<FullPieChart data={loanOverviewData} />
					</Box>
				</Grid>
			</Grid>
			<Divider />
			&nbsp; &nbsp; &nbsp;
			<Grid container spacing={3}>
				<Grid item sm={3.5}>
					<Card>
						<CollectivePoolData data={collectivePoolData} />
					</Card>
				</Grid>
				<Grid item sm={3.5}>
					<Card>
						<LoanCyclePieChart data={loanCycleData} />
					</Card>
				</Grid>
				<Grid item sm={5}>
					<GeographyData />
				</Grid>
			</Grid>
		</>
	) : null;
};
export default Dashboard;
