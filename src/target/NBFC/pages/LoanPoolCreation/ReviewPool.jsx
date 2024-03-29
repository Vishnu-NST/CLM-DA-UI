import EditImg from '../../../../assets/svg/EditImg';
import { Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './LoanPool.scss';
import CustomButton from '@/components/CustomButton';
import { formatDate } from '@/utils/common';

const customButtonStyle = {
	borderRadius: '7px',
	padding: '0.4rem 1.5rem',
	color: '#FFFFFF',
	backgroundColor: '#C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
	fontWeight: '500',
};

const backBtnStyle = {
	borderRadius: '7px',
	padding: '0.4rem 2rem',
	color: '#C4161C',
	border: '1px solid #C4161C',
	backgroundColor: 'white',
	'&:hover': {
		color: '#C4161C',
		border: '1px solid #C4161C',
		backgroundColor: 'white',
	},
	fontWeight: '500',
};

const editBtnStyle = {
	border: '1px solid rgba(135, 148, 194, 0.2)',
	borderRadius: '8px',
	color: 'rgba(135, 148, 194, 1)',
	backgroundColor: 'rgba(248, 249, 251, 1)',
};

const ReviewPool = ({ formikValues, onCreateLoanPool }) => {
	console.log({ formikValues }, 'review');
	return (
		<div className="card-block">
			<div className="loan-pool-form-block">
				<div className="flex-between">
					<div className="title">Review Loan Pool</div>
					<CustomButton customStyle={editBtnStyle}>
						<EditImg />
						&nbsp; Edit
					</CustomButton>
				</div>
				{/* Basic info */}
				<div className="review-card">
					<div className="review-title">Basic Info</div>
					<Grid container className="mt-2" rowGap={3}>
						<Grid item sm={3}>
							<div className="review-data">
								{formikValues?.asset_class}
							</div>
							<div className="review-sub-title">Product</div>
						</Grid>
						<Grid item sm={3}>
							<div className="review-data">
								{formatDate(formikValues?.expected_closure_date)}
							</div>
							<div className="review-sub-title">
								Expected Closure Date
							</div>
						</Grid>
						<Grid item sm={3}>
							<div className="review-data">
								{formikValues?.credit_ratings}
							</div>
							<div className="review-sub-title">Credit Ratings</div>
						</Grid>
						<Grid item sm={3}>
							<div className="review-data">{formikValues?.aum}</div>
							<div className="review-sub-title">AUM</div>
						</Grid>
						<Grid item sm={3}>
							<div className="review-data">{formikValues?.irr}</div>
							<div className="review-sub-title">Average IRR</div>
						</Grid>
						<Grid item sm={3}>
							<div className="review-data">
								{formikValues?.average_balance_tenor}
							</div>
							<div className="review-sub-title">
								Average Balance Tenor
							</div>
						</Grid>
						<Grid item sm={3}>
							<div className="review-data">
								{formikValues?.average_loan_amount}/-
							</div>
							<div className="review-sub-title">
								Average Loan Amount
							</div>
						</Grid>
					</Grid>
				</div>
				{/* Additional Info */}
				<div className="review-card">
					<div className="review-title">Additional Info</div>
					<Grid container className="mt-2" rowGap={3}>
						<Grid item sm={2.4}>
							<div className="review-data">
								{formikValues?.par01plus}
							</div>
							<div className="review-sub-title">PAR 01+</div>
						</Grid>
						<Grid item sm={2.4}>
							<div className="review-data">
								{formikValues?.par30plus}
							</div>
							<div className="review-sub-title">PAR 30+</div>
						</Grid>
						<Grid item sm={2.4}>
							<div className="review-data">{formikValues?.par60}</div>
							<div className="review-sub-title">PAR 60</div>
						</Grid>
						<Grid item sm={2.4}>
							<div className="review-data">{formikValues?.par90}</div>
							<div className="review-sub-title">PAR 90</div>
						</Grid>
						<Grid item sm={2.4}>
							<div className="review-data">
								{formikValues?.par90plus}
							</div>
							<div className="review-sub-title">PAR 90+</div>
						</Grid>
						<Grid item sm={2.4}>
							<div className="review-data">
								{formikValues?.no_ofnbfc_branches_covered}
							</div>
							<div className="review-sub-title">
								No.of NBFC Covered
							</div>
						</Grid>
						<Grid item sm={2.4}>
							<div className="review-data">
								{formikValues?.no_ofstates_covered}
							</div>
							<div className="review-sub-title">
								No.of States Covered
							</div>
						</Grid>
						<Grid item sm={2.4}>
							<div className="review-data">
								{formikValues?.no_ofdistricts_covered}
							</div>
							<div className="review-sub-title">
								No.of Districts Covered
							</div>
						</Grid>
						<Grid item sm={2.4}>
							<div className="review-data">
								{formikValues?.no_of_loans}
							</div>
							<div className="review-sub-title">No.of Loans</div>
						</Grid>
						<Grid item sm={2.4}>
							<div className="review-data">
								{formikValues?.no_ofsecondcycle_loans}
							</div>
							<div className="review-sub-title">
								No.of Second Cycle Loans
							</div>
						</Grid>
						<Grid item sm={2.4}>
							<div className="review-data">
								{formikValues?.no_offirstcycle_loans}
							</div>
							<div className="review-sub-title">
								No.of First Cycle Loans
							</div>
						</Grid>
					</Grid>
				</div>
				<Grid container className="mt-3">
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
							customStyle={backBtnStyle}
						>
							Back
						</CustomButton>
						&nbsp; &nbsp;&nbsp;
						<CustomButton
							buttonDisabled={false}
							customStyle={customButtonStyle}
							onClick={onCreateLoanPool}
						>
							Create Pool &nbsp;
							<ArrowForwardIosIcon fontSize="11" />
						</CustomButton>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default ReviewPool;
