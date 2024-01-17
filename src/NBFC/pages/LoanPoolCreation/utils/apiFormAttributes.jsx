export const prodIPAttributes = (formik) => {
	return {
		id: 'prodIP',
		name: 'prodIP',
		label: (
			<div className="input-label">
				IP Address<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter IP address',
		type: 'text',
		value: formik.values.prodIP,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.prodIP && Boolean(formik.errors.prodIP),
		helperText: formik.touched.prodIP && formik.errors.prodIP,
		disabled: false,
	};
};

export const prodPortAttributes = (formik) => {
	return {
		id: 'prodPort',
		name: 'prodPort',
		label: (
			<div className="input-label">
				Port<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter port',
		type: 'number',
		value: formik.values.prodPort,
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
		error: formik.touched.prodPort && Boolean(formik.errors.prodPort),
		helperText: formik.touched.prodPort && formik.errors.prodPort,
		disabled: false,
	};
};

export const uatIPAttributes = (formik) => {
	return {
		id: 'uatIP',
		name: 'uatIP',
		label: (
			<div className="input-label">
				IP Address<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter IP address',
		type: 'text',
		value: formik.values.uatIP,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.uatIP && Boolean(formik.errors.uatIP),
		helperText: formik.touched.uatIP && formik.errors.uatIP,
		disabled: false,
	};
};

export const uatPortAttributes = (formik) => {
	return {
		id: 'uatPort',
		name: 'uatPort',
		label: (
			<div className="input-label">
				Port<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Enter port',
		type: 'number',
		value: formik.values.uatPort,
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
		error: formik.touched.uatPort && Boolean(formik.errors.uatPort),
		helperText: formik.touched.uatPort && formik.errors.uatPort,
		disabled: false,
	};
};
