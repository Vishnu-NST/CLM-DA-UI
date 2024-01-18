import FullCollection from '@/assets/svg/FullCollection';
import NoCollection from '@/assets/svg/NoCollection';
import PartialCollection from '@/assets/svg/PartialCollection';
import HeaderComp from '@/components/HeaderComponent';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
	Box,
	Card,
	Grid,
	InputAdornment,
	Pagination,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import SummaryAccordion from './components/SummaryAccordion';
import CustomerList from './CustomerList';

export default function PortfolioMonitoring() {
	const [toggle, setToggle] = useState(true);
	return (
		<>
			{toggle === true ? (
				<>
					<HeaderComp title={'Portfolio Monitoring'} />
					<Box
						align="center"
						sx={{ backgroundColor: '#F8F9FB', height: '100%' }}
					>
						<Grid container spacing={0.5} sx={{ mt: 1.5 }}>
							<Grid item xs={6} align="left" sx={{ ml: 2 }}>
								<TextField
									sx={{
										backgroundColor: '#FFFFFF',
										width: '26.0625rem',
									}}
									label="Search Pool Name"
									color="error"
									InputProps={{
										endAdornment: (
											<InputAdornment position="start">
												<SearchOutlinedIcon />
											</InputAdornment>
										),
									}}
									variant="outlined"
								/>
							</Grid>
							<Grid item xs={2.5}></Grid>
							<Grid item xs={3} align="right">
								<Pagination
									sx={{ mt: 1.5 }}
									count={11}
									defaultPage={1}
									siblingCount={0}
								/>
							</Grid>
						</Grid>
						<br />
						<SummaryAccordion />
						<br />
						<Card
							align="left"
							elevation={0}
							sx={{ backgroundColor: '#F8F9FB', ml: 0, width: '97%' }}
						>
							<Grid container spacing={0.5}>
								<Grid item xs={2.5}>
									<Typography
										sx={{
											mt: 1,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '1rem',
											fontWeight: 400,
											color: '#8794C2',
										}}
									>
										Pool Name
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 1,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '1rem',
											fontWeight: 400,
											color: '#8794C2',
										}}
									>
										NBFC Name
									</Typography>
								</Grid>
								<Grid item xs={1.5}>
									<Typography
										sx={{
											mt: 1,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '1rem',
											fontWeight: 400,
											color: '#8794C2',
										}}
									>
										Product Name
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 1,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '1rem',
											fontWeight: 400,
											color: '#8794C2',
										}}
									>
										Collection Target
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 1,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '1rem',
											fontWeight: 400,
											color: '#8794C2',
										}}
									>
										Collection Status
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 1,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '1rem',
											fontWeight: 400,
											color: '#8794C2',
										}}
									>
										Principal Outstanding
									</Typography>
								</Grid>
							</Grid>
						</Card>
						<Card
							align="left"
							elevation={0}
							sx={{
								backgroundColor: '#FFFFFF',
								ml: 0,
								mt: 3,
								mb: 3,
								borderRadius: '0.9375rem',
								height: '4rem',
								width: '97%',
							}}
						>
							<Grid container spacing={0.5}>
								<Grid item xs={2.5}>
									<Typography
										sx={{
											mt: 2,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										MUTH-JLG April 23-1
									</Typography>
									<Typography
										sx={{
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 600,
											color: '#C4161C',
											cursor: 'pointer',
										}}
										onClick={() => setToggle(false)}
									>
										<u>View Details</u>
									</Typography>
								</Grid>
								<Grid item xs={2} sx={{ mt: 2 }}>
									<Typography
										align="center"
										sx={{
											mt: 1.8,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#8794C2',
											backgroundColor: '#8794C233',
											pt: 1,
											pb: 1,
											borderRadius: '3.125rem',
											height: '2rem',
											width: '70%',
										}}
									>
										NBFC LOGO
									</Typography>
								</Grid>
								<Grid item xs={1.5}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										JLG
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 60,000
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Grid container>
										<Grid
											item
											xs={2.5}
											align="right"
											sx={{ mt: 5.5 }}
										>
											<FullCollection />
										</Grid>
										<Grid item xs={9.5}>
											<Typography
												sx={{
													mt: 5.5,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												₹ 60,000
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 0
									</Typography>
								</Grid>
							</Grid>
						</Card>
						<Card
							align="left"
							elevation={0}
							sx={{
								backgroundColor: '#FFFFFF',
								ml: 0,
								mt: 3,
								mb: 3,
								borderRadius: '0.9375rem',
								height: '4rem',
								width: '97%',
							}}
						>
							<Grid container spacing={0.5}>
								<Grid item xs={2.5}>
									<Typography
										sx={{
											mt: 2,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										MUTH-JLG April 23-1
									</Typography>
									<Typography
										sx={{
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 600,
											color: '#C4161C',
											cursor: 'pointer',
										}}
										onClick={() => setToggle(false)}
									>
										<u>View Details</u>
									</Typography>
								</Grid>
								<Grid item xs={2} sx={{ mt: 2 }}>
									<Typography
										align="center"
										sx={{
											mt: 1.8,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#8794C2',
											backgroundColor: '#8794C233',
											pt: 1,
											pb: 1,
											borderRadius: '3.125rem',
											height: '2rem',
											width: '70%',
										}}
									>
										NBFC LOGO
									</Typography>
								</Grid>
								<Grid item xs={1.5}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										JLG
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 60,000
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Grid container>
										<Grid
											item
											xs={2.5}
											align="right"
											sx={{ mt: 5.5 }}
										>
											<PartialCollection />
										</Grid>
										<Grid item xs={9.5}>
											<Typography
												sx={{
													mt: 5.5,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												₹ 60,000
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 20,000
									</Typography>
								</Grid>
							</Grid>
						</Card>
						<Card
							align="left"
							elevation={0}
							sx={{
								backgroundColor: '#FFFFFF',
								ml: 0,
								mt: 3,
								mb: 3,
								borderRadius: '0.9375rem',
								height: '4rem',
								width: '97%',
							}}
						>
							<Grid container spacing={0.5}>
								<Grid item xs={2.5}>
									<Typography
										sx={{
											mt: 2,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										MUTH-JLG April 23-1
									</Typography>
									<Typography
										sx={{
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 600,
											color: '#C4161C',
											cursor: 'pointer',
										}}
										onClick={() => setToggle(false)}
									>
										<u>View Details</u>
									</Typography>
								</Grid>
								<Grid item xs={2} sx={{ mt: 2 }}>
									<Typography
										align="center"
										sx={{
											mt: 1.8,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#8794C2',
											backgroundColor: '#8794C233',
											pt: 1,
											pb: 1,
											borderRadius: '3.125rem',
											height: '2rem',
											width: '70%',
										}}
									>
										NBFC LOGO
									</Typography>
								</Grid>
								<Grid item xs={1.5}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										JLG
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 60,000
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Grid container>
										<Grid
											item
											xs={2.5}
											align="right"
											sx={{ mt: 5.5 }}
										>
											<NoCollection />
										</Grid>
										<Grid item xs={9.5}>
											<Typography
												sx={{
													mt: 5.5,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												₹ 0
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 60,000
									</Typography>
								</Grid>
							</Grid>
						</Card>
						<Card
							align="left"
							elevation={0}
							sx={{
								backgroundColor: '#FFFFFF',
								ml: 0,
								mt: 3,
								mb: 3,
								borderRadius: '0.9375rem',
								height: '4rem',
								width: '97%',
							}}
						>
							<Grid container spacing={0.5}>
								<Grid item xs={2.5}>
									<Typography
										sx={{
											mt: 2,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										MUTH-JLG April 23-1
									</Typography>
									<Typography
										sx={{
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 600,
											color: '#C4161C',
											cursor: 'pointer',
										}}
										onClick={() => setToggle(false)}
									>
										<u>View Details</u>
									</Typography>
								</Grid>
								<Grid item xs={2} sx={{ mt: 2 }}>
									<Typography
										align="center"
										sx={{
											mt: 1.8,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#8794C2',
											backgroundColor: '#8794C233',
											pt: 1,
											pb: 1,
											borderRadius: '3.125rem',
											height: '2rem',
											width: '70%',
										}}
									>
										NBFC LOGO
									</Typography>
								</Grid>
								<Grid item xs={1.5}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										JLG
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 60,000
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Grid container>
										<Grid
											item
											xs={2.5}
											align="right"
											sx={{ mt: 5.5 }}
										>
											<FullCollection />
										</Grid>
										<Grid item xs={9.5}>
											<Typography
												sx={{
													mt: 5.5,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												₹ 60,000
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 0
									</Typography>
								</Grid>
							</Grid>
						</Card>
						<Card
							align="left"
							elevation={0}
							sx={{
								backgroundColor: '#FFFFFF',
								ml: 0,
								mt: 3,
								mb: 3,
								borderRadius: '0.9375rem',
								height: '4rem',
								width: '97%',
							}}
						>
							<Grid container spacing={0.5}>
								<Grid item xs={2.5}>
									<Typography
										sx={{
											mt: 2,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										MUTH-JLG April 23-1
									</Typography>
									<Typography
										sx={{
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 600,
											color: '#C4161C',
											cursor: 'pointer',
										}}
										onClick={() => setToggle(false)}
									>
										<u>View Details</u>
									</Typography>
								</Grid>
								<Grid item xs={2} sx={{ mt: 2 }}>
									<Typography
										align="center"
										sx={{
											mt: 1.8,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#8794C2',
											backgroundColor: '#8794C233',
											pt: 1,
											pb: 1,
											borderRadius: '3.125rem',
											height: '2rem',
											width: '70%',
										}}
									>
										NBFC LOGO
									</Typography>
								</Grid>
								<Grid item xs={1.5}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										JLG
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 60,000
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Grid container>
										<Grid
											item
											xs={2.5}
											align="right"
											sx={{ mt: 5.5 }}
										>
											<PartialCollection />
										</Grid>
										<Grid item xs={9.5}>
											<Typography
												sx={{
													mt: 5.5,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												₹ 60,000
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 20,000
									</Typography>
								</Grid>
							</Grid>
						</Card>
						<Card
							align="left"
							elevation={0}
							sx={{
								backgroundColor: '#FFFFFF',
								ml: 0,
								mt: 3,
								mb: 3,
								borderRadius: '0.9375rem',
								height: '4rem',
								width: '97%',
							}}
						>
							<Grid container spacing={0.5}>
								<Grid item xs={2.5}>
									<Typography
										sx={{
											mt: 2,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										MUTH-JLG April 23-1
									</Typography>
									<Typography
										sx={{
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 600,
											color: '#C4161C',
											cursor: 'pointer',
										}}
										onClick={() => setToggle(false)}
									>
										<u>View Details</u>
									</Typography>
								</Grid>
								<Grid item xs={2} sx={{ mt: 2 }}>
									<Typography
										align="center"
										sx={{
											mt: 1.8,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#8794C2',
											backgroundColor: '#8794C233',
											pt: 1,
											pb: 1,
											borderRadius: '3.125rem',
											height: '2rem',
											width: '70%',
										}}
									>
										NBFC LOGO
									</Typography>
								</Grid>
								<Grid item xs={1.5}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										JLG
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 60,000
									</Typography>
								</Grid>
								<Grid item xs={2}>
									<Grid container>
										<Grid
											item
											xs={2.5}
											align="right"
											sx={{ mt: 5.5 }}
										>
											<NoCollection />
										</Grid>
										<Grid item xs={9.5}>
											<Typography
												sx={{
													mt: 5.5,
													ml: 1,
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												₹ 0
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={2}>
									<Typography
										sx={{
											mt: 5.5,
											ml: 2,
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
											fontWeight: 500,
											color: '#1B1B1B',
										}}
									>
										₹ 60,000
									</Typography>
								</Grid>
							</Grid>
						</Card>
					</Box>
				</>
			) : (
				<CustomerList />
			)}
		</>
	);
}
