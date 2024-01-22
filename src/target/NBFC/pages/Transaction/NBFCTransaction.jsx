import { useState } from 'react';
import TickIcon from '@/assets/svg/TickIcon';
import ConformationDialogBox from '@/components/ConformationDialogBox';
import { Card, Grid, Typography } from '@mui/material';

const conformDialog = {
	// width: '25%',
	// background: 'red',
	width: '25% !important',
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
const NBFCTransaction = () => {
	const styles = {
		lightCardardStyle: {
			background: '#F8F9FB',
			borderRadius: '0.9375rem',
			width: '72rem',
			height: '4.2rem',
			padding: '1rem',
		},
		darkCardardStyle: {
			background: '#FFF',
			borderRadius: '0.9375rem',
			width: '72rem',
			height: '4.2rem',
			padding: '1rem',
		},
		valueStyles: {
			color: '#1B1B1B',
			fontSize: '0.875rem',
			fontWeight: 500,
			fontFamily: 'Poppins, sans-serif',
		},
		titleStyles: {
			color: '#8794C2',
			fontSize: '0.6875rem',
			fontWeight: 400,
			fontFamily: 'Poppins, sans-serif',
		},
		paperGradient: {
			greenGradient: {
				background: 'linear-gradient(to bottom, #00B85E, #00B85E00)',
				borderRadius: '1.875rem',
				height: '2.5rem',
				width: '9.625rem',
				opacity: '0.08',
			},
			orangeGradient: {
				background: 'linear-gradient(to bottom, #F78736, #F7873600)',
				borderRadius: '1.875rem',
				height: '2.5rem',
				width: '9.625rem',
				opacity: '0.08',
			},
			redGradient: {
				background: 'linear-gradient(to bottom, #C4161C, #C4161C00)',
				borderRadius: '1.875rem',
				height: '2.5rem',
				width: '9.625rem',
				opacity: '0.08',
			},
		},
		ratings: {
			greenRatings: {},
			yellowRatings: {},
			redRatings: {},
		},
	};

	const [isDialogOpen, setDialogOpen] = useState(false);
	const [paymentStatus, setPaymentStatus] = useState('Pending'); // Added state for payment status

	const handlePaymentStatusClick = () => {
		setDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setDialogOpen(false);
	};

	const handleConfirmation = () => {
		setPaymentStatus('Paid'); // Set payment status to 'Paid' when confirmed
		handleCloseDialog();
	};
	// const [isDialogOpen, setDialogOpen] = useState(false);

	// // const handlePaymentStatusClick = () => {
	// //   // Open the dialog box
	// //   setDialogOpen(true);
	// // };

	// const handleCloseDialog = () => {
	//  // Close the dialog box
	//  setDialogOpen(false);
	// };

	// const handleConfirmation = () => {
	//  // Handle confirmation logic
	//  // This function will be called when the user clicks on the confirmation button
	//  // Add your logic here
	//  handleCloseDialog(); // Close the dialog after handling the confirmation
	// };
	//const [isDialogOpen, setDialogOpen] = useState(false);

	// Define the handlePaymentStatusClick function
	// const handlePaymentStatusClick = () => {
	//  setDialogOpen(true);
	// };

	// const handleCloseDialog = () => {
	//  setDialogOpen(false);
	// };

	// const handleConfirmation = () => {
	//  handleCloseDialog();
	// };
	return (
		<>
			<Card elevation={0} sx={styles.lightCardardStyle}>
				<Grid container spacing={0.5}>
					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>
					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<div
							style={{
								background: 'rgba(135, 148, 194, 0.20)',

								borderRadius: '2rem',
								width: '7rem',
								height: '2rem',
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								padding: '1rem',
							}}
						>
							<div>
								<Typography
									sx={{
										color: '#8794C2',
										fontSize: '0.8rem',
										fontWeight: '600',
									}}
								>
									NBFC LOGO
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
						{' '}
						<Typography sx={styles.valueStyles}>₹ 50 cr</Typography>
						<Typography sx={styles.titleStyles}>AUM</Typography>
					</Grid>
					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
						<Typography
							sx={{
								color: '#00B85E',
								fontSize: '0.875rem',
								fontWeight: 500,
								fontFamily: 'Poppins, sans-serif',
							}}
						>
							AAA+
						</Typography>
						<Typography sx={styles.titleStyles}>
							Credit Ratings
						</Typography>
					</Grid>
					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
						<Typography sx={styles.valueStyles}>30%</Typography>
						<Typography sx={styles.titleStyles}>Average IRR</Typography>
					</Grid>
					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
						<div
							style={{
								background:
									'linear-gradient(180deg, rgba(247, 135, 54, 0.20) 0%, rgba(247, 135, 54, 0.00) 100%)',
								borderRadius: '2rem',
								width: '7rem',
								height: '2rem',
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								padding: '1rem',
							}}
						>
							<div>
								<Typography
									sx={{
										color: '#F78736',
										fontSize: '0.7rem',
										fontWeight: '600',
									}}
								>
									10 days left
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid sx={{ mt: 1.2 }} item xs={2} align="center">
						<Typography
							sx={{
								color: '#C4161C',
								fontSize: '0.875rem',
								fontWeight: 400,
								fontFamily: 'Poppins, sans-serif',
							}}
						>
							Customer details &gt;
						</Typography>
					</Grid>
					<Grid
						sx={{ mt: 1.2, cursor: 'pointer' }}
						item
						xs={1}
						align="left"
						// onClick={() => {
						//  // Handle click event for the entire Grid item
						//  // You can add your click event logic here
						//  onPaymentStatusClick;
						// }}
					>
						<div
							style={{
								paddingTop: '1.1rem',
								paddingBottom: '1.1rem',
								border: '1px solid #C4161C',
								borderRadius: '2rem',
								width: '10rem',
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								height: '2rem',
							}}
						>
							<div>
								<TickIcon fill={'#C4161C'} />
							</div>
							<div>
								<Typography
									sx={{
										color: '#C4161C',
										fontSize: '0.8rem',
										fontWeight: '600',
										marginRight: '1rem',
									}}
								>
									Payment Paid
								</Typography>
							</div>
						</div>
					</Grid>
				</Grid>
			</Card>
			<Card elevation={0} sx={styles.darkCardardStyle}>
				<Grid container spacing={0.5}>
					<Grid item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>
					<Grid item xs={2} align="left">
						<div
							style={{
								background: 'rgba(135, 148, 194, 0.20)',
								borderRadius: '2rem',
								width: '7rem',
								height: '2rem',
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								padding: '1rem',
							}}
						>
							<div>
								<Typography
									sx={{
										color: '#8794C2',
										fontSize: '0.8rem',
										fontWeight: '600',
									}}
								>
									NBFC LOGO
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid item xs={1} align="left">
						{' '}
						<Typography sx={styles.valueStyles}>₹ 50 cr</Typography>
						<Typography sx={styles.titleStyles}>AUM</Typography>
					</Grid>
					<Grid item xs={1} align="left">
						<Typography
							sx={{
								color: '#00B85E',
								fontSize: '0.875rem',
								fontWeight: 500,
								fontFamily: 'Poppins, sans-serif',
							}}
						>
							AAA+
						</Typography>
						<Typography sx={styles.titleStyles}>
							Credit Ratings
						</Typography>
					</Grid>
					<Grid item xs={1} align="left">
						<Typography sx={styles.valueStyles}>30%</Typography>
						<Typography sx={styles.titleStyles}>Average IRR</Typography>
					</Grid>
					<Grid item xs={1} align="left">
						<div
							style={{
								background:
									'linear-gradient(180deg, rgba(247, 135, 54, 0.20) 0%, rgba(247, 135, 54, 0.00) 100%)',
								borderRadius: '2rem',
								width: '7rem',
								height: '2rem',
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								padding: '1rem',
							}}
						>
							<div>
								<Typography
									sx={{
										color: '#F78736',
										fontSize: '0.7rem',
										fontWeight: '600',
									}}
								>
									10 days left
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid item xs={2} align="center">
						<Typography
							sx={{
								color: '#C4161C',
								fontSize: '0.875rem',
								fontWeight: 400,
								fontFamily: 'Poppins, sans-serif',
								cursor: 'pointer',
							}}
						>
							Customer details &gt;
						</Typography>
					</Grid>

					<Grid
						sx={{ mt: 1.2, cursor: 'pointer' }}
						item
						xs={1}
						align="left"
						onClick={handlePaymentStatusClick}
					>
						{/* <div
                            style={{
                                paddingTop: '1.1rem',
                                paddingBottom: '1.1rem',
                                border: '1px solid #C4161C',
                                borderRadius: '2rem',
                                width: '10rem',
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                height: '2rem',
                            }}
                        > */}{' '}
						<div
							style={{
								paddingTop: '1.1rem',
								paddingBottom: '1.1rem',
								border: `1px solid ${
									paymentStatus === 'Paid' ? '#00B85E' : '#C4161C'
								}`, // Conditionally set border color
								borderRadius: '2rem',
								width: '10rem',
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								height: '2rem',
							}}
						>
							<div>
								<TickIcon />
							</div>
							<div>
								<Typography
									sx={{
										color: '#C4161C',
										fontSize: '0.8rem',
										fontWeight: '600',
										marginRight: '1rem',
									}}
								>
									Payment Paid
								</Typography>
							</div>
						</div>
					</Grid>

					<ConformationDialogBox
						customStyle={conformDialog}
						open={isDialogOpen}
						handleClose={handleCloseDialog}
						contentTitle="Confirm the Action"
						content="Are you sure you want to confirm that the transaction has been paid?"
						buttonText1="Cancel"
						buttonText2="Confirm"
						onButtonClick1={handleCloseDialog}
						onButtonClick2={handleConfirmation}
					/>
				</Grid>
			</Card>
			<br />
			<br />
			<br /> <br />
		</>
	);
};

export default NBFCTransaction;
