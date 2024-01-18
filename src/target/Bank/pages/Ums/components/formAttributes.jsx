export const userNameAttribute = (formik) => {
	return {
		id: 'userName',
		name: 'userName',
		label: (
			<div className="input-label">
				User Name<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter Your Name',
		type: 'text',
		value: formik.values.userName,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.userName && Boolean(formik.errors.userName),
		helperText: formik.touched.userName && formik.errors.userName,
		disabled: false,
	};
};
export const userOfficialEmailAdderssAttribute = (formik) => {
	return {
		id: 'userOfficialEmailAdderss',
		name: 'userOfficialEmailAdderss',
		label: (
			<div className="input-label">
				User Official Email Adderss<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter Your Email Adderss',
		type: 'email',
		value: formik.values.userOfficialEmailAdderss,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.userOfficialEmailAdderss &&
			Boolean(formik.errors.userOfficialEmailAdderss),
		helperText:
			formik.touched.userOfficialEmailAdderss &&
			formik.errors.userOfficialEmailAdderss,
		disabled: false,
	};
};
export const userRoleAttribute = (formik) => {
	return {
		id: 'userRole',
		name: 'userRole',
		label: (
			<div className="input-label">
				User Role<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter Your Role',
		type: 'text',
		value: formik.values.userRole,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.userRole && Boolean(formik.errors.userRole),
		helperText: formik.touched.userRole && formik.errors.userRole,
		disabled: false,
	};
};
export const mobileNumberAttribute = (formik) => {
	return {
		id: 'mobileNumber',
		name: 'mobileNumber',
		label: (
			<div className="input-label">
				Mobile Number<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter Your Mobile Number',
		type: 'tel',
		value: formik.values.mobileNumber,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber),
		helperText: formik.touched.mobileNumber && formik.errors.mobileNumber,
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
	};
};
export const addressOneAttribute = (formik) => {
	return {
		id: 'addressOne',
		name: 'addressOne',
		label: <div className="input-label">Address 1</div>,
		placeholder: 'Enter Your Address',
		type: 'text',
		value: formik.values.addressOne,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.addressOne && Boolean(formik.errors.addressOne),
		helperText: formik.touched.addressOne && formik.errors.addressOne,
		disabled: false,
	};
};
export const addressTwoAttribute = (formik) => {
	return {
		id: 'addressTwo',
		name: 'addressTwo',
		label: <div className="input-label">Address 2</div>,
		placeholder: 'Enter Your Second Address',
		type: 'text',
		value: formik.values.addressTwo,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.addressTwo && Boolean(formik.errors.addressTwo),
		helperText: formik.touched.addressTwo && formik.errors.addressTwo,
		disabled: false,
	};
};
export const stageAttribute = (formik) => {
	return {
		id: 'stage',
		name: 'stage',
		label: <div className="input-label">Stage</div>,
		placeholder: 'Enter Your stage',
		type: 'text',
		value: formik.values.stage,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.stage && Boolean(formik.errors.stage),
		helperText: formik.touched.stage && formik.errors.stage,
		disabled: false,
	};
};
export const cityAttribute = (formik) => {
	return {
		id: 'city',
		name: 'city',
		label: <div className="input-label">City</div>,
		placeholder: 'Enter Your City',
		type: 'text',
		value: formik.values.city,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.city && Boolean(formik.errors.city),
		helperText: formik.touched.city && formik.errors.city,
		disabled: false,
	};
};
export const pinCodeAttribute = (formik) => {
	return {
		id: 'pinCode',
		name: 'pinCode',
		label: <div className="input-label">Pin Code</div>,
		placeholder: 'Enter Your pincode',
		type: 'number',
		value: formik.values.pinCode,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.pinCode && Boolean(formik.errors.pinCode),
		helperText: formik.touched.pinCode && formik.errors.pinCode,
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
	};
};
export const bankNameAttribute = (formik) => {
	return {
		id: 'bankName',
		name: 'bankName',
		label: (
			<div className="input-label">
				Bank Name<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter Bank Name',
		type: 'text',
		value: formik.values.bankName,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.bankName && Boolean(formik.errors.bankName),
		helperText: formik.touched.bankName && formik.errors.bankName,
		disabled: false,
	};
};
// export const nbfcGroupNameAttribute = (formik) => {
// 	return {
// 		id: 'nbfcGroupName',
// 		name: 'nbfcGroupName',
// 		label: (
// 			<div className="input-label">
// 				NBFC Group Name<span style={{ color: 'red' }}>*</span>
// 			</div>
// 		),
// 		placeholder: 'Enter NBFC group name',
// 		type: 'text',
// 		value: formik.values.nbfcGroupName,
// 		onChange: formik.handleChange,
// 		onBlur: formik.handleBlur,
// 		error: formik.touched.nbfcGroupName && Boolean(formik.errors.nbfcGroupName),
// 		helperText: formik.touched.nbfcGroupName && formik.errors.nbfcGroupName,
// 		disabled: false,
// 	};
// };
// export const nbfcGroupIDAttribute = (formik) => {
// 	return {
// 		id: 'nbfcGroupID',
// 		name: 'nbfcGroupID',
// 		label: (
// 			<div className="input-label">
// 				NBFC Group ID<span style={{ color: 'red' }}>*</span>
// 			</div>
// 		),
// 		placeholder: 'Enter NBFC group ID',
// 		type: 'text',
// 		value: formik.values.nbfcGroupID,
// 		onChange: formik.handleChange,
// 		onBlur: formik.handleBlur,
// 		error: formik.touched.nbfcGroupID && Boolean(formik.errors.nbfcGroupID),
// 		helperText: formik.touched.nbfcGroupID && formik.errors.nbfcGroupID,
// 		disabled: false,
// 	};
// };
// export const nbfcGroupHeadAttribute = (formik) => {
// 	return {
// 		id: 'nbfcGroupHead',
// 		name: 'nbfcGroupHead',
// 		label: (
// 			<div className="input-label">
// 				NBFC Group Head<span style={{ color: 'red' }}>*</span>
// 			</div>
// 		),
// 		placeholder: 'Enter NBFC group head',
// 		type: 'text',
// 		value: formik.values.nbfcGroupHead,
// 		onChange: formik.handleChange,
// 		onBlur: formik.handleBlur,
// 		error: formik.touched.nbfcGroupHead && Boolean(formik.errors.nbfcGroupHead),
// 		helperText: formik.touched.nbfcGroupHead && formik.errors.nbfcGroupHead,
// 		disabled: false,
// 	};
// };
export const nbfcEmailAdderssAttribute = (formik) => {
	return {
		id: 'nbfcEmailAdderss',
		name: 'nbfcEmailAdderss',
		label: (
			<div className="input-label">
				Email Adderss<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter Email Adderss',
		type: 'email',
		value: formik.values.nbfcEmailAdderss,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.nbfcEmailAdderss &&
			Boolean(formik.errors.nbfcEmailAdderss),
		helperText:
			formik.touched.nbfcEmailAdderss && formik.errors.nbfcEmailAdderss,
		disabled: false,
	};
};
export const registrationNumberAttribute = (formik) => {
	return {
		id: 'registrationNumber',
		name: 'registrationNumber',
		label: (
			<div className="input-label">
				Registration No<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter registration no',
		type: 'text',
		value: formik.values.registrationNumber,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.registrationNumber &&
			Boolean(formik.errors.registrationNumber),
		helperText:
			formik.touched.registrationNumber && formik.errors.registrationNumber,
		disabled: false,
	};
};
export const dateOfIncorporationAttribute = (formik) => {
	return {
		id: 'dateOfIncorporation',
		name: 'dateOfIncorporation',
		label: (
			<div className="input-label">
				Date of incorporation<span style={{ color: 'red' }}>*</span>
			</div>
		),
		// placeholder: "Enter registration no",
		type: 'date',
		value: formik.values.dateOfIncorporation,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.dateOfIncorporation &&
			Boolean(formik.errors.dateOfIncorporation),
		helperText:
			formik.touched.dateOfIncorporation && formik.errors.dateOfIncorporation,
		disabled: false,
	};
};
export const classOfCompanyAttributes = (formik) => {
	return {
		id: 'classOfCompany',
		name: 'classOfCompany',
		displayEmpty: true,
		label: (
			<div className="input-label">
				Class of Company<span style={{ color: 'red' }}>*</span>
			</div>
		),
		multiple: false,
		placeholder: 'Select the Asset Class',
		type: 'text',
		value: formik.values.classOfCompany,
		onChange: (event) => {
			formik.setFieldValue('classOfCompany', event.target.value);
		},
		onBlur: formik.handleBlur('classOfCompany'),
		error:
			formik.touched.classOfCompany && Boolean(formik.errors.classOfCompany),
		helperText: formik.touched.classOfCompany && formik.errors.classOfCompany,
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
	};
};
// export const noOfEmployeesAttribute = (formik) => {
// 	return {
// 		id: 'noOfEmployees',
// 		name: 'noOfEmployees',
// 		label: (
// 			<div className="input-label">
// 				No. of Employees<span style={{ color: 'red' }}>*</span>
// 			</div>
// 		),
// 		placeholder: 'Enter No. of employees',
// 		type: 'number',
// 		value: formik.values.noOfEmployees,
// 		onChange: formik.handleChange,
// 		onBlur: formik.handleBlur,
// 		error: formik.touched.noOfEmployees && Boolean(formik.errors.noOfEmployees),
// 		helperText: formik.touched.noOfEmployees && formik.errors.noOfEmployees,
// 		disabled: false,
// 	};
// };
export const cinNumberAttribute = (formik) => {
	return {
		id: 'cinNumber',
		name: 'cinNumber',
		label: (
			<div className="input-label">
				CIN No<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter No. of employees',
		type: 'number',
		value: formik.values.cinNumber,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.cinNumber && Boolean(formik.errors.cinNumber),
		helperText: formik.touched.cinNumber && formik.errors.cinNumber,
		disabled: false,
	};
};

// export const creditRatingsAttributes = (formik) => {
// 	return {
// 		id: 'creditRatings',
// 		name: 'creditRatings',
// 		displayEmpty: true,
// 		label: (
// 			<div className="input-label">
// 				Credit Ratings<span style={{ color: 'red' }}>*</span>
// 			</div>
// 		),
// 		multiple: false,
// 		placeholder: 'Select the Asset Class',
// 		type: 'text',
// 		value: formik.values.creditRatings,
// 		onChange: (event) => {
// 			formik.setFieldValue('creditRatings', event.target.value);
// 		},
// 		onBlur: formik.handleBlur('creditRatings'),
// 		error: formik.touched.creditRatings && Boolean(formik.errors.creditRatings),
// 		helperText: formik.touched.creditRatings && formik.errors.creditRatings,
// 		disabled: false,
// 		options: [
// 			{
// 				label: 'Asset 1',
// 				value: 'asset1',
// 			},
// 			{
// 				label: 'Asset 2',
// 				value: 'asset2',
// 			},
// 			{
// 				label: 'Asset 3',
// 				value: 'asset3',
// 			},
// 		],
// 	};
// };
// export const ccsScoreAttribute = (formik) => {
// 	return {
// 		id: 'ccsScore',
// 		name: 'ccsScore',
// 		label: (
// 			<div className="input-label">
// 				CCS score<span style={{ color: 'red' }}>*</span>
// 			</div>
// 		),
// 		placeholder: 'Enter No. of employees',
// 		type: 'number',
// 		value: formik.values.ccsScore,
// 		onChange: formik.handleChange,
// 		onBlur: formik.handleBlur,
// 		error: formik.touched.ccsScore && Boolean(formik.errors.ccsScore),
// 		helperText: formik.touched.ccsScore && formik.errors.ccsScore,
// 		disabled: false,
// 	};
// };
export const overviewAttribute = (formik) => {
	return {
		id: 'overview',
		name: 'overview',
		label: (
			<div className="input-label">
				Overview (200 words limit)<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter overview about your NBFC',
		type: 'text',
		rows: 5,
		value: formik.values.overview,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.overview && Boolean(formik.errors.overview),
		helperText: formik.touched.overview && formik.errors.overview,
		disabled: false,
	};
};
export const nbfcaddressOneAttribute = (formik) => {
	return {
		id: 'nbfcaddressOne',
		name: 'nbfcaddressOne',
		label: (
			<div className="input-label">
				Address 1<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: '',
		type: 'text',
		value: formik.values.nbfcaddressOne,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.nbfcaddressOne && Boolean(formik.errors.nbfcaddressOne),
		helperText: formik.touched.nbfcaddressOne && formik.errors.nbfcaddressOne,
		disabled: false,
	};
};
export const nbfcaddressTwoAttribute = (formik) => {
	return {
		id: 'nbfcaddressTwo',
		name: 'nbfcaddressTwo',
		label: <div className="input-label">Address 2</div>,
		placeholder: '',
		type: 'text',
		value: formik.values.nbfcaddressTwo,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.nbfcaddressTwo && Boolean(formik.errors.nbfcaddressTwo),
		helperText: formik.touched.nbfcaddressTwo && formik.errors.nbfcaddressTwo,
		disabled: false,
	};
};
export const profileStateAttribute = (formik) => {
	return {
		id: 'profileStateAttribute',
		name: 'profileStateAttribute',
		label: (
			<div className="input-label">
				State<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: '',
		type: 'text',
		value: formik.values.profileStateAttribute,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.profileStateAttribute &&
			Boolean(formik.errors.profileStateAttribute),
		helperText:
			formik.touched.profileStateAttribute &&
			formik.errors.profileStateAttribute,
		disabled: false,
	};
};
export const profileCityAttribute = (formik) => {
	return {
		id: 'profileCity',
		name: 'profileCity',
		label: (
			<div className="input-label">
				City<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: '',
		type: 'text',
		value: formik.values.profileCity,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.profileCity && Boolean(formik.errors.profileCity),
		helperText: formik.touched.profileCity && formik.errors.profileCity,
		disabled: false,
	};
};
export const profilePincodeAttribute = (formik) => {
	return {
		id: 'profilePincode',
		name: 'profilePincode',
		label: (
			<div className="input-label">
				Pin code<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: '',
		type: 'number',
		value: formik.values.profilePincode,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.profilePincode && Boolean(formik.errors.profilePincode),
		helperText: formik.touched.profilePincode && formik.errors.profilePincode,
		disabled: false,
	};
};
