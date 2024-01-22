export const prodIPAttributes = (formik) => {
	return {
		id: 'api_prod_ipaddress',
		name: 'api_prod_ipaddress',
		label: (
			<div className="input-label">
				IP Address<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter IP address',
		type: 'text',
		value: formik.values.api_prod_ipaddress,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.api_prod_ipaddress &&
			Boolean(formik.errors.api_prod_ipaddress),
		helperText:
			formik.touched.api_prod_ipaddress && formik.errors.api_prod_ipaddress,
		disabled: false,
	};
};

export const prodPortAttributes = (formik) => {
	return {
		id: 'api_prod_port',
		name: 'api_prod_port',
		label: (
			<div className="input-label">
				Port<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter port',
		type: 'number',
		value: formik.values.api_prod_port,
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
		error: formik.touched.api_prod_port && Boolean(formik.errors.api_prod_port),
		helperText: formik.touched.api_prod_port && formik.errors.api_prod_port,
		disabled: false,
	};
};

export const uatIPAttributes = (formik) => {
	return {
		id: 'api_uat_ipaddress',
		name: 'api_uat_ipaddress',
		label: (
			<div className="input-label">
				IP Address<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter IP address',
		type: 'text',
		value: formik.values.api_uat_ipaddress,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error:
			formik.touched.api_uat_ipaddress &&
			Boolean(formik.errors.api_uat_ipaddress),
		helperText:
			formik.touched.api_uat_ipaddress && formik.errors.api_uat_ipaddress,
		disabled: false,
	};
};

export const uatPortAttributes = (formik) => {
	return {
		id: 'api_uat_port',
		name: 'api_uat_port',
		label: (
			<div className="input-label">
				Port<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter port',
		type: 'number',
		value: formik.values.api_uat_port,
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
		error: formik.touched.api_uat_port && Boolean(formik.errors.api_uat_port),
		helperText: formik.touched.api_uat_port && formik.errors.api_uat_port,
		disabled: false,
	};
};
