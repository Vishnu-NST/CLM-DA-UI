import DeleteIcon from '@/assets/svg/DeleteIcon';
import EditIcon from '@/assets/svg/EditIcon';
import StatisticsIcon from '@/assets/svg/StatisticsIcon';
import CustomButton from '@/components/CustomButton';
import useDeleteLoanPool from '@/store/useDeleteLoanPool';
import useGetViewLoanPoolCustomerDetails from '@/store/useGetLoanPoolCustomerDetails';
import useGetViewLoanPoolList from '@/store/useGetViewLoanPoolList';
import { Card, Checkbox, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ConformationDialogBox from '@/components/ConformationDialogBox';
import { useState } from 'react';
import SuccessIcon from '@/assets/svg/SuccessIcon';

const LoanPoolCard = () => {
	const navigate = useNavigate();

	const data = useGetViewLoanPoolList();

	const setLoanPoolId = useGetViewLoanPoolCustomerDetails();

	const deleteLoanPool = useDeleteLoanPool();

	const handleDeleteLoanPool = (payload) => {
		deleteLoanPool.mutate(payload);
	};

	const handleSetLoanPoolId = (payload) => {
		setLoanPoolId(payload);
	};

	const [openDialog, setOpenDialog] = useState(false);
	const handleOpenDialog = (e) => {
		e.preventDefault();
		setOpenDialog(true);
	};
	const handleCloseDialog = () => {
		setOpenDialog(false);
		//if id==ur btn/ navigate to"route";
	};

	const customButtonStyle = {
		width: '15rem',
		mt: 4,
		mr: 5,
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

	const styles = {
		lightCardardStyle: {
			background: '#FFFFFF',
			borderRadius: '0.9375rem',
			width: '72rem',
			height: '3.875rem',
			padding: '1rem',
		},
		darkCardardStyle: {
			background: '#F8F9FB',
			borderRadius: '0.9375rem',
			width: '72rem',
			height: '3.875rem',
			padding: '1rem',
		},
		valueStyles: {
			color: '#1B1B1B',
			fontSize: '0.875rem',
			fontWeight: 500,
			fontFamily: 'Poppins, sans-serif',
			// textOverflow: 'ellipsis',
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
			greenRatings: {
				color: '#00B85E',
				fontSize: '0.875rem',
				fontWeight: 500,
				fontFamily: 'Poppins, sans-serif',
			},
			yellowRatings: {
				color: '#F78736',
				fontSize: '0.875rem',
				fontWeight: 500,
				fontFamily: 'Poppins, sans-serif',
			},
			redRatings: {
				color: '#C4161C',
				fontSize: '0.875rem',
				fontWeight: 500,
				fontFamily: 'Poppins, sans-serif',
			},
		},
	};

	function getOrdinalSuffix(number) {
		const suffixes = ['th', 'st', 'nd', 'rd'];
		const v = number % 100;
		return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
	}

	function formatDate(inputDate) {
		const date = new Date(inputDate);
		const day = getOrdinalSuffix(date.getDate());
		const month = date.toLocaleString('default', { month: 'short' });
		const year = date.getFullYear();

		return `${day} ${month} ${year}`;
	}

	return (
		<>
			{data.data?.map((item, idx) => {
				return (
					<Card
						elevation={0}
						key={idx}
						style={{
							backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F8F9FB',
							paddingBottom: '3.5rem',
						}}
						sx={styles.lightCardardStyle}
					>
						<Grid container spacing={0.5}>
							<Grid item xs={0.5}>
								<Checkbox color="error" />
							</Grid>

							<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
								<Typography sx={styles.valueStyles}>
									{item?.name}
								</Typography>
								<Typography sx={styles.titleStyles}>
									Added on {formatDate(item?.createdon)}
								</Typography>
							</Grid>

							<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
								<Typography sx={styles.valueStyles}>
									{item?.aum}
								</Typography>
								<Typography sx={styles.titleStyles}>AUM</Typography>
							</Grid>

							<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
								<Typography
									sx={
										item?.credit_ratings[0] === 'A'
											? styles.ratings.greenRatings
											: item?.credit_ratings[0] === 'B'
												? styles.ratings.yellowRatings
												: styles.ratings.redRatings
									}
								>
									{item?.credit_ratings}
								</Typography>
								<Typography sx={styles.titleStyles}>
									Credit Ratings
								</Typography>
							</Grid>

							<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
								<Typography sx={styles.valueStyles}>
									{item?.irr}
								</Typography>
								<Typography sx={styles.titleStyles}>
									Average IRR
								</Typography>
							</Grid>

							<Grid item sx={{ mt: 1.2 }} xs={2.5} align="left">
								<Paper
									align="center"
									elevation={0}
									sx={styles.paperGradient.greenGradient}
								></Paper>
								<Typography
									sx={{
										color: '#00B85E',
										pt: 1,
										position: 'relative',
										top: '-40px',
										right: '-45px',
										width: '121px',
									}}
								>
									{item?.days_left_until_closure} days
								</Typography>
							</Grid>

							<Grid
								sx={{ mt: 2, cursor: 'pointer' }}
								item
								xs={1.5}
								align="left"
								onClick={() => {
									{
										navigate(
											`/nbfc/panel/customer-details/${item?.pool_id}`,
										);
										// handleSetLoanPoolId(item?.pool_id);
									}
								}}
							>
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

							<Grid item xs={0.5}></Grid>

							<Grid item xs={0.5} sx={{ mt: 2 }} align="center">
								<StatisticsIcon />
							</Grid>

							<Grid item xs={0.5} sx={{ mt: 2 }} align="center">
								<EditIcon />
							</Grid>

							<Grid item xs={0.5} sx={{ mt: 2 }} align="center">
								<Typography
									sx={{ cursor: 'pointer' }}
									onClick={() => {
										// handleDeleteLoanPool(item?.pool_id);
										// console.log(item?.pool_id);
										handleOpenDialog();
									}}
								>
									<DeleteIcon />
								</Typography>
							</Grid>
							<ConformationDialogBox
								open={openDialog}
								handleClose={handleCloseDialog}
								title="Dialog Title"
								contentTitle="Updated Successfully"
								content="The user profile Details has been Successfully Updated."
								imageComponent={<SuccessIcon />}
								buttonText1="View User Details"
								buttonText2="Add New User"
								onButtonClick1={() => navigate('/user-list')}
								onButtonClick2={() => navigate('/user-management')}
							/>
						</Grid>
					</Card>
				);
			})}
			<Card
				elevation={0}
				sx={{
					position: 'fixed',
					bottom: 0,
					left: '50%',
					transform: 'translateX(-50%)',
					width: '72rem',
					height: '4.5rem',
					borderTopRightRadius: '0.9375rem',
					borderTopLeftRadius: '0.9375rem',
					backgroundColor: 'white',
					borderTop: '1px solid #ddd', // Add a border if needed
					ml: 9.5,
				}}
				align="right"
			>
				<CustomButton
					buttonType={'submit'}
					buttonDisabled={false}
					customStyle={customButtonStyle}
				>
					Push to the Bank &gt;
				</CustomButton>
			</Card>
			<br />
			<br />
		</>
	);
};

export default LoanPoolCard;
