import { useState } from 'react';
import {
	Button,
	Grid,
	// Paper,
	// TextField,
	Typography,
} from '@mui/material';
import Mifix from '@/assets/svg/Mifix.svg';
import InputComponent from './InputComponent';
import KeyIcon from '@mui/icons-material/Key';
import PasswordIcon from '@mui/icons-material/Password';
import { theme } from '@/theme';
import './styles/SignUpAndLoginForms.scss';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const CreatePasswordForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const setPasswordProps = {
		id: 'setPassword',
		type: 'password',
		startIcon: <KeyIcon className="keyIconCls" />,
		customWidth: '100%',
		helperText: 'enter your password',
	};

	const confirmPasswordProps = {
		id: 'confirmPassword',
		type: 'password',
		startIcon: <PasswordIcon style={{ fontSize: '1.3rem !important' }} />,
		customWidth: '100%',
		helperText: 'enter your password',
	};

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

	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const { user, login } = useAuthStore();
	// const { state: toastState, showToast } = useToastStore();
	//const navigate = useNavigate();

	// console.log(user);

	// const handleLogin = async () => {
	// 	try {
	// 		// const res = await loginService.login({
	// 		// 	payload: { employeeId: email, password: password },
	// 		// });
	// 		// console.log(res);
	// 		// if (!res.payload.error) {
	// 		// 	const userData = res.payload.data;
	// 		// 	login(userData);
	// 		// 	sessionStorage.setItem('authToken', userData.accessToken);
	// 		// 	sessionStorage.setItem('partnerId', userData.partnerId);
	// 		// 	return navigate('/newreport/prospect');
	// 		// } else {
	// 		// 	showToast('warning', 'Invalid Username/password');
	// 		// }
	// 	} catch (error) {
	// 		// console.log(error);
	// 		// showToast('warning', 'Unknown error');
	// 	}
	// };

	return (
		// <Container component="main" maxWidth="xs">
		// 	<Grid
		// 		container
		// 		direction="column"
		// 		justifyContent="center"
		// 		alignItems="flex-start"
		// 	>
		// 		<img src={Mifix} alt="Mifix" style={{ margin: '10% 0 10% 0' }} />
		// 		<Typography style={{ fontWeight: '600', fontSize: '1.75rem' }}>
		// 			Create Password
		// 		</Typography>
		// 		<Grid item>
		// 			<Typography className="labelCls">Set Password</Typography>
		// 			<InputComponent {...setPasswordProps} />
		// 			<Typography className="pwdRulesCls">
		// 				Create a password with the combination of Numeric,
		// 			</Typography>
		// 			<Typography className="pwdRulesCls">
		// 				Letters and Special characters.
		// 			</Typography>
		// 			<Typography className="labelCls">Confirm Password</Typography>
		// 			<InputComponent {...confirmPasswordProps} />
		// 		</Grid>
		// 		<Button
		// 			id="submitBtn"
		// 			variant="contained"
		// 			buttonType="submit"
		// 			style={signUpButtonStyle}
		// 			// onClick={() => {}}
		// 		>
		// 			Sign Up
		// 		</Button>
		// 	</Grid>

		// 	{/* <Paper>
		// 		<Typography variant="h5">Login</Typography>
		// 		<form noValidate>
		// 			<InputComponent
		// 				variant="outlined"
		// 				margin="normal"
		// 				required
		// 				fullWidth
		// 				id="email"
		// 				label="Email Address"
		// 				name="email"
		// 				autoComplete="email"
		// 				value={email}
		// 				onChange={(e) => setEmail(e.target.value)}
		// 			/>
		// 			<InputComponent
		// 				variant="outlined"
		// 				margin="normal"
		// 				required
		// 				fullWidth
		// 				name="password"
		// 				label="Password"
		// 				type="password"
		// 				id="password"
		// 				autoComplete="current-password"
		// 				value={password}
		// 				onChange={(e) => setPassword(e.target.value)}
		// 			/>
		// 			<Button
		// 				type="button"
		// 				fullWidth
		// 				variant="contained"
		// 				color="primary"
		// 				onClick={handleLogin}
		// 			>
		// 				Sign In
		// 			</Button>
		// 		</form>
		// 	</Paper> */}
		// </Container>
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
					Create Password{' '}
				</Typography>
				<Typography>
					<p className="passwordResetEmail">
						Set Password
						<span style={{ color: theme.palette.primary.main }}>*</span>
					</p>
				</Typography>
				<InputComponent
					style={{ marginTop: '-0.8rem !important' }}
					{...setPasswordProps}
					// onChange={(e) => {
					// 	const value = e.target.value;
					// 	setFormData({ ...formData, email: value });
					// }}
					isSubmitted={isSubmitted}
				/>
				<Typography>
					<p className="passwordResetEmail">
						Confirm Password
						<span style={{ color: theme.palette.primary.main }}>*</span>
					</p>
				</Typography>
				<InputComponent
					style={{ marginTop: '-0.8rem !important' }}
					{...confirmPasswordProps}
					// onChange={(e) => {
					// 	const value = e.target.value;
					// 	setFormData({ ...formData, email: value });
					// }}
					isSubmitted={isSubmitted}
				/>
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
						setIsSubmitted(true);
					}}
				>
					Submit
				</Button>
			</Grid>
		</Grid>
	);
};

export default CreatePasswordForm;

// import { useState } from 'react';
// import InputComponent from './InputComponent';
// import { Button, Grid, Typography } from '@mui/material';
// import Mifix from '@/assets/svg/Mifix.svg';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import { theme } from '@/theme';
// import './styles/SignUpAndLoginForms.scss';

// const CreatePasswordForm = () => {
// 	const [isSubmitted, setIsSubmitted] = useState(false);
// 	const [formData, setFormData] = useState({
// 		email: '',
// 	});
// 	const emailProps = {
// 		id: 'emailID',
// 		name: 'email',
// 		label: (
// 			<p>
// 				Official Email
// 				<span style={{ color: theme.palette.primary.main }}>*</span>
// 			</p>
// 		),
// 		placeholder: 'Enter your registered email address',
// 		type: 'email',
// 		startIcon: <MailOutlineIcon style={{ fontSize: 13 }} />,
// 		customWidth: '100%',
// 	};
// 	const submitButtonStyle = {
// 		textTransform: 'none',
// 		borderRadius: '0.5rem',
// 		width: '100%',
// 		height: '2rem',
// 		color: theme.palette.common.white,
// 		backgroundColor: theme.palette.primary.main,
// 		border: 'none',
// 		fontSize: '0.65rem',
// 		marginTop: '3rem',
// 	};

// 	return (
// 		<Grid
// 			container
// 			direction="column"
// 			justifyContent="center"
// 			alignItems="center"
// 			style={{ minHeight: '100vh' }}
// 		>
// 			<Grid item>
// 				<img src={Mifix} style={{ marginBottom: '2rem' }} alt="Mifix" />
// 				<Typography
// 					style={{
// 						fontWeight: 'bold',
// 						fontSize: '1.35rem',
// 						marginBottom: '1rem',
// 					}}
// 				>
// 					Create Password?{' '}
// 				</Typography>
// 				<Grid style={{ width: '100%', marginBottom: '2rem' }}>
// 					<Typography>
// 						<p className="passwordResetEmail">
// 							Set Password
// 							<span style={{ color: theme.palette.primary.main }}>
// 								*
// 							</span>
// 						</p>
// 					</Typography>
// 					<InputComponent
// 						sx={{ width: '100%' }}
// 						{...emailProps}
// 						value={formData.email}
// 						onChange={(e) => {
// 							const value = e.target.value;
// 							setFormData({ ...formData, email: value });
// 						}}
// 						isSubmitted={isSubmitted}
// 					/>
// 					<Typography>
// 						<p className="passwordResetEmail">
// 							Confirm Password
// 							<span style={{ color: theme.palette.primary.main }}>
// 								*
// 							</span>
// 						</p>
// 					</Typography>
// 					<InputComponent
// 						sx={{ width: '100%' }}
// 						{...emailProps}
// 						value={formData.email}
// 						onChange={(e) => {
// 							const value = e.target.value;
// 							setFormData({ ...formData, email: value });
// 						}}
// 						isSubmitted={isSubmitted}
// 					/>
// 					<Button
// 						id="submitBtn"
// 						variant="contained"
// 						buttonType="submit"
// 						style={submitButtonStyle}
// 						onClick={() => {
// 							const submitBtn = document.getElementById('submitBtn');
// 							submitBtn.style.backgroundColor =
// 								theme.palette.primary.light;
// 							submitBtn.style.cursor = 'not-allowed';
// 							setIsSubmitted(true);
// 						}}
// 					>
// 						Submit
// 					</Button>
// 				</Grid>
// 			</Grid>
// 		</Grid>
// 	);
// };

// export default CreatePasswordForm;
