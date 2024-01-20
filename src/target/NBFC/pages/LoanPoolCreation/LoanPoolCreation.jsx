/* eslint-disable no-unused-vars */
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import SelectComponent from '../../../../components/SelectComponent';
import DatePickerComponent from '../../../../components/DatePickerComponent';
import InputComponent from '../../../../components/InputComponent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
	productAttributes,
	aumAttributes,
	averageBalanceTenorAttributes,
	averageIrrAttributes,
	averageLoanAmtAttributes,
	closureDateAttributes,
	creditRatingAttributes,
	districtsCoveredAttributes,
	firstCycleLoansAttributes,
	loansCoveredAttributes,
	nbfcCoveredAttributes,
	par30PlusAttributes,
	par60Attributes,
	par90Attributes,
	par90PlusAttributes,
	secondCycleLoansAttributes,
	statesCoveredAttributes,
	par01PlusAttributes,
} from './utils/formAttributes';
import CustomButton from '../../../../components/CustomButton';
import './LoanPool.scss';
import React, { useEffect } from 'react';
import DataIntegration from './DataIntegration';
import ReviewPool from './ReviewPool';
import HeaderComp from '@/components/HeaderComponent';
import { ViewLoanPool } from '../ViewLoanPool/ViewLoanPool';
import SearchIcon from '../../../../assets/svg/SearchIcon';
import { useNavigate, useParams } from 'react-router-dom';
import useGetProducts from '@/store/useGetProducts';
import useGetCreditRatings from '@/store/useGetCreditRatings';
import useCreatePool from '@/store/useCreatePool';
import DialogSuccessIcon from '../../../../assets/svg/DialogSuccessIcon';
import ConformationDialogBox from '@/components/ConformationDialogBox';
import useCreatePoolFileUpload from '@/store/useCreatePoolFileUpload';
import { convertIntegersToStrings, formatDate } from '@/utils/common';
import { useAppState } from '@/store/useAppState';

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ pt: 5, pb: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

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
	asset_class: yup.string().required('Product is required'),
	expected_closure_date: yup.string().required('Closure Date is required'),
	credit_ratings: yup.string(),
	aum: yup.string().required('AUM is required'),
	irr: yup.string().required('Average IRR is required'),
	average_balance_tenor: yup.string(),
	average_loan_amount: yup.string(),
	par01Plus: yup.string().required('PAR 01+ is required'),
	par30Plus: yup.string().required('PAR 30 is required'),
	par60: yup.string(),
	par90: yup.string(),
	par90Plus: yup.string(),
	no_ofNbfc_branches_covered: yup.string(),
	no_ofStates_coverd: yup.string(),
	no_ofDistricts_coverd: yup.string(),
	no_of_loans: yup.string(),
	no_ofFirstCycle_loans: yup.string(),
	no_ofSecondCycle_loans: yup.string(),
});

const LoanPoolCreation = () => {
	const [value, setValue] = React.useState(0);
	const productList = useGetProducts();
	const creditRatingList = useGetCreditRatings();
	const poolFileUpload = useCreatePoolFileUpload();
	const [searchVal, setSearchVal] = React.useState('');
	const navigate = useNavigate();
	const [breadCrumbs, setBreadCrumbs] = React.useState([
		{
			data: 'Menu',
			path: null,
		},
		{
			data: 'loan pool Creation',
			path: null,
		},
	]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		if (newValue === 1) {
			setBreadCrumbs([
				{
					data: 'Menu',
					path: null,
				},
				{
					data: 'loan pool Creation',
					path: '/nbfc/panel/lpc/create',
				},
				{
					data: 'loan pool details',
					path: null,
				},
			]);
			navigate('/nbfc/panel/lpc/view');
		} else if (newValue === 0) {
			navigate('/nbfc/panel/lpc/create');
			setBreadCrumbs([
				{
					data: 'Menu',
					path: null,
				},
				{
					data: 'loan pool Creation',
					path: null,
				},
			]);
		}
	};

	const [showForm, setShowForm] = React.useState(true);
	const [showDataIntegration, setShowDataIntegration] = React.useState(false);
	const [showReview, setShowReview] = React.useState(false);
	const [sftpUploadedFile, setSftpUploadedFile] = React.useState();
	const params = useParams();
	const poolCreation = useCreatePool();
	const { createdPoolId } = useAppState();
	const [isSuccessDialog, setIsSuccessDialog] = React.useState(false);
	const [dataIntegrationFormValues, setDataIntegrationFormValues] =
		React.useState();

	const searchAttributes = {
		id: 'searchVal',
		name: 'searchVal',
		placeholder: `Search`,
		type: 'text',
		value: searchVal,
		onChange: (event) => {
			console.log({ event });
			setSearchVal(event.target.value);
		},
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		disabled: false,
		endIcon: <SearchIcon />,
	};

	const formik = useFormik({
		initialValues: {
			asset_class: '',
			expected_closure_date: null,
			credit_ratings: '',
			aum: '',
			irr: '',
			average_balance_tenor: '',
			average_loan_amount: '',
			par01Plus: '',
			par30Plus: '',
			par60: '',
			par90: '',
			par90Plus: '',
			no_ofNbfc_branches_covered: '',
			no_ofStates_coverd: '',
			no_ofDistricts_coverd: '',
			no_of_loans: '',
			no_ofFirstCycle_loans: '',
			no_ofSecondCycle_loans: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			setShowForm(false);
			setShowDataIntegration(true);
		},
	});

	const TabComponent = () => {
		return (
			<>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: 'rgba(112, 126, 174, 0.2)',
						width: 'fit-content',
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
						TabIndicatorProps={{
							style: {
								backgroundColor: '#C4161C',
							},
						}}
						sx={{
							'& .MuiTab-root.Mui-selected': {
								color: '#C4161C',
								fontFamily: 'Poppins, sans-serif',
								fontWeight: '600',
								fontSize: '0.8rem',
							},
							fontFamily: 'Poppins, sans-serif',
							fontSize: '0.8rem',
							fontWeight: '600',
							color: '#8794C2',
						}}
					>
						<Tab
							label="Create Loan Pool"
							sx={{
								paddingBottom: '0rem',
								paddingLeft: '0rem',
								fontSize: '0.8rem',
								fontFamily: 'Poppins, sans-serif',
								textTransform: 'none',
							}}
							{...a11yProps(0)}
						/>
						<Tab
							label="View loan Pool"
							sx={{
								paddingBottom: '0rem',
								fontSize: '0.8rem',
								fontFamily: 'Poppins, sans-serif',
								textTransform: 'none',
							}}
							{...a11yProps(1)}
						/>
					</Tabs>
				</Box>
			</>
		);
	};

	const SearchComp = () => {
		return value === 1 ? (
			<>
				<InputComponent {...searchAttributes} mbVal={'0rem'} />
			</>
		) : null;
	};

	const onCreateLoanPool = () => {
		console.log({ formik });
		console.log({ dataIntegrationFormValues });
		console.log({ sftpUploadedFile });
		const updatedFormikValues = convertIntegersToStrings(formik.values);
		const updatedDataIntegrationValues = convertIntegersToStrings(
			dataIntegrationFormValues,
		);
		let obj = {
			...updatedFormikValues,
			...updatedDataIntegrationValues,
			upload_csvFile_name: null,
			name: 'string',
			sftp_frequency: 'string',
			sftp_no_oftime: 'string',
			par30: 'string',
			bank_id: null,
			expected_closure_date: '2024-01-20',
		};
		delete obj.par30Plus;
		delete obj.par01Plus;
		poolCreation.mutate(obj);
		// poolFileUpload.mutate({ pool_id: 123, file: sftpUploadedFile });
		// setIsSuccessDialog(true);
	};

	useEffect(() => {
		if (params.tabValue === 'create') {
			setValue(0);
			setBreadCrumbs([
				{
					data: 'Menu',
					path: null,
				},
				{
					data: 'loan pool Creation',
					path: null,
				},
			]);
		} else if (params.tabValue === 'view') {
			setValue(1);
			setBreadCrumbs([
				{
					data: 'Menu',
					path: null,
				},
				{
					data: 'loan pool Creation',
					path: '/nbfc/panel/lpc/create',
				},
				{
					data: 'loan pool details',
					path: null,
				},
			]);
			navigate('/nbfc/panel/lpc/view');
		}
	}, [params.tabValue]);

	console.log({ poolCreation });
	useEffect(() => {
		const successData = poolCreation.data;
		if (successData?.pool_id && sftpUploadedFile) {
			poolFileUpload.mutate({
				pool_id: successData?.pool_id,
				file: sftpUploadedFile,
			});
		}
	}, [poolCreation.data]);

	if (poolFileUpload.isSuccess) {
		setIsSuccessDialog(true);
	}

	const handleDialogClose = () => {
		setIsSuccessDialog(false);
		navigate('/nbfc/panel/lpc/view');
	};

	console.log({ sftpUploadedFile });

	return (
		<>
			<HeaderComp
				title={'Loan Pool Creation'}
				breadCrumbs={breadCrumbs}
				TabsComp={TabComponent}
				SearchComp={SearchComp}
			/>
			<CustomTabPanel value={value} index={0}>
				{showForm && (
					<div className="card-block">
						<div className="loan-pool-form-block">
							<div className="title">Enter Loan Pool Info</div>
							<form onSubmit={formik.handleSubmit}>
								<div className="sub-title">Basic Info</div>
								<Grid container>
									<Grid item sm={4} className="pr-2">
										<SelectComponent
											{...productAttributes(
												formik,
												productList.data,
											)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<DatePickerComponent
											{...closureDateAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<SelectComponent
											{...creditRatingAttributes(
												formik,
												creditRatingList?.data,
											)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent {...aumAttributes(formik)} />
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...averageIrrAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...averageBalanceTenorAttributes(
												formik,
											)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...averageLoanAmtAttributes(formik)}
										/>
									</Grid>
								</Grid>
								<div className="sub-title">Additional Info</div>
								<Grid container>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...par01PlusAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...par30PlusAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...par60Attributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...par90Attributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...par90PlusAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...nbfcCoveredAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...statesCoveredAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...districtsCoveredAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...loansCoveredAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...firstCycleLoansAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<InputComponent
											{...secondCycleLoansAttributes(formik)}
										/>
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
											buttonType={'submit'}
											buttonDisabled={false}
											customStyle={customButtonStyle}
										>
											Next &nbsp;
											<ArrowForwardIosIcon fontSize="11" />
										</CustomButton>
									</Grid>
								</Grid>
							</form>
						</div>
					</div>
				)}
				{showDataIntegration && (
					<DataIntegration
						onFileUpload={(file) => setSftpUploadedFile(file)}
						onApiIntegrationFormSubmit={(formValues) => {
							console.log({ formValues });
							if (formValues) {
								setDataIntegrationFormValues(formValues);
								setShowDataIntegration(false);
								setShowReview(true);
							}
						}}
					/>
				)}
				{showReview && (
					<ReviewPool
						onCreateLoanPool={onCreateLoanPool}
						formikValues={formik.values}
					/>
				)}
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<ViewLoanPool />
			</CustomTabPanel>
			<ConformationDialogBox
				open={isSuccessDialog}
				handleClose={handleDialogClose}
				title="Dialog Title"
				content="The Loan pool has been created Successfully"
				imageComponent={<DialogSuccessIcon />}
				buttonText3="Okay"
				onButtonClick3={handleDialogClose}
			/>
		</>
	);
};

export default LoanPoolCreation;
