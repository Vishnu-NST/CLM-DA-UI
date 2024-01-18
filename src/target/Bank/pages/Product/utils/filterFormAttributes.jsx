export const allFiltersDaysLeftAttribute = (formik) => {
	return {
		id: 'allFiltersDaysLeft',
		name: 'allFiltersDaysLeft',
		label: <div className="input-label">Days Left</div>,
		placeholder: 'Enter Days',
		type: 'number',
		value: formik.values.allFiltersDaysLeft,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.allFiltersDaysLeft &&
			Boolean(formik.errors.allFiltersDaysLeft),
		helperText:
			formik.touched.allFiltersDaysLeft && formik.errors.allFiltersDaysLeft,
		disabled: false,
	};
};
export const par30Attribute = (formik) => {
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
		error: formik.touched.par30 && Boolean(formik.errors.par30),
		helperText: formik.touched.par30 && formik.errors.par30,
		disabled: false,
	};
};
export const par60Attribute = (formik) => {
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
		error: formik.touched.par60 && Boolean(formik.errors.par60),
		helperText: formik.touched.par60 && formik.errors.par60,
		disabled: false,
	};
};
export const par90Attribute = (formik) => {
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
		error: formik.touched.par90 && Boolean(formik.errors.par90),
		helperText: formik.touched.par90 && formik.errors.par90,
		disabled: false,
	};
};
export const par90PlusAttribute = (formik) => {
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
		error: formik.touched.par90Plus && Boolean(formik.errors.par90Plus),
		helperText: formik.touched.par90Plus && formik.errors.par90Plus,
		disabled: false,
	};
};
export const loanassetnbfcbranch = (formik) => {
	return {
		id: 'loanassetnbfcbranch',
		name: 'loanassetnbfcbranch',
		label: <div className="input-label">Max.Loan Asset per NBFC Branch</div>,
		placeholder: '3.5%',
		type: 'number',
		value: formik.values.loanassetnbfcbranch,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.loanassetnbfcbranch &&
			Boolean(formik.errors.loanassetnbfcbranch),
		helperText:
			formik.touched.loanassetnbfcbranch && formik.errors.loanassetnbfcbranch,
		disabled: false,
		additionalText:
			'Not more than X% of the loan assets comprising the Pool should have originated in any 1 NBFC MFI branch.',
	};
};
export const loanAssetPerDistrictAttribute = (formik) => {
	return {
		id: 'loanAssetPerDistrict',
		name: 'loanAssetPerDistrict',
		label: <div className="input-label">Max.Loan Asset per District</div>,
		placeholder: '3.5%',
		type: 'number',
		value: formik.values.loanAssetPerDistrict,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.loanAssetPerDistrict &&
			Boolean(formik.errors.loanAssetPerDistrict),
		helperText:
			formik.touched.loanAssetPerDistrict &&
			formik.errors.loanAssetPerDistrict,
		disabled: false,
		additionalText:
			'Not more than X% of the loan assets comprising the Pool should have been originated in any 1 district in India.',
	};
};
export const loanAssetPerStateAttribute = (formik) => {
	return {
		id: 'loanAssetPerState',
		name: 'loanAssetPerState',
		label: <div className="input-label">Max. Loan Asset per State</div>,
		placeholder: '3.5%',
		type: 'number',
		value: formik.values.loanAssetPerState,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.loanAssetPerState &&
			Boolean(formik.errors.loanAssetPerState),
		helperText:
			formik.touched.loanAssetPerState && formik.errors.loanAssetPerState,
		disabled: false,
		additionalText:
			'Not more than X% of the Facilities comprising the Pool should have been originated in any 1 State in India.',
	};
};
export const par30PerNBFCBranchAttribute = (formik) => {
	return {
		id: 'par30PerNBFCBranch',
		name: 'par30PerNBFCBranch',
		label: <div className="input-label">Max. PAR 30 per NBFC Branch</div>,
		placeholder: '3.5%',
		type: 'number',
		value: formik.values.par30PerNBFCBranch,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.par30PerNBFCBranch &&
			Boolean(formik.errors.par30PerNBFCBranch),
		helperText:
			formik.touched.par30PerNBFCBranch && formik.errors.par30PerNBFCBranch,
		disabled: false,
		additionalText:
			'Not more than X% of the Facilities comprising the Pool should have been originated in any 1 State in India.',
	};
};
export const par60PerNBFCBranchAttribute = (formik) => {
	return {
		id: 'par60PerNBFCBranch',
		name: 'par60PerNBFCBranch',
		label: <div className="input-label">Max. PAR 60 per NBFC Branch</div>,
		placeholder: '3.5%',
		type: 'number',
		value: formik.values.par60PerNBFCBranch,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.par60PerNBFCBranch &&
			Boolean(formik.errors.par60PerNBFCBranch),
		helperText:
			formik.touched.par60PerNBFCBranch && formik.errors.par60PerNBFCBranch,
		disabled: false,
		additionalText:
			'Not more than X% of the loan assets with SMA 1 comprising the Pool for the selected NBFC MFI Branch',
	};
};
export const par90PerNBFCBranchAttribute = (formik) => {
	return {
		id: 'par90PerNBFCBranch',
		name: 'par90PerNBFCBranch',
		label: <div className="input-label">Max. PAR 90 per NBFC Branch</div>,
		placeholder: '3.5%',
		type: 'number',
		value: formik.values.par90PerNBFCBranch,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.par90PerNBFCBranch &&
			Boolean(formik.errors.par90PerNBFCBranch),
		helperText:
			formik.touched.par90PerNBFCBranch && formik.errors.par90PerNBFCBranch,
		disabled: false,
		additionalText:
			'Not more than X% of the loan assets with SMA 2 comprising the Pool for the selected NBFC MFI Branch',
	};
};
