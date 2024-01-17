import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import SelectComponent from '../../../../components/SelectComponent';
import DatePickerComponent from '../../../../components/DatePickerComponent';
import InputComponent from '../../../../components/InputComponent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
	assetClassAttributes,
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
	par30Attributes,
	par60Attributes,
	par90Attributes,
	par90PlusAttributes,
	secondCycleLoansAttributes,
	statesCoveredAttributes,
} from './utils/formAttributes';
import CustomButton from '../../../../components/CustomButton';
import './LoanPool.scss';
import React from 'react';
import DataIntegration from './DataIntegration';
import ReviewPool from './ReviewPool';

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
	assetClass: yup.string().required('Asset Class is required'),
	creditRatings: yup.string(),
	aum: yup.string().required('AUM is required'),
	averageIrr: yup.string().required('Average IRR is required'),
	averageBalanceTenor: yup.string(),
	averageLoanAmt: yup.string(),
	par30: yup.string().required('PAR 30 is required'),
	par60: yup.string().required('PAR 60 is required'),
	par90: yup.string().required('PAR 90 is required'),
	par90Plus: yup.string().required('PAR 90 Plus is required'),
	nbfcCovered: yup.string(),
	statesCovered: yup.string(),
	districtsCovered: yup.string(),
	loansCovered: yup.string(),
	firstCycleLoans: yup.string(),
	secondCycleLoans: yup.string(),
});

const LoanPoolCreation = () => {
	const [showForm, setShowForm] = React.useState(true);
	const [showDataIntegration, setShowDataIntegration] = React.useState(false);
	const [showReview, setShowReview] = React.useState(false);

	const formik = useFormik({
		initialValues: {
			assetClass: '',
			creditRatings: '',
			aum: '',
			averageIrr: '',
			averageBalanceTenor: '',
			averageLoanAmt: '',
			closureDate: null,
			par30: '',
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

	return (
		<>
			{showForm && (
				<div className="card-block">
					<div className="loan-pool-form-block">
						<div className="title">Enter Loan Pool Info</div>
						<form onSubmit={formik.handleSubmit}>
							<div className="sub-title">Basic Info</div>
							<Grid container>
								<Grid item sm={4} className="pr-2">
									<SelectComponent
										{...assetClassAttributes(formik)}
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
										{...averageBalanceTenorAttributes(formik)}
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
									<InputComponent {...par30Attributes(formik)} />
								</Grid>
								<Grid item sm={4} className="pr-2">
									<InputComponent {...par60Attributes(formik)} />
								</Grid>
								<Grid item sm={4} className="pr-2">
									<InputComponent {...par90Attributes(formik)} />
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
		</>
	);
};

export default LoanPoolCreation;
