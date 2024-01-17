// ReusableDialog.js

import React from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '../assets/svg/CancelIcon';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

const ImageComponent = ({ imageComponent }) => <div>{imageComponent}</div>;

const ConformationDialogBox = ({
	open,
	handleClose,
	contentTitle,
	content,
	imageComponent,
	buttonText1,
	buttonText2,
	buttonText3,
	onButtonClick2,
	onButtonClick1,
	onButtonClick3,
}) => {
	console.log({ buttonText3 });
	// const navigate = useNavigate();
	return (
		<Dialog open={open} onClose={handleClose} PaperComponent={CustomPaper}>
			<Grid sx={{ padding: '1rem' }}>
				<Grid
					sx={{
						display: 'flex',
						justifyContent: 'end',
						alignItems: 'end',
					}}
				>
					<IconButton
						color="inherit"
						onClick={handleClose}
						aria-label="close"
					>
						<CancelIcon />
					</IconButton>
				</Grid>
				<Grid
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{' '}
					<ImageComponent imageComponent={imageComponent} />
				</Grid>

				<Grid sx={{ marginTop: '0.6rem' }}>
					<Grid>
						{' '}
						<Typography
							sx={{
								fontSize: '1rem',
								fontWeight: '600',
								color: 'black',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							{contentTitle}
						</Typography>
					</Grid>
					<Grid
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{' '}
						<Typography
							sx={{
								fontSize: '0.7rem',
								fontWeight: '100',
								color: '#8794C2',
							}}
						>
							{content}
						</Typography>
					</Grid>
				</Grid>
				<Grid
					sx={{
						marginTop: '1rem',
						fontSize: '0.75rem',
						justifyContent: 'space-evenly',
						display: 'flex',
					}}
				>
					{buttonText1 && (
						<Button
							onClick={() => {
								onButtonClick1();
								// navigate("/user-list");
							}}
							sx={{
								backgroundColor: '#8794C2',
								color: 'white',
								'&:hover': {
									backgroundColor: '#8794C2',
								},
								borderRadius: '0.5rem',
								padding: '0.3rem',
							}}
						>
							<Typography
								sx={{ fontSize: '0.7rem', textTransform: 'none' }}
							>
								{buttonText1}
							</Typography>
						</Button>
					)}
					{buttonText2 && (
						<Button
							onClick={onButtonClick2}
							sx={{
								backgroundColor: '#C4161C',
								color: 'white',
								'&:hover': {
									backgroundColor: '#C4161C',
								},
								borderRadius: '0.5rem',
								//padding:"0.1rem",
							}}
						>
							<Typography
								sx={{ fontSize: '0.7rem', textTransform: 'none' }}
							>
								{buttonText2}
							</Typography>
						</Button>
					)}
					{buttonText3 && (
						<Button
							onClick={onButtonClick3}
							sx={{
								backgroundColor: '#C4161C',
								color: 'white',
								'&:hover': {
									backgroundColor: '#C4161C',
								},
								width: '100%',
								borderRadius: '0.5rem',
								padding: '0.4rem',
							}}
						>
							<Typography sx={{ fontSize: '0.7rem' }}>
								{buttonText3}
							</Typography>
						</Button>
					)}
				</Grid>
			</Grid>
			<br />
		</Dialog>
	);
	function CustomPaper(props) {
		return <Paper {...props} sx={{ borderRadius: '15px' }} />;
	}
};

export default ConformationDialogBox;
