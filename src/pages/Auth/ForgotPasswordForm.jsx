import { useState } from 'react';
import InputComponent from './InputComponent';
import { Button, Grid, Typography } from '@mui/material';
import Mifix from '@/assets/svg/Mifix.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { theme } from '@/theme';
import './styles/SignUpAndLoginForms.scss';

const ForgotPasswordForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
	});
	const emailProps = {
		id: 'emailID',
		name: 'email',
		label: (
			<p>
				Official Email
				<span style={{ color: theme.palette.primary.main }}>*</span>
			</p>
		),
		placeholder: 'Enter your registered email address',
		type: 'email',
		startIcon: <MailOutlineIcon style={{ fontSize: 13 }} />,
		customWidth: '80%',
	};
	const submitButtonStyle = {
		textTransform: 'none',
		borderRadius: '0.5rem',
		width: '80%',
		height: '2rem',
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		border: 'none',
		fontSize: '0.65rem',
		marginTop: '3rem',
	};

	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			style={{ minHeight: '100vh' }}
		>
			<Grid item>
				<img src={Mifix} style={{ marginBottom: '2rem' }} alt="Mifix" />
				<Typography
					style={{
						fontWeight: 'bold',
						fontSize: '1.35rem',
						marginBottom: '1rem',
					}}
				>
					Forgot Password?{' '}
				</Typography>
				<Typography
					variant="subtitle2"
					style={{
						fontSize: '0.8rem',
						marginTop: '-1rem',
						marginBottom: '1rem',
						width: '25rem',
						color: 'var(--Sub-text-2, #8794C2)',
					}}
				>
					Enter your email address below, and we&apos;ll send you a link to
					reset your password.
				</Typography>
				<Grid style={{ width: '100%', marginBottom: '2rem' }}>
					<Typography>
						<p className="passwordResetEmail">
							Email Address
							<span style={{ color: theme.palette.primary.main }}>
								*
							</span>
						</p>
					</Typography>
					<InputComponent
						sx={{ width: '100%' }}
						{...emailProps}
						value={formData.email}
						onChange={(e) => {
							const value = e.target.value;
							setFormData({ ...formData, email: value });
						}}
						isSubmitted={isSubmitted}
					/>
					<Button
						id="submitBtn"
						variant="contained"
						buttonType="submit"
						style={submitButtonStyle}
						onClick={() => {
							const submitBtn = document.getElementById('submitBtn');
							submitBtn.style.backgroundColor =
								theme.palette.primary.light;
							submitBtn.style.cursor = 'not-allowed';
							setIsSubmitted(true);
						}}
					>
						Submit
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ForgotPasswordForm;
