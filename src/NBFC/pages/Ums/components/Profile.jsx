import React, { useRef } from 'react';
import { Grid, Typography } from '@mui/material';
import Circle from '@/NBFC/assets/svg/Circle';
import './User.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputComponent from '@/NBFC/components/DAInputComponent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomButton from '@/NBFC/components/CustomButton';
import SelectComponent from '@/NBFC/components/SelectComponent';
import CustomTextarea from '@/NBFC/components/CustomTextarea';
import { useNavigate } from 'react-router-dom';
import {
	nbfcNameAttribute,
	nbfcGroupNameAttribute,
	nbfcGroupIDAttribute,
	nbfcGroupHeadAttribute,
	nbfcEmailAdderssAttribute,
	registrationNumberAttribute,
	dateOfIncorporationAttribute,
	classOfCompanyAttributes,
	noOfEmployeesAttribute,
	cinNumberAttribute,
	creditRatingsAttributes,
	ccsScoreAttribute,
	overviewAttribute,
	nbfcaddressOneAttribute,
	nbfcaddressTwoAttribute,
	profileStateAttribute,
	profileCityAttribute,
	profilePincodeAttribute,
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
	nbfcName: yup.string().required('NBFC Name is required'),
	nbfcGroupName: yup.string().required('NBFC Group Name is required'),
	nbfcGroupID: yup.string().required('NBFC Group ID is required'),
	nbfcGroupHead: yup.string().required('NBFC Group Head is required'),
	nbfcEmailAdderss: yup
		.string()
		.email('Invalid email address')
		.required('Email is required'),
	registrationNumber: yup.string().required(' Registration Number is required'),
	dateOfIncorporation: yup.string().required('Date Of Incorporationis required'),
	classOfCompany: yup.string().required('Class of Company is required'),
	noOfEmployees: yup.string().required('No Of Employees is required'),
	cinNumber: yup.string().required('CIN Number is required'),
	creditRatings: yup.string().required('Credit Ratings is required'),
	ccsScore: yup.string().required('CCS Score is required'),
});
const Profile = () => {
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

	return (
		<>
			<Grid sx={{ height: '7rem' }}>
				<Grid container sx={{ width: '60%', height: '7rem' }}>
					<Grid
						item
						xs={4}
						className="profile-file-upload-container"
						sx={{ height: '7rem' }}
					>
						<input
							type="file"
							id="fileInput"
							style={{ display: 'none' }}
							ref={fileInputRef}
							onChange={handleFileChange}
						/>
						<Grid
							container
							direction="column"
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								padding: '0rem 4.5rem 0rem 4.5rem',
								cursor: 'pointer',
							}}
							onClick={handleFileClick}
						>
							<Grid item xs={10}>
								<Circle />
							</Grid>
							<Grid item xs={2}>
								<Typography
									sx={{
										fontSize: '0.65rem',
										color: '#C4161C',
										textAlign: 'center',
										cursor: 'pointer',
									}}
								>
									Drag and Drop files here
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
						<Grid
							container
							direction="column"
							sx={{ display: 'flex', padding: '0rem 0rem 0rem 1rem' }}
						>
							<Grid item xs={10}>
								<Typography sx={{ fontSize: '0.8rem' }}>
									<b>Upload your NBFC Logo</b>
								</Typography>
							</Grid>
							<Grid item xs={1} sx={{ marginTop: '0.6rem' }}>
								<Typography
									sx={{
										fontSize: '0.7rem',
										color: 'rgba(135, 148, 194, 0.60)',
									}}
								>
									The image that you choose should be of PNG format
									with transparent background
								</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography
									sx={{
										fontSize: '0.7rem',
										color: 'rgba(135, 148, 194, 0.60)',
									}}
								>
									The recommended size for the app icon is 512 x
									512 pixels
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<form onSubmit={formik.handleSubmit}>
				<div className="sub-title">Basic Info</div>
				<Grid container>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...nbfcNameAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...nbfcGroupNameAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...nbfcGroupIDAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...nbfcGroupHeadAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...nbfcEmailAdderssAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...registrationNumberAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...dateOfIncorporationAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<SelectComponent {...classOfCompanyAttributes(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...noOfEmployeesAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...cinNumberAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<SelectComponent {...creditRatingsAttributes(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...ccsScoreAttribute(formik)} />
					</Grid>
				</Grid>
				<Grid item sm={12} className="pr-2">
					<CustomTextarea {...overviewAttribute(formik)} />
					<hr
						style={{
							borderTop: '1px solid rgba(135, 148, 194, 0.20)',
							margin: '3rem 0 2rem ',
						}}
					/>
					<hr
						style={{
							borderTop: '1px solid rgba(135, 148, 194, 0.20)',
							margin: '3rem 0 2rem ',
						}}
					/>
				</Grid>

				<div className="sub-title">Registered Address</div>
				<Grid container>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...nbfcaddressOneAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...nbfcaddressTwoAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...profileStateAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...profileCityAttribute(formik)} />
					</Grid>
					<Grid item sm={4} className="pr-2">
						<InputComponent {...profilePincodeAttribute(formik)} />
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
							onClick={() => navigate('/panel/nbfc-profile')}
						>
							Update &nbsp;
							<ArrowForwardIosIcon fontSize="11" />
						</CustomButton>
					</Grid>
				</Grid>
			</form>
		</>
	);
};

export default Profile;
