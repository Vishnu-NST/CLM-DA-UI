import { useMemo } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import InputComponent from './InputComponent';
import LoginImage from '@/assets/svg/LoginImage';
import Mifix from '@/assets/svg/Mifix.svg';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { theme } from '@/theme';
import './styles/SignUpAndLoginForms.scss';
import { Link, useNavigate } from 'react-router-dom';
import DI from '@/hoc/DI';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { isAllFormFieldsTouched } from '@/utils/common';
import useSignup from '@/store/useSignUp';

const SignUpForm = () => {
	const signUp = useSignup();
	const navigate = useNavigate();

	const form = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, 'Must be 15 characters or less')
				.required('This field is required'),
			lastName: Yup.string()
				.max(15, 'Must be 15 characters or less')
				.required('This field is required'),
			email: Yup.string()
				.email('Invalid email address')
				.required('This field is required'),
		}),
		onSubmit: (values) => {
			console.log('submit');
			console.log(values);
			signUp.mutate(values);
		},
	});

	const isAllFieldsTouched = isAllFormFieldsTouched(form);

	const isFormValid = isAllFieldsTouched && form.isValid;

	const firstNameProps = {
		id: 'firstName',
		label: (
			<p>
				Full Name<span style={{ color: theme.palette.primary.main }}>*</span>
			</p>
		),
		placeholder: 'Enter your first name',
		type: 'text',
		startIcon: <PersonOutlineIcon style={{ fontSize: 'medium' }} />,
		customWidth: '81%',
		helperText: 'enter your first name',
	};

	const lastNameProps = {
		id: 'lastName',
		placeholder: 'Enter your last name',
		type: 'text',
		customWidth: '73%',
		helperText: 'enter your last name',
	};

	const emailProps = {
		id: 'email',
		label: (
			<p>
				Official Email
				<span style={{ color: theme.palette.primary.main }}>*</span>
			</p>
		),
		placeholder: 'Enter your official email id',
		type: 'email',
		startIcon: <MailOutlineIcon style={{ fontSize: 13 }} />,
		customWidth: '60%',
		helperText: 'invalid email id',
	};

	const submitButtonStyle = {
		textTransform: 'none',
		borderRadius: '0.5rem',
		width: '60%',
		height: '2rem',
		color: 'white',
		backgroundColor: isFormValid
			? theme.palette.primary.main
			: theme.palette.primary.light,
		border: 'none',
		fontSize: '0.65rem',
	};

	const memoizedLoginImage = useMemo(() => <LoginImage />, []);

	if (signUp.isError) {
		return navigate('/email-confirm');
	}

	if (signUp.isSuccess) {
		return navigate('/email-confirm');
	}

	return (
		<>
			<Grid container style={{ height: '100vh' }}>
				<Grid item md={6} xs={6} className="imgContainer">
					{memoizedLoginImage}
				</Grid>
				<Grid
					container
					xs={6}
					md={6}
					alignItems="center"
					justifyContent="center"
				>
					<Grid item style={{ marginBottom: '4.5rem' }}>
						<img
							src={Mifix}
							alt="Mifix"
							style={{ marginTop: 0, marginRight: '25.5rem' }}
						/>
						<p className="accountCls">
							Have an Account?{' '}
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
									to="/sign-in"
								>
									Sign In
								</Link>
							</span>
						</p>
					</Grid>
					<Grid
						container
						direction="column"
						style={{ margin: '-10rem 10% 10% 10%' }}
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
						<Typography variant="h6" style={{ fontWeight: 'bold' }}>
							Sign up your account{' '}
						</Typography>{' '}
						<form action="" onSubmit={form.handleSubmit}>
							<Grid item>
								<Typography className="labelCls">
									<p>
										Full Name
										<span
											style={{
												color: theme.palette.primary.main,
											}}
										>
											*
										</span>
									</p>
								</Typography>
								<Grid item style={{ display: 'flex' }}>
									<Grid container spacing={0}>
										<Grid
											item
											xs={4.4}
											style={{ marginRight: '-1rem' }}
										>
											<InputComponent
												{...firstNameProps}
												form={form}
												value={form.values.firstName}
												error={form.errors.firstName}
												touched={form.touched.firstName}
											/>
										</Grid>
										<Grid item xs={4.4}>
											<InputComponent
												style={{ marginTop: 'auto' }}
												{...lastNameProps}
												form={form}
												value={form.values.lastName}
												error={form.errors.lastName}
												touched={form.touched.lastName}
											/>
										</Grid>
									</Grid>
								</Grid>
								<Typography className="labelCls">
									<p>
										Official Email
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
									sx={{ width: '100%' }}
									{...emailProps}
									form={form}
									value={form.values.email}
									error={form.errors.email}
									touched={form.touched.email}
								/>
								<Grid item xs={12} sx={{ pt: 7 }}>
									<Button
										id="submitBtn"
										variant="contained"
										buttonType="submit"
										style={submitButtonStyle}
										type="submit"
										disabled={!isFormValid}
									>
										Submit
									</Button>
								</Grid>
							</Grid>
						</form>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default DI(SignUpForm);
