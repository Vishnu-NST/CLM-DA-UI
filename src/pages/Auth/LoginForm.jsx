import LoginImage from '@/assets/svg/LoginImage';
import Mifix from '@/assets/svg/Mifix.svg';
import { theme } from '@/theme';
import KeyIcon from '@mui/icons-material/Key';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Typography,
} from '@mui/material';

import { useMemo } from 'react';

import { isAllFormFieldsTouched } from '@/utils/common';
import { useFormik } from 'formik';
import InputComponent from './InputComponent';
import './styles/SignUpAndLoginForms.scss';

const LoginPage = () => {
	const form = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalid email address')
				.required('This field is required'),
			password: Yup.string()
				.min(8, 'Must be 8 characters or more')
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
		placeholder: 'Enter your registered email address',
		type: 'text',
		startIcon: <MailOutlineIcon style={{ fontSize: 12 }} />,
		customWidth: '60%',
		helperText: 'invalid email id',
	};
	const passwordProps = {
		id: 'password',
		placeholder: 'Enter your password',
		type: 'password',
		startIcon: <KeyIcon className="keyIconCls" />,
		customWidth: '60%',
		helperText: 'enter your password',
	};
	const signInButtonStyle = {
		textTransform: 'none',
		borderRadius: '0.5rem',
		width: '60%',
		height: '2rem',
		backgroundColor: isFormValid
			? theme.palette.primary.main
			: theme.palette.primary.light,
		color: 'white',
		cursor: 'pointer',
		border: 'none',
		fontSize: '0.65rem',
	};

	// console.log({ isFormValid });

	const memoizedLoginImage = useMemo(() => <LoginImage />, []);

	return (
		<>
			<Grid container style={{ height: '100vh' }}>
				<Grid item md={6} xs={6} className="imgContainer">
					{memoizedLoginImage}
				</Grid>
				<Grid
					container
					md={6}
					xs={6}
					alignItems="center"
					justifyContent="center"
				>
					<Grid item align="center" width="50%" className="MifixContainer">
						<img
							src={Mifix}
							alt="Mifix"
							style={{ margin: '3rem 29.5rem 0rem 4rem' }}
						/>
						<p className="needAccountCls">
							Need an Account?{' '}
							<span
								style={{
									color: theme.palette.primary.main,
									fontWeight: '700',
									cursor: 'pointer',
									fontSize: '0.875rem',
								}}
							>
								<Link
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
									to="/"
								>
									Sign Up
								</Link>
							</span>
						</p>
					</Grid>
					<Grid
						container
						direction="column"
						style={{ margin: '0% 10% 13% 10%' }}
					>
						<Typography>
							Welcome to{' '}
							<span
								style={{
									color: theme.palette.primary.main,
									fontWeight: 600,
								}}
							>
								Direct Assignment
							</span>
						</Typography>
						<Typography
							style={{ fontWeight: 'bold', fontSize: '1.35rem' }}
						>
							Sign up your account
						</Typography>
						<form action="" onSubmit={form.handleSubmit}>
							<Grid item>
								<Typography className="labelCls">
									<p>
										Email Address
										<span
											style={{
												color: theme.palette.primary.main,
											}}
										>
											*
										</span>
									</p>
								</Typography>
								<InputComponent
									{...emailProps}
									form={form}
									value={form.values.email}
									error={form.errors.email}
									touched={form.touched.email}
								/>
								<Typography className="labelCls">
									<p>
										Password
										<span
											style={{
												color: theme.palette.primary.main,
											}}
										>
											*
										</span>
									</p>
								</Typography>
								<InputComponent
									{...passwordProps}
									form={form}
									value={form.values.password}
									error={form.errors.password}
									touched={form.touched.password}
								/>
								<Grid
									style={{ display: 'flex', alignItems: 'center' }}
								>
									<FormControlLabel
										control={<Checkbox size="small" />}
										label={
											<Typography
												variant="body2"
												style={{ fontSize: 12 }}
											>
												Stay sign in
											</Typography>
										}
									/>
									<Typography className="forgotPwdCls">
										<Link
											style={{
												textDecoration: 'none',
												color: 'inherit',
											}}
											to="/forgot-password"
										>
											Forgot password?
										</Link>
									</Typography>
								</Grid>

								<Box sx={{ marginTop: '2rem' }}>
									<Button
										id="submitBtn"
										variant="contained"
										buttonType="submit"
										style={signInButtonStyle}
										disabledColor={theme.palette.common.white}
										disabledBackground={
											theme.palette.button
												.buttonDisableBackgroundColor
										}
										disabled={!isFormValid}
										type="submit"
									>
										Sign In
									</Button>
								</Box>
							</Grid>
						</form>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default LoginPage;
