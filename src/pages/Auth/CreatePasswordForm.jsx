import {
	Button,
	Container,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@mui/material';
import Mifix from '@/assets/svg/Mifix.svg';
import InputComponent from './InputComponent';
import KeyIcon from '@mui/icons-material/Key';
import PasswordIcon from '@mui/icons-material/Password';
import { theme } from '@/theme';
import './styles/SignUpAndLoginForms.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePasswordForm = () => {
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
		width: '50%',
		height: '2.5rem',
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		border: 'none',
		buttonWeight: '200',
		marginTop: '3rem',
	};

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const { user, login } = useAuthStore();
	// const { state: toastState, showToast } = useToastStore();
	const navigate = useNavigate();

	// console.log(user);

	const handleLogin = async () => {
		try {
			// const res = await loginService.login({
			// 	payload: { employeeId: email, password: password },
			// });
			// console.log(res);
			// if (!res.payload.error) {
			// 	const userData = res.payload.data;
			// 	login(userData);
			// 	sessionStorage.setItem('authToken', userData.accessToken);
			// 	sessionStorage.setItem('partnerId', userData.partnerId);
			// 	return navigate('/newreport/prospect');
			// } else {
			// 	showToast('warning', 'Invalid Username/password');
			// }
		} catch (error) {
			// console.log(error);
			// showToast('warning', 'Unknown error');
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="flex-start"
			>
				<img src={Mifix} alt="Mifix" style={{ margin: '10% 0 10% 0' }} />
				<Typography style={{ fontWeight: '600', fontSize: '1.75rem' }}>
					Create Password
				</Typography>
				<Grid item>
					<Typography className="labelCls">Set Password</Typography>
					<InputComponent {...setPasswordProps} />
					<Typography className="pwdRulesCls">
						Create a password with the combination of Numeric,
					</Typography>
					<Typography className="pwdRulesCls">
						Letters and Special characters.
					</Typography>
					<Typography className="labelCls">Confirm Password</Typography>
					<InputComponent {...confirmPasswordProps} />
				</Grid>
				<Button
					id="submitBtn"
					variant="contained"
					buttonType="submit"
					style={signUpButtonStyle}
					// onClick={() => {}}
				>
					Sign Up
				</Button>
			</Grid>

			{/* <Paper>
				<Typography variant="h5">Login</Typography>
				<form noValidate>
					<InputComponent
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<InputComponent
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						type="button"
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleLogin}
					>
						Sign In
					</Button>
				</form>
			</Paper> */}
		</Container>
	);
};

export default CreatePasswordForm;
