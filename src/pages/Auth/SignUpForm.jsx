import { useMemo, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import InputComponent from './InputComponent';
import LoginImage from '@/assets/svg/LoginImage';
import Mifix from '@/assets/svg/Mifix.svg';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { theme } from '@/theme';
import './styles/SignUpAndLoginForms.scss';
import { Link } from 'react-router-dom';
import DI from '@/hoc/DI';

const SignUpForm = (props) => {
	console.log(props);
	props.logger.info({ message: 'some info' }, 'null', 'user1');

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

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
		id: 'emailID',
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
		color: theme.palette.common.white,
		backgroundColor: isSubmitted
			? theme.palette.primary.light
			: theme.palette.primary.main,
		border: 'none',
		fontSize: '0.65rem',
	};

	const memoizedLoginImage = useMemo(() => <LoginImage />, []);
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
											value={formData.firstName}
											onChange={(e) => {
												const value = e.target.value;
												const regMatch = /^[a-zA-Z]*$/.test(
													value,
												);
												if (regMatch) {
													setFormData({
														...formData,
														fullName: value,
													});
												}
											}}
											isSubmitted={isSubmitted}
										/>
									</Grid>
									<Grid item xs={4.4}>
										<InputComponent
											style={{ marginTop: 'auto' }}
											{...lastNameProps}
											value={formData.lastName}
											onChange={(e) => {
												const value = e.target.value;
												const regMatch = '^[a-zA-Z]+$'.test(
													value,
												);
												if (regMatch) {
													setFormData({
														...formData,
														lastName: value,
													});
												}
											}}
											isSubmitted={isSubmitted}
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
								value={formData.email}
								isSubmitted={isSubmitted}
								onChange={(e) => {
									const emailInput = e.target.value;
									const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
									const isValid = emailRegex.test(emailInput);
									if (isValid) {
										setFormData({
											...formData,
											email: emailInput,
										});
									}
								}}
							/>
							<Grid item xs={12} sx={{ pt: 7 }}>
								<Button
									id="submitBtn"
									variant="contained"
									buttonType="submit"
									style={submitButtonStyle}
									onClick={() => {
										const submitBtn =
											document.getElementById('submitBtn');
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
				</Grid>
			</Grid>
		</>
	);
};

export default DI(SignUpForm);
