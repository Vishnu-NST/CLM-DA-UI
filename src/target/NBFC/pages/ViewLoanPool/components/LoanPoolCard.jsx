import { Card, Checkbox, Grid, Paper, Typography } from '@mui/material';
import StatisticsIcon from '@/assets/svg/StatisticsIcon';
import EditIcon from '@/assets/svg/EditIcon';
import DeleteIcon from '@/assets/svg/DeleteIcon';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/CustomButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useGetViewLoanPoolList from '@/store/useGetViewLoanPoolList';

const LoanPoolCard = () => {
	const navigate = useNavigate();

	const data = useGetViewLoanPoolList();
	console.log(data.data);

	const [poolId, setPoolId] = useState('');

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
									{new Date(item?.createdOn).toLocaleDateString()}
								</Typography>
							</Grid>

							<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
								<Typography sx={styles.valueStyles}>
									{item?.aum}
								</Typography>
								<Typography sx={styles.titleStyles}>AUM</Typography>
							</Grid>

							<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
								<Typography sx={styles.ratings.greenRatings}>
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
										right: '-28px',
										width: '121px',
									}}
								>
									{item?.days_left_until_closure}
								</Typography>
							</Grid>

							<Grid
								sx={{ mt: 2, cursor: 'pointer' }}
								item
								xs={1.5}
								align="left"
								onClick={() =>
									navigate('/nbfc/panel/customer-details')
								}
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
								<DeleteIcon />
							</Grid>
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
					width: '74rem',
					height: '4.5rem',
					borderTopRightRadius: '0.9375rem',
					borderTopLeftRadius: '0.9375rem',
					backgroundColor: 'white',
					borderTop: '1px solid #ddd', // Add a border if needed
				}}
				align="right"
			>
				<CustomButton
					sx={{ mt: 2, mr: 2 }}
					variant="contained"
					color="error"
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
