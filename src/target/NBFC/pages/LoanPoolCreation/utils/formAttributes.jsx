import INRIcon from '../../../../../assets/svg/INRIcon';
import AssetIcon from '../../../../../assets/svg/AssetIcon';
import StarIcon from '../../../../../assets/svg/StarIcon';
import PercentageIcon from '../../../../../assets/svg/PercentageIcon';

export const assetClassAttributes = (formik) => {
	return {
		id: 'assetClass',
		name: 'assetClass',
		displayEmpty: true,
		label: (
			<div className="input-label">
				Asset Class<span style={{ color: 'red' }}>*</span>
			</div>
		),
		multiple: false,
		placeholder: 'Select the Asset Class',
		type: 'text',
		value: formik.values.assetClass,
		onChange: (event) => {
			formik.setFieldValue('assetClass', event.target.value);
		},
		onBlur: formik.handleBlur('assetClass'),
		error: formik.touched.assetClass && Boolean(formik.errors.assetClass),
		helperText: formik.touched.assetClass && formik.errors.assetClass,
		disabled: false,
		options: [
			{
				label: 'Asset 1',
				value: 'asset1',
			},
			{
				label: 'Asset 2',
				value: 'asset2',
			},
			{
				label: 'Asset 3',
				value: 'asset3',
			},
		],
		startIcon: <AssetIcon />,
	};
};

export const creditRatingAttributes = (formik) => {
	return {
		id: 'creditRatings',
		name: 'creditRatings',
		displayEmpty: true,
		label: <div className="input-label">Credit Ratings</div>,
		multiple: false,
		placeholder: 'Select Credit Ratings',
		type: 'text',
		value: formik.values.creditRatings,
		onChange: (event) => {
			formik.setFieldValue('creditRatings', event.target.value);
		},
		onBlur: formik.handleBlur('creditRatings'),
		error: formik.touched.creditRatings && Boolean(formik.errors.creditRatings),
		helperText: formik.touched.creditRatings && formik.errors.creditRating,
		disabled: false,
		options: [
			{
				label: 'Credit Rating 1',
				value: 'credit Rating1',
			},
			{
				label: 'Credit Rating 2',
				value: 'credit Rating2',
			},
			{
				label: 'Credit Rating 3',
				value: 'credit Rating3',
			},
		],
		startIcon: <StarIcon />,
	};
};

export const closureDateAttributes = (formik) => {
	return {
		id: 'closureDate',
		name: 'closureDate',
		label: (
			<div className="input-label">
				Date of Birth<span style={{ color: 'red' }}>*</span>
			</div>
		),
		selectedDate: formik.values.closureDate,
		handleDateChange: (event) => {
			formik.setFieldValue('closureDate', event);
		},
		onBlur: formik.handleBlur,
		error: formik.touched.closureDate && Boolean(formik.errors.closureDate),
		helperText: formik.touched.closureDate && formik.errors.closureDate,
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
		id: 'averageIrr',
		name: 'averageIrr',
		label: (
			<div className="input-label">
				Average IRR<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter the Average IRR',
		type: 'number',
		value: formik.values.averageIrr,
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
		error: formik.touched.averageIrr && Boolean(formik.errors.averageIrr),
		helperText: formik.touched.averageIrr && formik.errors.averageIrr,
		disabled: false,
		startIcon: <PercentageIcon />,
	};
};

export const averageBalanceTenorAttributes = (formik) => {
	return {
		id: 'averageBalanceTenor',
		name: 'averageBalanceTenor',
		label: <div className="input-label">Average Balance Tenor</div>,
		placeholder: 'Enter the Average IRR',
		type: 'number',
		value: formik.values.averageBalanceTenor,
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
			formik.touched.averageBalanceTenor &&
			Boolean(formik.errors.averageBalanceTenor),
		helperText:
			formik.touched.averageBalanceTenor && formik.errors.averageBalanceTenor,
		disabled: false,
	};
};

export const averageLoanAmtAttributes = (formik) => {
	return {
		id: 'averageLoanAmt',
		name: 'averageLoanAmt',
		label: <div className="input-label">Average Loan Amount</div>,
		placeholder: 'Enter the Amount',
		type: 'number',
		value: formik.values.averageLoanAmt,
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
			formik.touched.averageLoanAmt && Boolean(formik.errors.averageLoanAmt),
		helperText: formik.touched.averageLoanAmt && formik.errors.averageLoanAmt,
		disabled: false,
		startIcon: <INRIcon />,
	};
};

export const par30Attributes = (formik) => {
	return {
		id: 'par30',
		name: 'par30',
		label: (
			<div className="input-label">
				PAR 30<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter PAR 30',
		type: 'number',
		value: formik.values.par30,
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
		error: formik.touched.par30 && Boolean(formik.errors.par30),
		helperText: formik.touched.par30 && formik.errors.par30,
		disabled: false,
	};
};

export const par60Attributes = (formik) => {
	return {
		id: 'par60',
		name: 'par60',
		label: (
			<div className="input-label">
				PAR 60<span style={{ color: 'red' }}>*</span>
			</div>
		),
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
		label: (
			<div className="input-label">
				PAR 90<span style={{ color: 'red' }}>*</span>
			</div>
		),
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
		id: 'par90Plus',
		name: 'par90Plus',
		label: (
			<div className="input-label">
				PAR 90+<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter PAR 90+',
		type: 'number',
		value: formik.values.par90Plus,
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
		error: formik.touched.par90Plus && Boolean(formik.errors.par90Plus),
		helperText: formik.touched.par90Plus && formik.errors.par90Plus,
		disabled: false,
	};
};

export const nbfcCoveredAttributes = (formik) => {
	return {
		id: 'nbfcCovered',
		name: 'nbfcCovered',
		label: <div className="input-label">No. of NBFC Branches Covered</div>,
		placeholder: 'Enter the No.of NBFC Branches Covered',
		type: 'number',
		value: formik.values.nbfcCovered,
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
		error: formik.touched.nbfcCovered && Boolean(formik.errors.nbfcCovered),
		helperText: formik.touched.nbfcCovered && formik.errors.nbfcCovered,
		disabled: false,
	};
};

export const statesCoveredAttributes = (formik) => {
	return {
		id: 'statesCovered',
		name: 'statesCovered',
		label: <div className="input-label">No. of States Covered</div>,
		placeholder: 'Enter the No.of States Covered',
		type: 'number',
		value: formik.values.statesCovered,
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
		error: formik.touched.statesCovered && Boolean(formik.errors.statesCovered),
		helperText: formik.touched.statesCovered && formik.errors.statesCovered,
		disabled: false,
	};
};

export const districtsCoveredAttributes = (formik) => {
	return {
		id: 'districtsCovered',
		name: 'districtsCovered',
		label: <div className="input-label">No. of Districts Covered</div>,
		placeholder: 'Enter the No.of Districts Covered',
		type: 'number',
		value: formik.values.districtsCovered,
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
			formik.touched.districtsCovered &&
			Boolean(formik.errors.districtsCovered),
		helperText:
			formik.touched.districtsCovered && formik.errors.districtsCovered,
		disabled: false,
	};
};

export const loansCoveredAttributes = (formik) => {
	return {
		id: 'loansCovered',
		name: 'loansCovered',
		label: <div className="input-label">No. of Loans</div>,
		placeholder: 'Enter the No.of Loans',
		type: 'number',
		value: formik.values.loansCovered,
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
		error: formik.touched.loansCovered && Boolean(formik.errors.loansCovered),
		helperText: formik.touched.loansCovered && formik.errors.loansCovered,
		disabled: false,
	};
};

export const firstCycleLoansAttributes = (formik) => {
	return {
		id: 'firstCycleLoans',
		name: 'firstCycleLoans',
		label: <div className="input-label">No. of first cycle loans</div>,
		placeholder: 'Enter the No.of first cycle loans',
		type: 'number',
		value: formik.values.firstCycleLoans,
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
			formik.touched.firstCycleLoans && Boolean(formik.errors.firstCycleLoans),
		helperText: formik.touched.firstCycleLoans && formik.errors.firstCycleLoans,
		disabled: false,
	};
};

export const secondCycleLoansAttributes = (formik) => {
	return {
		id: 'secondCycleLoans',
		name: 'secondCycleLoans',
		label: <div className="input-label">No. of second cycle loans</div>,
		placeholder: 'Enter the No.of second cycle loans',
		type: 'number',
		value: formik.values.secondCycleLoans,
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
			formik.touched.secondCycleLoans &&
			Boolean(formik.errors.secondCycleLoans),
		helperText:
			formik.touched.secondCycleLoans && formik.errors.secondCycleLoans,
		disabled: false,
	};
};
