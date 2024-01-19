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
	closureDate: yup.string().required('Closure Date is required'),
	product: yup.string().required('Product is required'),
	creditRatings: yup.string(),
	aum: yup.string().required('AUM is required'),
	averageIrr: yup.string().required('Average IRR is required'),
	averageBalanceTenor: yup.string(),
	averageLoanAmt: yup.string(),
	par01Plus: yup.string().required('PAR 01+ is required'),
	par30Plus: yup.string().required('PAR 30 is required'),
	par60: yup.string(),
	par90: yup.string(),
	par90Plus: yup.string(),
	nbfcCovered: yup.string(),
	statesCovered: yup.string(),
	districtsCovered: yup.string(),
	loansCovered: yup.string(),
	firstCycleLoans: yup.string(),
	secondCycleLoans: yup.string(),
});

const LoanPoolCreation = () => {
	const [value, setValue] = React.useState(0);
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
	const params = useParams();

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
			product: '',
			creditRatings: '',
			aum: '',
			averageIrr: '',
			averageBalanceTenor: '',
			averageLoanAmt: '',
			closureDate: null,
			par01Plus: '',
			par30Plus: '',
			par60: '',
			par90: '',
			par90Plus: '',
			nbfcCovered: '',
			statesCovered: '',
			districtsCovered: '',
			loansCovered: '',
			firstCycleLoans: '',
			secondCycleLoans: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log({ values });
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
							}}
							{...a11yProps(0)}
						/>
						<Tab
							label="View loan Pool"
							sx={{
								paddingBottom: '0rem',
								fontSize: '0.8rem',
								fontFamily: 'Poppins, sans-serif',
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
											{...productAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<DatePickerComponent
											{...closureDateAttributes(formik)}
										/>
									</Grid>
									<Grid item sm={4} className="pr-2">
										<SelectComponent
											{...creditRatingAttributes(formik)}
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
						onSubmit={() => {
							setShowDataIntegration(false);
							setShowReview(true);
						}}
					/>
				)}
				{showReview && <ReviewPool />}
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<ViewLoanPool />
			</CustomTabPanel>
		</>
	);
};

export default LoanPoolCreation;
