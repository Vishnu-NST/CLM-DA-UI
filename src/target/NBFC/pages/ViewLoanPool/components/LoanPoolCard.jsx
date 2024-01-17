import { Button, Card, Checkbox, Grid, Paper, Typography } from '@mui/material';
// import StatisticsIcon from '../assets/svg/StatisticsIcon';
// import EditIcon from '../assets/svg/EditIcon';
// import DeleteIcon from '../assets/svg/DeleteIcon';
import StatisticsIcon from '@/assets/svg/StatisticsIcon';
import EditIcon from '@/assets/svg/EditIcon';
import DeleteIcon from '@/assets/svg/DeleteIcon';

const LoanPoolCard = ({}) => {
	const data = [];

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

	return (
		<>
			<Card elevation={0} sx={styles.lightCardardStyle}>
				<Grid container spacing={0.5}>
					<Grid item xs={0.5}>
						<Checkbox color="error" />
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
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

					<Grid item sx={{ mt: 1.2 }} xs={2.5} align="left">
						<Paper
							align="center"
							elevation={0}
							sx={{
								background:
									'linear-gradient(to bottom, #00B85E, #00B85E00)',
								borderRadius: '1.875rem',
								height: '2.5rem',
								width: '9.625rem',
								opacity: '0.08',
							}}
						></Paper>
						<Typography
							sx={{
								color: '#00B85E',
								pt: 1,
								position: 'relative',
								top: '-40px',
								right: '-33px',
							}}
						>
							24 days left
						</Typography>
					</Grid>

					<Grid sx={{ mt: 2 }} item xs={1.5} align="left">
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
			<Card
				elevation={0}
				sx={{
					background: '#F8F9FB',
					borderRadius: '0.9375rem',
					width: '72rem',
					height: '3.875rem',
					padding: '1rem',
				}}
			>
				<Grid container spacing={0.5}>
					<Grid item xs={0.5}>
						<Checkbox color="error" />
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
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

					<Grid item sx={{ mt: 1.2 }} xs={2.5} align="left">
						<Paper
							align="center"
							elevation={0}
							sx={{
								background:
									'linear-gradient(to bottom, #F78736, #F7873600)',
								borderRadius: '1.875rem',
								height: '2.5rem',
								width: '9.625rem',
								opacity: '0.08',
							}}
						></Paper>
						<Typography
							sx={{
								color: '#F78736',
								pt: 1,
								position: 'relative',
								top: '-40px',
								right: '-33px',
							}}
						>
							18 days left
						</Typography>
					</Grid>

					<Grid sx={{ mt: 2 }} item xs={1.5} align="left">
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
			<Card elevation={0} sx={styles.lightCardardStyle}>
				<Grid container spacing={0.5}>
					<Grid item xs={0.5}>
						<Checkbox color="error" />
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
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

					<Grid item sx={{ mt: 1.2 }} xs={2.5} align="left">
						<Paper
							align="center"
							elevation={0}
							sx={{
								background:
									'linear-gradient(to bottom, #C4161C, #C4161C00)',
								borderRadius: '1.875rem',
								height: '2.5rem',
								width: '9.625rem',
								opacity: '0.08',
							}}
						></Paper>
						<Typography
							sx={{
								color: '#C4161C',
								pt: 1,
								position: 'relative',
								top: '-40px',
								right: '-33px',
							}}
						>
							12 days left
						</Typography>
					</Grid>

					<Grid sx={{ mt: 2 }} item xs={1.5} align="left">
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
			<Card
				elevation={0}
				sx={{
					background: '#F8F9FB',
					borderRadius: '0.9375rem',
					width: '72rem',
					height: '3.875rem',
					padding: '1rem',
				}}
			>
				<Grid container spacing={0.5}>
					<Grid item xs={0.5}>
						<Checkbox color="error" />
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
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

					<Grid item sx={{ mt: 1.2 }} xs={2.5} align="left">
						<Paper
							align="center"
							elevation={0}
							sx={{
								background:
									'linear-gradient(to bottom, #F78736, #F7873600)',
								borderRadius: '1.875rem',
								height: '2.5rem',
								width: '9.625rem',
								opacity: '0.08',
							}}
						></Paper>
						<Typography
							sx={{
								color: '#F78736',
								pt: 1,
								position: 'relative',
								top: '-40px',
								right: '-33px',
							}}
						>
							18 days left
						</Typography>
					</Grid>

					<Grid sx={{ mt: 2 }} item xs={1.5} align="left">
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
			<Card elevation={0} sx={styles.lightCardardStyle}>
				<Grid container spacing={0.5}>
					<Grid item xs={0.5}>
						<Checkbox color="error" />
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
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

					<Grid item sx={{ mt: 1.2 }} xs={2.5} align="left">
						<Paper
							align="center"
							elevation={0}
							sx={{
								background:
									'linear-gradient(to bottom, #C4161C, #C4161C00)',
								borderRadius: '1.875rem',
								height: '2.5rem',
								width: '9.625rem',
								opacity: '0.08',
							}}
						></Paper>
						<Typography
							sx={{
								color: '#C4161C',
								pt: 1,
								position: 'relative',
								top: '-40px',
								right: '-33px',
							}}
						>
							12 days left
						</Typography>
					</Grid>

					<Grid sx={{ mt: 2 }} item xs={1.5} align="left">
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
			<Card
				elevation={0}
				sx={{
					background: '#F8F9FB',
					borderRadius: '0.9375rem',
					width: '72rem',
					height: '3.875rem',
					padding: '1rem',
				}}
			>
				<Grid container spacing={0.5}>
					<Grid item xs={0.5}>
						<Checkbox color="error" />
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
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

					<Grid item sx={{ mt: 1.2 }} xs={2.5} align="left">
						<Paper
							align="center"
							elevation={0}
							sx={{
								background:
									'linear-gradient(to bottom, #F78736, #F7873600)',
								borderRadius: '1.875rem',
								height: '2.5rem',
								width: '9.625rem',
								opacity: '0.08',
							}}
						></Paper>
						<Typography
							sx={{
								color: '#F78736',
								pt: 1,
								position: 'relative',
								top: '-40px',
								right: '-33px',
							}}
						>
							18 days left
						</Typography>
					</Grid>

					<Grid sx={{ mt: 2 }} item xs={1.5} align="left">
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
			<Card elevation={0} sx={styles.lightCardardStyle}>
				<Grid container spacing={0.5}>
					<Grid item xs={0.5}>
						<Checkbox color="error" />
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
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

					<Grid item sx={{ mt: 1.2 }} xs={2.5} align="left">
						<Paper
							align="center"
							elevation={0}
							sx={{
								background:
									'linear-gradient(to bottom, #C4161C, #C4161C00)',
								borderRadius: '1.875rem',
								height: '2.5rem',
								width: '9.625rem',
								opacity: '0.08',
							}}
						></Paper>
						<Typography
							sx={{
								color: '#C4161C',
								pt: 1,
								position: 'relative',
								top: '-40px',
								right: '-33px',
							}}
						>
							12 days left
						</Typography>
					</Grid>

					<Grid sx={{ mt: 2 }} item xs={1.5} align="left">
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
			<Card
				elevation={0}
				sx={{
					background: '#F8F9FB',
					borderRadius: '0.9375rem',
					width: '72rem',
					height: '3.875rem',
					padding: '1rem',
				}}
			>
				<Grid container spacing={0.5}>
					<Grid item xs={0.5}>
						<Checkbox color="error" />
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
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

					<Grid item sx={{ mt: 1.2 }} xs={2.5} align="left">
						<Paper
							align="center"
							elevation={0}
							sx={{
								background:
									'linear-gradient(to bottom, #F78736, #F7873600)',
								borderRadius: '1.875rem',
								height: '2.5rem',
								width: '9.625rem',
								opacity: '0.08',
							}}
						></Paper>
						<Typography
							sx={{
								color: '#F78736',
								pt: 1,
								position: 'relative',
								top: '-40px',
								right: '-33px',
							}}
						>
							18 days left
						</Typography>
					</Grid>

					<Grid sx={{ mt: 2 }} item xs={1.5} align="left">
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
			<Card elevation={0} sx={styles.lightCardardStyle}>
				<Grid container spacing={0.5}>
					<Grid item xs={0.5}>
						<Checkbox color="error" />
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={2} align="left">
						<Typography sx={styles.valueStyles}>
							MUTH-MF April 23-1
						</Typography>
						<Typography sx={styles.titleStyles}>
							Added on 15th april 2023
						</Typography>
					</Grid>

					<Grid sx={{ mt: 1.2 }} item xs={1} align="left">
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

					<Grid item sx={{ mt: 1.2 }} xs={2.5} align="left">
						<Paper
							align="center"
							elevation={0}
							sx={{
								background:
									'linear-gradient(to bottom, #C4161C, #C4161C00)',
								borderRadius: '1.875rem',
								height: '2.5rem',
								width: '9.625rem',
								opacity: '0.08',
							}}
						></Paper>
						<Typography
							sx={{
								color: '#C4161C',
								pt: 1,
								position: 'relative',
								top: '-40px',
								right: '-33px',
							}}
						>
							12 days left
						</Typography>
					</Grid>

					<Grid sx={{ mt: 2 }} item xs={1.5} align="left">
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
				<Button sx={{ mt: 2, mr: 2 }} variant="contained" color="error">
					Push to the Bank &gt;
				</Button>
			</Card>
			<br />
			<br />
			<br /> <br />
		</>
	);
};

export default LoanPoolCard;
