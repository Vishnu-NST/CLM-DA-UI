import INRIcon from '../../../../../assets/svg/INRIcon';
import AssetIcon from '../../../../../assets/svg/AssetIcon';
import StarIcon from '../../../../../assets/svg/StarIcon';
import PercentageIcon from '../../../../../assets/svg/PercentageIcon';

export const productAttributes = (formik, productList) => {
	return {
		id: 'asset_class',
		name: 'asset_class',
		displayEmpty: true,
		label: (
			<div className="input-label">
				Product<span style={{ color: 'red' }}>*</span>
			</div>
		),
		multiple: false,
		placeholder: 'Select the Product',
		type: 'text',
		value: formik.values.asset_class,
		onChange: (event) => {
			formik.setFieldValue('asset_class', event.target.value);
		},
		onBlur: formik.handleBlur('asset_class'),
		error: formik.touched.asset_class && Boolean(formik.errors.asset_class),
		helperText: formik.touched.asset_class && formik.errors.asset_class,
		disabled: false,
		options:
			(productList?.length &&
				productList.map((item) => ({
					value: item?.name || '',
					label: item?.name || '',
				}))) ||
			[],
		startIcon: <AssetIcon />,
	};
};

export const poolNameAttributes = (formik) => {
	return {
		id: 'poolName',
		name: 'poolName',
		displayEmpty: true,
		label: (
			<div className="input-label">
				Choose Pool<span style={{ color: 'red' }}>*</span>
			</div>
		),
		multiple: false,
		placeholder: 'Choose Pool name',
		type: 'text',
		value: formik.values.poolName,
		onChange: (event) => {
			formik.setFieldValue('poolName', event.target.value);
		},
		onBlur: formik.handleBlur('poolName'),
		error: formik.touched.poolName && Boolean(formik.errors.poolName),
		helperText: formik.touched.poolName && formik.errors.poolName,
		disabled: false,
		options: [
			{
				label: 'Pool 1',
				value: 'product1',
			},
			{
				label: 'Pool 2',
				value: 'product2',
			},
			{
				label: 'Pool 3',
				value: 'product3',
			},
		],
		startIcon: <AssetIcon />,
	};
};

export const creditRatingAttributes = (formik, creditRatingList) => {
	return {
		id: 'credit_ratings',
		name: 'credit_ratings',
		displayEmpty: true,
		label: <div className="input-label">Credit Ratings</div>,
		multiple: false,
		placeholder: 'Select Credit Ratings',
		type: 'text',
		value: formik.values.credit_ratings,
		onChange: (event) => {
			formik.setFieldValue('credit_ratings', event.target.value);
		},
		onBlur: formik.handleBlur('credit_ratings'),
		error:
			formik.touched.credit_ratings && Boolean(formik.errors.credit_ratings),
		helperText: formik.touched.credit_ratings && formik.errors.credit_ratings,
		disabled: false,
		options:
			(creditRatingList?.length &&
				creditRatingList.map((item) => ({
					value: item?.desc || '',
					label: item?.desc || '',
				}))) ||
			[],
		startIcon: <StarIcon />,
	};
};

export const closureDateAttributes = (formik) => {
	return {
		id: 'expected_closure_date',
		name: 'expected_closure_date',
		label: (
			<div className="input-label">
				Expected closure Date<span style={{ color: 'red' }}>*</span>
			</div>
		),
		selectedDate: formik.values.expected_closure_date,
		handleDateChange: (event) => {
			formik.setFieldValue('expected_closure_date', event);
		},
		onBlur: formik.handleBlur,
		error:
			formik.touched.expected_closure_date &&
			Boolean(formik.errors.expected_closure_date),
		helperText:
			formik.touched.expected_closure_date &&
			formik.errors.expected_closure_date,
	};
};

export const fromDateAttributes = (formik) => {
	return {
		id: 'fromDate',
		name: 'fromDate',
		label: (
			<div className="input-label">
				Choose From Date<span style={{ color: 'red' }}>*</span>
			</div>
		),
		selectedDate: formik.values.fromDate,
		handleDateChange: (event) => {
			formik.setFieldValue('fromDate', event);
		},
		onBlur: formik.handleBlur,
		error: formik.touched.fromDate && Boolean(formik.errors.fromDate),
		helperText: formik.touched.fromDate && formik.errors.fromDate,
	};
};
export const toDateAttributes = (formik) => {
	return {
		id: 'toDate',
		name: 'ToDate',
		label: (
			<div className="input-label">
				Choose To Date<span style={{ color: 'red' }}>*</span>
			</div>
		),
		selectedDate: formik.values.toDate,
		handleDateChange: (event) => {
			formik.setFieldValue('toDate', event);
		},
		onBlur: formik.handleBlur,
		error: formik.touched.toDate && Boolean(formik.errors.toDate),
		helperText: formik.touched.toDate && formik.errors.toDate,
	};
};

export const aumAttributes = (formik) => {
	return {
		id: 'aum',
		name: 'aum',
		label: (
			<div className="input-label">
				AUM<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter the Amount',
		type: 'number',
		value: formik.values.aum,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error: formik.touched.aum && Boolean(formik.errors.aum),
		helperText: formik.touched.aum && formik.errors.aum,
		disabled: false,
		startIcon: <INRIcon />,
	};
};

export const averageIrrAttributes = (formik) => {
	return {
		id: 'irr',
		name: 'irr',
		label: (
			<div className="input-label">
				Average IRR<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter the Average IRR',
		type: 'number',
		value: formik.values.irr,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error: formik.touched.irr && Boolean(formik.errors.irr),
		helperText: formik.touched.irr && formik.errors.irr,
		disabled: false,
		startIcon: <PercentageIcon />,
	};
};

export const averageBalanceTenorAttributes = (formik) => {
	return {
		id: 'average_balance_tenor',
		name: 'average_balance_tenor',
		label: <div className="input-label">Average Balance Tenor</div>,
		placeholder: 'Enter the Average Balance Tenor',
		type: 'number',
		value: formik.values.average_balance_tenor,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error:
			formik.touched.average_balance_tenor &&
			Boolean(formik.errors.average_balance_tenor),
		helperText:
			formik.touched.average_balance_tenor &&
			formik.errors.average_balance_tenor,
		disabled: false,
	};
};

export const averageLoanAmtAttributes = (formik) => {
	return {
		id: 'average_loan_amount',
		name: 'average_loan_amount',
		label: <div className="input-label">Average Loan Amount</div>,
		placeholder: 'Enter the Average Loan Amount',
		type: 'number',
		value: formik.values.average_loan_amount,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error:
			formik.touched.average_loan_amount &&
			Boolean(formik.errors.average_loan_amount),
		helperText:
			formik.touched.average_loan_amount && formik.errors.average_loan_amount,
		disabled: false,
		startIcon: <INRIcon />,
	};
};

export const par01PlusAttributes = (formik) => {
	return {
		id: 'par01plus',
		name: 'par01plus',
		label: (
			<div className="input-label">
				PAR 01+<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter PAR 01+',
		type: 'number',
		value: formik.values.par01plus,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error: formik.touched.par01plus && Boolean(formik.errors.par01plus),
		helperText: formik.touched.par01plus && formik.errors.par01plus,
		disabled: false,
	};
};

export const par30PlusAttributes = (formik) => {
	return {
		id: 'par30plus',
		name: 'par30plus',
		label: (
			<div className="input-label">
				PAR 30+<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter PAR 30+',
		type: 'number',
		value: formik.values.par30plus,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error: formik.touched.par30plus && Boolean(formik.errors.par30plus),
		helperText: formik.touched.par30plus && formik.errors.par30plus,
		disabled: false,
	};
};

export const par60Attributes = (formik) => {
	return {
		id: 'par60',
		name: 'par60',
		label: <div className="input-label">PAR 60</div>,
		placeholder: 'Enter PAR 60',
		type: 'number',
		value: formik.values.par60,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error: formik.touched.par60 && Boolean(formik.errors.par60),
		helperText: formik.touched.par60 && formik.errors.par60,
		disabled: false,
	};
};

export const par90Attributes = (formik) => {
	return {
		id: 'par90',
		name: 'par90',
		label: <div className="input-label">PAR 90</div>,
		placeholder: 'Enter PAR 90',
		type: 'number',
		value: formik.values.par90,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error: formik.touched.par90 && Boolean(formik.errors.par90),
		helperText: formik.touched.par90 && formik.errors.par90,
		disabled: false,
	};
};

export const par90PlusAttributes = (formik) => {
	return {
		id: 'par90plus',
		name: 'par90plus',
		label: <div className="input-label">PAR 90+</div>,
		placeholder: 'Enter PAR 90+',
		type: 'number',
		value: formik.values.par90plus,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error: formik.touched.par90plus && Boolean(formik.errors.par90plus),
		helperText: formik.touched.par90plus && formik.errors.par90plus,
		disabled: false,
	};
};

export const nbfcCoveredAttributes = (formik) => {
	return {
		id: 'no_ofnbfc_branches_covered',
		name: 'no_ofnbfc_branches_covered',
		label: <div className="input-label">No. of NBFC Branches Covered</div>,
		placeholder: 'Enter the No.of NBFC Branches Covered',
		type: 'number',
		value: formik.values.no_ofnbfc_branches_covered,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error:
			formik.touched.no_ofnbfc_branches_covered &&
			Boolean(formik.errors.no_ofnbfc_branches_covered),
		helperText:
			formik.touched.no_ofnbfc_branches_covered &&
			formik.errors.no_ofnbfc_branches_covered,
		disabled: false,
	};
};

export const statesCoveredAttributes = (formik) => {
	return {
		id: 'no_ofstates_covered',
		name: 'no_ofstates_covered',
		label: <div className="input-label">No. of States Covered</div>,
		placeholder: 'Enter the No.of States Covered',
		type: 'number',
		value: formik.values.no_ofstates_covered,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error:
			formik.touched.no_ofstates_covered &&
			Boolean(formik.errors.no_ofstates_covered),
		helperText:
			formik.touched.no_ofstates_covered && formik.errors.no_ofstates_covered,
		disabled: false,
	};
};

export const districtsCoveredAttributes = (formik) => {
	return {
		id: 'no_ofdistricts_covered',
		name: 'no_ofdistricts_covered',
		label: <div className="input-label">No. of Districts Covered</div>,
		placeholder: 'Enter the No.of Districts Covered',
		type: 'number',
		value: formik.values.no_ofdistricts_covered,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error:
			formik.touched.no_ofdistricts_covered &&
			Boolean(formik.errors.no_ofdistricts_covered),
		helperText:
			formik.touched.no_ofdistricts_covered &&
			formik.errors.no_ofdistricts_covered,
		disabled: false,
	};
};

export const loansCoveredAttributes = (formik) => {
	return {
		id: 'no_of_loans',
		name: 'no_of_loans',
		label: <div className="input-label">No. of Loans</div>,
		placeholder: 'Enter the No.of Loans',
		type: 'number',
		value: formik.values.no_of_loans,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error: formik.touched.no_of_loans && Boolean(formik.errors.no_of_loans),
		helperText: formik.touched.no_of_loans && formik.errors.no_of_loans,
		disabled: false,
	};
};

export const firstCycleLoansAttributes = (formik) => {
	return {
		id: 'no_offirstcycle_loans',
		name: 'no_offirstcycle_loans',
		label: (
			<div className="input-label">First cycle loans Outstanding Amount</div>
		),
		placeholder: 'Enter the First cycle loans Outstanding Amount',
		type: 'number',
		value: formik.values.no_offirstcycle_loans,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error:
			formik.touched.no_offirstcycle_loans &&
			Boolean(formik.errors.no_offirstcycle_loans),
		helperText:
			formik.touched.no_offirstcycle_loans &&
			formik.errors.no_offirstcycle_loans,
		disabled: false,
	};
};

export const secondCycleLoansAttributes = (formik) => {
	return {
		id: 'no_ofsecondcycle_loans',
		name: 'no_ofsecondcycle_loans',
		label: (
			<div className="input-label">Second cycle loans Outstanding Amount</div>
		),
		placeholder: 'Enter the Second cycle loans Outstanding Amount',
		type: 'number',
		value: formik.values.no_ofsecondcycle_loans,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		error:
			formik.touched.no_ofsecondcycle_loans &&
			Boolean(formik.errors.no_ofsecondcycle_loans),
		helperText:
			formik.touched.no_ofsecondcycle_loans &&
			formik.errors.no_ofsecondcycle_loans,
		disabled: false,
	};
};
