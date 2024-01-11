import React, { useRef, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Circle from '@/assets/svg/Circle';
import './User.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/CustomButton';
import InputComponent from '@/components/DAInputComponent';
import ConformationDialogBox from '@/components/ConformationDialogBox';
import SuccessIcon from '@/assets/svg/SuccessIcon';

import {
	userNameAttribute,
	userOfficialEmailAdderssAttribute,
	userRoleAttribute,
	mobileNumberAttribute,
	addressOneAttribute,
	addressTwoAttribute,
	stageAttribute,
	cityAttribute,
	pinCodeAttribute,
} from './formAttributes';
const customButtonStyle = {
	borderRadius: '7px',
	padding: '0.5rem 2.5rem',
	color: '#FFFFFF',
	backgroundColor: '#C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
	fontWeight: '500',
};
const validationSchema = yup.object({
	userName: yup.string().required('User Name is required'),
	userOfficialEmailAdderss: yup
		.string()
		.email('Invalid email address')
		.required('Email is required'),
	userRole: yup.string().required('User Role is required '),
	mobileNumber: yup.string().required('Mobile Number is required'),
	//addressOne: yup.string().required("Address is required"),
	//addressTwo:yup.string().required("Address is required"),
});
export const EditUserDetails = () => {
	const navigate = useNavigate();
	const fileInputRef = useRef(null);

	const handleFileClick = () => {
		fileInputRef.current.click();
	};
	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		// Do something with the selected file, such as uploading to a server or processing it.
		console.log('Selected file:', selectedFile);
	};
	const formik = useFormik({
		initialValues: {
			assetClass: '',
			creditRatings: '',
			aum: '',
			averageIrr: '',
			averageBalanceTenor: '',
			averageLoanAmt: '',
			closureDate: null,
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log({ values });
		},
	});
	const [openDialog, setOpenDialog] = useState(false);
	const handleOpenDialog = (e) => {
		e.preventDefault();
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
		//if id==ur btn/ navigate to"route";
	};
	return (
		<>
			<div className="card-block">
				<div className="loan-pool-form-block">
					<div className="title">
						<b>Edit User Details</b>
					</div>
					<br />
					<Grid
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '38%',
						}}
					>
						<Grid item>
							<div className="file-upload-container">
								<Circle />
								<div>
									<input
										type="file"
										id="fileInput"
										style={{ display: 'none' }}
										ref={fileInputRef}
										onChange={handleFileChange}
									/>
									<Typography
										sx={{
											fontSize: '0.65rem',
											color: '#C4161C',
											textAlign: 'center',
											cursor: 'pointer',
										}}
										onClick={handleFileClick}
									>
										Drag and Drop files here
									</Typography>
								</div>
							</div>
						</Grid>
						<Grid
							item
							sx={{
								alignItems: 'flex-start',
								justifyContent: 'center',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Grid>
								{' '}
								<Typography sx={{ fontSize: '0.8rem' }}>
									<b>Upload your Image</b>
								</Typography>
								<div></div>
							</Grid>

							<Grid sx={{ marginTop: '0.6rem' }}>
								<Typography
									sx={{
										fontSize: '0.7rem',
										color: 'rgba(135, 148, 194, 0.60)',
									}}
								>
									The image that you choose should be of PNG format
								</Typography>
							</Grid>
							<Grid>
								<Typography
									sx={{
										fontSize: '0.7rem',
										color: 'rgba(135, 148, 194, 0.60)',
									}}
								>
									{' '}
									The recommended size for the app icon is 512 x
									512 pixels
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<form onSubmit={formik.handleSubmit}>
						<div className="sub-title">Basic Info</div>
						<Grid container>
							<Grid item sm={4} className="pr-2">
								<InputComponent {...userNameAttribute(formik)} />
							</Grid>
							<Grid item sm={4} className="pr-2">
								<InputComponent
									{...userOfficialEmailAdderssAttribute(formik)}
								/>
							</Grid>
							<Grid item sm={4} className="pr-2">
								<InputComponent {...userRoleAttribute(formik)} />
							</Grid>
							<Grid item sm={4} className="pr-2">
								<InputComponent {...mobileNumberAttribute(formik)} />
							</Grid>
						</Grid>
						{/* <hr className="horizantal_Line" /> */}
						<hr
							style={{
								borderTop: '1px solid rgba(135, 148, 194, 0.20)',
								margin: '1rem 0 2rem ',
							}}
						/>
						<Grid container>
							<Grid item sm={4} className="pr-2">
								<InputComponent {...addressOneAttribute(formik)} />
							</Grid>
							<Grid item sm={4} className="pr-2">
								<InputComponent {...addressTwoAttribute(formik)} />
							</Grid>
							<Grid item sm={4} className="pr-2">
								<InputComponent {...stageAttribute(formik)} />
							</Grid>
							<Grid item sm={4} className="pr-2">
								<InputComponent {...cityAttribute(formik)} />
							</Grid>
							<Grid item sm={4} className="pr-2">
								<InputComponent {...pinCodeAttribute(formik)} />
							</Grid>
						</Grid>
						<Grid container>
							<Grid
								item
								sm={12}
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-end',
								}}
							>
								<CustomButton
									buttonDisabled={false}
									customStyle={customButtonStyle}
									onClick={handleOpenDialog}
								>
									Update user Profile &nbsp;
									<ArrowForwardIosIcon fontSize="11" />
								</CustomButton>

								<ConformationDialogBox
									open={openDialog}
									handleClose={handleCloseDialog}
									title="Dialog Title"
									contentTitle="Updated Successfully"
									content="The user profile Details has been Successfully Updated."
									imageComponent={<SuccessIcon />}
									buttonText1="View User Details"
									buttonText2="Add New User"
									onButtonClick1={() => navigate('/user-list')}
									onButtonClick2={() =>
										navigate('/user-management')
									}
								/>
							</Grid>
						</Grid>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditUserDetails;
