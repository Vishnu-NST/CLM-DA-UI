import { Grid, Typography } from '@mui/material';
import CustomButton from '@/NBFC/components/CustomButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import NbfcLogo from '@/NBFC/assets/svg/NbfcLogo';
import StarProfileIcon from '@/NBFC/assets/svg/StarProfileIcon';
import EditProfileIcon from '@/NBFC/assets/svg/EditProfileIcon';

const customButtonStyle = {
	borderRadius: '7px',
	padding: '0.5rem 2.5rem',
	color: '#FFFFFF',
	backgroundColor: '#C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
	fontWeight: '500',
};

const containerStyle = {
	display: 'flex',
	height: '100vh', // Set the height as needed
};

const div1Style = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItem: 'space-between',
	flexDirection: 'column',
	margin: '1rem',
	width: '25%',
	backgroundColor: '#F8F9FB', // Adjust background color as needed
	padding: '2rem',
	boxSizing: 'border-box',
	borderRadius: '15px',
	border: '1px solid rgba(135, 148, 194, 0.20)',
};

const div2And3ContainerStyle = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column', // Stack div2 and div3 vertically
};

const div2Style = {
	display: 'flex',
	justifyContent: 'space-between',
	flexDirection: 'column',
	margin: '1rem 0px 1rem',
	flex: 0.4,
	padding: '20px',
	boxSizing: 'border-box',
	backgroundColor: '#F8F9FB',
	borderRadius: '15px',
};

const div3Style = {
	display: 'flex',
	justifyContent: 'space-between',
	flexDirection: 'column',
	margin: '0rem 0px 1rem',
	flex: 1,
	padding: '20px',
	boxSizing: 'border-box',
	border: '1px solid rgba(135, 148, 194, 0.20)',
	backgroundColor: '#FFF',
	borderRadius: '15px',
};
const googleMapContainerStyle = {
	width: '100%',
	height: '80%',
};

const center = {
	lat: 37.7749, // Example latitude
	lng: -122.4194, // Example longitude
};
const bottomDiv = {
	//display:"grid",
	margin: '1rem',
	width: '97%',
	// background:'blue'
	flex: 1,
	padding: '20px',
	boxSizing: 'border-box',
	backgroundColor: 'rgb(248, 249, 251)',
	borderRadius: '15px',
};
export const NbfcProfile = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="card-block">
				<div className="loan-pool-form-block">
					<Grid sx={{ display: 'flex', justifyContent: 'end' }}>
						<CustomButton
							buttonDisabled={false}
							customStyle={customButtonStyle}
							onClick={() => navigate('/user-management')}
						>
							<EditProfileIcon /> &nbsp; Edit
						</CustomButton>
					</Grid>
					<div style={containerStyle}>
						<div style={div1Style}>
							<div style={{ flex: 1 }}>
								<div
									style={{
										backgroundColor: '#FFF',
										display: 'flex',
										justifyContent: 'center',
										alignContent: 'center',
										padding: '3rem 0rem',
										borderRadius: '15px',
										border: '1.65px solid rgba(135, 148, 194, 0.20)',
									}}
								>
									<div style={{ display: 'flex' }}>
										<NbfcLogo />
									</div>
									<div
										style={{
											marginTop: '0.3rem',
											paddingLeft: '0.5rem',
											fontWeight: '600',
											fontSize: '1.2rem',
										}}
									>
										NBFC LOGO
									</div>
								</div>
							</div>
							<div style={{ flex: 1, margin: '2rem 0px 1rem' }}>
								<div style={{ marginBottom: '2rem' }}>
									<Typography
										sx={{
											fontSize: '1.2rem',
											fontWeight: '550',
										}}
									>
										NBFC Name
									</Typography>
								</div>
								<div style={{ margin: '1rem 0px' }}>
									<div>
										<Typography
											sx={{
												fontSize: '0.76rem',
												fontWeight: '600',
											}}
										>
											test@gmail.com
										</Typography>
									</div>
									<div>
										<Typography
											sx={{
												fontSize: '0.6rem',
												fontWeight: '400',
												color: '#8794C2',
											}}
										>
											Email ID
										</Typography>
									</div>
								</div>
								<div style={{ margin: '1rem 0px' }}>
									<div>
										<Typography
											sx={{
												fontSize: '0.76rem',
												fontWeight: '600',
											}}
										>
											18277700047693
										</Typography>
									</div>
									<div>
										{' '}
										<Typography
											sx={{
												fontSize: '0.6rem',
												fontWeight: '400',
												color: '#8794C2',
											}}
										>
											CSS Score
										</Typography>
									</div>
								</div>
								<div style={{ margin: '1rem 0px' }}>
									<div>
										<Typography
											sx={{
												fontSize: '0.76rem',
												fontWeight: '600',
											}}
										>
											18277700047693
										</Typography>
									</div>
									<div>
										<Typography
											sx={{
												fontSize: '0.6rem',
												fontWeight: '400',
												color: '#8794C2',
											}}
										>
											CIN No.
										</Typography>
									</div>
								</div>
							</div>
							<div
								style={{
									flex: 1,
									borderRadius: '8px',
									background:
										'linear-gradient(180deg, rgba(0, 184, 94, 0.50) -114.73%, rgba(0, 184, 94, 0.00) 100%)',
									justifyContent: 'center',
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<div style={{ display: 'flex' }}>
									<div
										style={{
											marginTop: '1rem',
											marginRight: '1rem',
										}}
									>
										<StarProfileIcon />
										<StarProfileIcon />
										<StarProfileIcon />
									</div>
									<div>
										<div>
											<Typography
												sx={{
													color: '#00B85E',
													fontSize: '1.2rem',
													fontWeight: '600',
												}}
											>
												AAA+
											</Typography>
										</div>
										<div>
											<Typography
												sx={{
													color: '#8794C2',
													fontSize: '0.6rem',
												}}
											>
												Credit ratings
											</Typography>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div style={div2And3ContainerStyle}>
							<div style={div2Style}>
								<div>
									<Typography
										sx={{
											fontSize: '0.9rem',
											marginTop: '1rem',
										}}
									>
										<b>Overview</b>
									</Typography>
								</div>
								<div>
									<Typography
										sx={{ color: '#8794C2', fontSize: '0.8rem' }}
									>
										Lorem ipsum dolor sit amet consectetur.
										Vivamus sed non in sed semper purus quam non
										in. Iaculis sit felis sit commodo elementum
										ut. Vel mus diam volutpat in netus ac donec.
										Nunc nisl congue eleifend maecenas quis eu
										risus vestibulum.Lorem ipsum dolor sit amet
										consectetur. Vivamus sed non in sed semper
										purus quam non in. Iaculis sit felis sit
										commodo elementum ut. Vel mus diam volutpat
										in netus ac donec. Nunc nisl congue eleifend
										maecenas quis eu risus vestibulum.
									</Typography>
								</div>
							</div>

							<div style={div3Style}>
								<div style={{ padding: '0rem 0rem 1rem' }}>
									{' '}
									<Typography sx={{ fontSize: '0.9rem' }}>
										<b>Registered Address</b>
									</Typography>
								</div>
								<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
									<GoogleMap
										mapContainerStyle={googleMapContainerStyle}
										center={center}
										zoom={10}
									/>
								</LoadScript>
								<div style={{ padding: '1rem 0rem 0rem' }}>
									{' '}
									<Typography sx={{ fontSize: '0.8rem' }}>
										#3, 1stcr,journalist Colony,jcrd,b-2, Jc
										Road, Bangalore, Karnataka
									</Typography>
								</div>
							</div>
						</div>
					</div>
					<div style={bottomDiv}>
						<Grid container spacing={3}>
							<Grid item xs={3} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.87rem',
										fontWeight: 550,
									}}
								>
									NBFC Team
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.7rem',
										fontWeight: 400,
									}}
								>
									NBFC Group Name
								</Typography>
							</Grid>
							<Grid item xs={3} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.87rem',
										fontWeight: 550,
									}}
								>
									Adhivik
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.7rem',
										fontWeight: 400,
									}}
								>
									NBFC Group Head
								</Typography>
							</Grid>
							<Grid item xs={3} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.87rem',
										fontWeight: 550,
									}}
								>
									12/01/2023
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.7rem',
										fontWeight: 400,
									}}
								>
									Date of Incorporation
								</Typography>
							</Grid>
							<Grid item xs={3} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.87rem',
										fontWeight: 550,
									}}
								>
									254
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.7rem',
										fontWeight: 400,
									}}
								>
									No. of Employees
								</Typography>
							</Grid>
							<Grid item xs={3} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.87rem',
										fontWeight: 550,
									}}
								>
									NBFC_123
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.7rem',
										fontWeight: 400,
									}}
								>
									NBFC Group ID
								</Typography>
							</Grid>
							<Grid item xs={3} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.87rem',
										fontWeight: 550,
									}}
								>
									86562343278
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.7rem',
										fontWeight: 400,
									}}
								>
									Registration No
								</Typography>
							</Grid>
							<Grid item xs={3} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.87rem',
										fontWeight: 550,
									}}
								>
									Private Companies
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.7rem',
										fontWeight: 400,
									}}
								>
									Class of Company{' '}
								</Typography>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</>
	);
};

export default NbfcProfile;
