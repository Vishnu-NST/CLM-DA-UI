import { Button, Grid, Typography } from '@mui/material';
import { theme } from '@/theme';
import ErrorIcon from '@/assets/svg/ErrorIcon.svg';
import './styles/SignUpAndLoginForms.scss';

const LinkExpiredForm = () => {
	const signUpButtonStyle = {
		textTransform: 'none',
		borderRadius: '0.5rem',
		width: '100%',
		height: '2rem',
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		border: 'none',
		fontSize: '0.65rem',
		buttonWeight: '200',
		marginTop: '1.5rem',
	};

	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			style={{ minHeight: '100vh' }}
		>
			<Grid item style={{ width: '25%' }}>
				<Grid item align="center">
					<img
						src={ErrorIcon}
						style={{ marginBottom: '2rem' }}
						alt="Error Occured"
						align="center"
					/>
				</Grid>
				<Grid item align="center">
					<Typography variant="h5" align="center">
						Link has been expired
					</Typography>
					<Typography variant="h6" className="linkExpiredCls">
						Uh-oh! It seems the password reset link has expired. Please
						click the &apos;Forgot Password&apos; link again to start a
						new reset process.
					</Typography>
				</Grid>
				<Button
					id="submitBtn"
					variant="contained"
					buttonType="submit"
					style={signUpButtonStyle}
					onClick={() => {
						const submitBtn = document.getElementById('submitBtn');
						submitBtn.style.backgroundColor =
							theme.palette.primary.light;
						submitBtn.style.cursor = 'not-allowed';
					}}
				>
					Sign In
				</Button>
			</Grid>
		</Grid>
	);
};

export default LinkExpiredForm;
