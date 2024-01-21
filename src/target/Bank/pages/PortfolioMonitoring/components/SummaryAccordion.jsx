import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Card,
	Divider,
	Grid,
	Typography,
} from '@mui/material';
import TargetAmount from '@/assets/svg/TargetAmount';
import CollectedAmount from '@/assets/svg/CollectedAmount';
import useGetOverallLoanPoolSummary from '@/store/useGetOverallLoanPoolSummary';

export default function SummaryAccordion() {

	const summary = useGetOverallLoanPoolSummary();
	
	const summaryData = summary?.data?.data;
	
	return (
		<Accordion
			elevation={0}
			sx={{
				'&:before': { display: 'none' },
				borderRadius: '0px',
				width: '97%',
			}}
			defaultExpanded
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon sx={{ color: '#8794C2' }} />}
			>
				<Typography
					sx={{
						color: '#1B1B1B',
						fontFamily: 'Poppins, sans-serif',
						fontSize: '1.25rem',
						fontWeight: 600,
					}}
				>
					Summary
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Grid container spacing={0.5}>
					<Grid item xs={2.75}>
						<Card
							elevation={0}
							sx={{ border: '1px solid #D9D9D9', height: '7.2rem' }}
						>
							<Typography
								align="left"
								sx={{
									mt: 1,
									ml: 1,
									mb: 0.5,
									fontFamily: 'Poppins, sans-serif',
									fontSize: '0.75rem',
									fontWeight: 400,
									color: '#707EAE',
								}}
							>
								OVERALL COLLECTION
							</Typography>
							<Divider />
							<Grid container>
								<Grid item xs={6}>
									<Card
										align="left"
										elevation={0}
										sx={{
											border: '1px solid #D9D9D9',
											borderRadius: '0px',
											height: '4.25rem',
										}}
									>
										<div
											style={{
												display: 'flex',
												direction: 'row',
											}}
										>
											<Box sx={{ ml: 1 }}>
												<TargetAmount />
											</Box>
											<Typography
												sx={{
													mt: 1,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.75rem',
													fontWeight: 400,
													color: '#838383',
												}}
											>
												Target Amount
											</Typography>
										</div>
										<Typography
											sx={{
												mt: 1,
												ml: 6,
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 400,
												color: '#000000',
											}}
										>
											₹ {summaryData?.overall?.collected.toLocaleString("en-IN")}
										</Typography>
									</Card>
								</Grid>
								<Grid item xs={6}>
									<Card
										align="left"
										elevation={0}
										sx={{
											border: '1px solid #D9D9D9',
											borderRadius: '0px',
											height: '4.25rem',
										}}
									>
										<div
											style={{
												display: 'flex',
												direction: 'row',
											}}
										>
											<Box sx={{ ml: 1 }}>
												<CollectedAmount />
											</Box>
											<Typography
												sx={{
													mt: 1,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.75rem',
													fontWeight: 400,
													color: '#838383',
												}}
											>
												Collected Amount
											</Typography>
										</div>
										<Typography
											sx={{
												mt: 1,
												ml: 6,
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 400,
												color: '#000000',
											}}
										>
											₹ {summaryData?.overall?.target.toLocaleString("en-IN")}
										</Typography>
									</Card>
								</Grid>
							</Grid>
							<Card
								sx={{
									backgroundColor: '#8794C233',
									height: '1.8rem',
								}}
							>
								<Typography
									sx={{
										mt: 0.2,
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									The stats represent overall from beginning
								</Typography>
								<br />
							</Card>
						</Card>
					</Grid>
					<Grid item xs={0.25}></Grid>
					<Grid item xs={2.75}>
						<Card
							elevation={0}
							sx={{ border: '1px solid #D9D9D9', height: '7.2rem' }}
						>
							<Typography
								align="left"
								sx={{
									mt: 1,
									ml: 1,
									mb: 0.5,
									fontFamily: 'Poppin, sans-serif',
									fontSize: '0.75rem',
									fontWeight: 400,
									color: '#707EAE',
								}}
							>
								REGULAR COLLECTION
							</Typography>
							<Divider />
							<Grid container>
								<Grid item xs={6}>
									<Card
										align="left"
										elevation={0}
										sx={{
											border: '1px solid #D9D9D9',
											borderRadius: '0px',
											height: '4.25rem',
										}}
									>
										<div
											style={{
												display: 'flex',
												direction: 'row',
											}}
										>
											<Box sx={{ ml: 1 }}>
												<TargetAmount />
											</Box>
											<Typography
												sx={{
													mt: 1,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.75rem',
													fontWeight: 400,
													color: '#838383',
												}}
											>
												Target Amount
											</Typography>
										</div>
										<Typography
											sx={{
												mt: 1,
												ml: 6,
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 400,
												color: '#000000',
											}}
										>
											₹ {summaryData?.regular?.target.toLocaleString("en-IN")}
										</Typography>
									</Card>
								</Grid>
								<Grid item xs={6}>
									<Card
										align="left"
										elevation={0}
										sx={{
											border: '1px solid #D9D9D9',
											borderRadius: '0px',
											height: '4.25rem',
										}}
									>
										<div
											style={{
												display: 'flex',
												direction: 'row',
											}}
										>
											<Box sx={{ ml: 1 }}>
												<CollectedAmount />
											</Box>
											<Typography
												sx={{
													mt: 1,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.75rem',
													fontWeight: 400,
													color: '#838383',
												}}
											>
												Collected Amount
											</Typography>
										</div>
										<Typography
											sx={{
												mt: 1,
												ml: 6,
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 400,
												color: '#000000',
											}}
										>
											₹ {summaryData?.regular?.collected.toLocaleString("en-IN")}
										</Typography>
									</Card>
								</Grid>
							</Grid>
							<Card
								sx={{
									backgroundColor: '#00B85E33',
									height: '1.8rem',
								}}
							>
								<Typography
									sx={{
										mt: 0.2,
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									The stats represent the current month
								</Typography>
								<br />
							</Card>
						</Card>
					</Grid>
					<Grid item xs={0.25}></Grid>
					<Grid item xs={2.75}>
						<Card
							elevation={0}
							sx={{ border: '1px solid #D9D9D9', height: '7.2rem' }}
						>
							<Typography
								align="left"
								sx={{
									mt: 1,
									ml: 1,
									mb: 0.5,
									fontFamily: 'Poppin, sans-serif',
									fontSize: '0.75rem',
									fontWeight: 400,
									color: '#707EAE',
								}}
							>
								SMA 0 TO SMA 2
							</Typography>
							<Divider />
							<Grid container>
								<Grid item xs={6}>
									<Card
										align="left"
										elevation={0}
										sx={{
											border: '1px solid #D9D9D9',
											borderRadius: '0px',
											height: '4.25rem',
										}}
									>
										<div
											style={{
												display: 'flex',
												direction: 'row',
											}}
										>
											<Box sx={{ ml: 1 }}>
												<TargetAmount />
											</Box>
											<Typography
												sx={{
													mt: 1,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.75rem',
													fontWeight: 400,
													color: '#838383',
												}}
											>
												Target Amount
											</Typography>
										</div>
										<Typography
											sx={{
												mt: 1,
												ml: 6,
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 400,
												color: '#000000',
											}}
										>
											₹ {summaryData?.sma?.target.toLocaleString("en-IN")}
										</Typography>
									</Card>
								</Grid>
								<Grid item xs={6}>
									<Card
										align="left"
										elevation={0}
										sx={{
											border: '1px solid #D9D9D9',
											borderRadius: '0px',
											height: '4.25rem',
										}}
									>
										<div
											style={{
												display: 'flex',
												direction: 'row',
											}}
										>
											<Box sx={{ ml: 1 }}>
												<CollectedAmount />
											</Box>
											<Typography
												sx={{
													mt: 1,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.75rem',
													fontWeight: 400,
													color: '#838383',
												}}
											>
												Collected Amount
											</Typography>
										</div>
										<Typography
											sx={{
												mt: 1,
												ml: 6,
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 400,
												color: '#000000',
											}}
										>
											₹ {summaryData?.sma?.collected.toLocaleString("en-IN")}
										</Typography>
									</Card>
								</Grid>
							</Grid>
							<Card
								sx={{
									backgroundColor: '#F7873633',
									height: '1.8rem',
								}}
							>
								<Typography
									sx={{
										mt: 0.2,
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									The stats includes SMA 0, SMA 1 & SMA 2
								</Typography>
								<br />
							</Card>
						</Card>
					</Grid>
					<Grid item xs={0.25}></Grid>
					<Grid item xs={2.75}>
						<Card
							elevation={0}
							sx={{ border: '1px solid #D9D9D9', height: '7.2rem' }}
						>
							<Typography
								align="left"
								sx={{
									mt: 1,
									ml: 1,
									mb: 0.5,
									fontFamily: 'Poppin, sans-serif',
									fontSize: '0.75rem',
									fontWeight: 400,
									color: '#707EAE',
								}}
							>
								NPA
							</Typography>
							<Divider />
							<Grid container>
								<Grid item xs={6}>
									<Card
										align="left"
										elevation={0}
										sx={{
											border: '1px solid #D9D9D9',
											borderRadius: '0px',
											height: '4.25rem',
										}}
									>
										<div
											style={{
												display: 'flex',
												direction: 'row',
											}}
										>
											<Box sx={{ ml: 1 }}>
												<TargetAmount />
											</Box>
											<Typography
												sx={{
													mt: 1,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.75rem',
													fontWeight: 400,
													color: '#838383',
												}}
											>
												Target Amount
											</Typography>
										</div>
										<Typography
											sx={{
												mt: 1,
												ml: 6,
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 400,
												color: '#000000',
											}}
										>
											₹ {summaryData?.npa?.target.toLocaleString("en-IN")}
										</Typography>
									</Card>
								</Grid>
								<Grid item xs={6}>
									<Card
										align="left"
										elevation={0}
										sx={{
											border: '1px solid #D9D9D9',
											borderRadius: '0px',
											height: '4.25rem',
										}}
									>
										<div
											style={{
												display: 'flex',
												direction: 'row',
											}}
										>
											<Box sx={{ ml: 1 }}>
												<CollectedAmount />
											</Box>
											<Typography
												sx={{
													mt: 1,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.75rem',
													fontWeight: 400,
													color: '#838383',
												}}
											>
												Collected Amount
											</Typography>
										</div>
										<Typography
											sx={{
												mt: 1,
												ml: 6,
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 400,
												color: '#000000',
											}}
										>
											₹ {summaryData?.npa?.collected.toLocaleString("en-IN")}
										</Typography>
									</Card>
								</Grid>
							</Grid>
							<Card
								sx={{
									backgroundColor: '#C4161C33',
									height: '1.8rem',
								}}
							>
								<Typography
									sx={{
										mt: 0.2,
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									The stats includes after SMA2(NPA)
								</Typography>
								<br />
							</Card>
						</Card>
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
}
