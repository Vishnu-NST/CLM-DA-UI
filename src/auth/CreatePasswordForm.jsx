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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { isAllFormFieldsTouched } from '@/utils/common';

const CreatePasswordForm = () => {
	const form = useFormik({
		initialValues: {
			password: '',
			confirmPassword: '',
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.min(8, 'Must be 8 characters or more')
				.required('Password is required'),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref('password'), null], 'Passwords must match')
				.required('Confirm Password is required'),
		}),
		onSubmit: (values) => {
			console.log('submit');
			console.log(values);
		},
	});

	const isAllFieldsTouched = isAllFormFieldsTouched(form);

	const isFormValid = isAllFieldsTouched && form.isValid;

	const setPasswordProps = {
		id: 'password',
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
		backgroundColor: isFormValid
			? theme.palette.primary.main
			: theme.palette.primary.light,
		color: 'white',
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
			<form onSubmit={form.handleSubmit}>
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
							<span style={{ color: theme.palette.primary.main }}>
								*
							</span>
						</p>
					</Typography>
					<InputComponent
						style={{ marginTop: '-0.8rem !important' }}
						{...setPasswordProps}
						form={form}
						value={form.values.password}
						error={form.errors.password}
						touched={form.touched.password}
					/>
					<Typography>
						<p className="passwordResetEmail">
							Confirm Password
							<span style={{ color: theme.palette.primary.main }}>
								*
							</span>
						</p>
					</Typography>
					<InputComponent
						style={{ marginTop: '-0.8rem !important' }}
						{...confirmPasswordProps}
						form={form}
						value={form.values.confirmPassword}
						error={form.errors.confirmPassword}
						touched={form.touched.confirmPassword}
					/>
					<Button
						id="submitBtn"
						variant="contained"
						buttonType="submit"
						style={signUpButtonStyle}
						disabled={!isFormValid}
						type="submit"
					>
						Submit
					</Button>
				</Grid>
			</form>
		</Grid>
	);
};

export default CreatePasswordForm;
