import Mifix from '@/assets/svg/Mifix.svg';
import { theme } from '@/theme';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputComponent from './InputComponent';
import './styles/SignUpAndLoginForms.scss';
import { isAllFormFieldsTouched } from '@/utils/common';

const ForgotPasswordForm = () => {
	const form = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalid email address')
				.required('This field is required'),
		}),
		onSubmit: (values) => {
			console.log('submit');
			console.log(values);
		},
	});

	const isAllFieldsTouched = isAllFormFieldsTouched(form);

	const isFormValid = isAllFieldsTouched && form.isValid;

	const emailProps = {
		id: 'email',
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
		backgroundColor: isFormValid
			? theme.palette.primary.main
			: theme.palette.primary.light,
		color: 'white',
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
				<form onSubmit={form.handleSubmit}>
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
							form={form}
							value={form.values.email}
							error={form.errors.email}
							touched={form.touched.email}
						/>
						<Button
							id="submitBtn"
							variant="contained"
							buttonType="submit"
							style={submitButtonStyle}
							disabled={!isFormValid}
							type="submit"
						>
							Submit
						</Button>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
};

export default ForgotPasswordForm;
