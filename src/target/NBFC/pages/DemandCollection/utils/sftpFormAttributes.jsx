import PersonIcon from '../../../../../assets/svg/PersonIcon';
import PasswordIcon from '../../../../../assets/svg/PasswordIcon';
import DateIcon from '../../../../../assets/svg/DateIcon';

export const userNameAttributes = (formik) => {
	return {
		id: 'userName',
		name: 'userName',
		label: <div className="input-label">User Name</div>,
		placeholder: 'Enter the user name',
		type: 'text',
		value: formik.values.userName,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.userName && Boolean(formik.errors.userName),
		helperText: formik.touched.userName && formik.errors.userName,
		disabled: false,
		startIcon: <PersonIcon />,
	};
};

export const fileNameAttributes = (formik) => {
	return {
		id: 'fileName',
		name: 'fileName',
		label: <div className="input-label">File Name</div>,
		placeholder: 'Enter file name',
		type: 'text',
		value: formik.values.fileName,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.fileName && Boolean(formik.errors.fileName),
		helperText: formik.touched.fileName && formik.errors.fileName,
		disabled: false,
	};
};

export const urlAttributes = (formik) => {
	return {
		id: 'url',
		name: 'url',
		label: <div className="input-label">URL</div>,
		placeholder: 'Enter URL',
		type: 'text',
		value: formik.values.url,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.url && Boolean(formik.errors.url),
		helperText: formik.touched.url && formik.errors.url,
		disabled: false,
	};
};

export const passwordAttributes = (formik) => {
	return {
		id: 'password',
		name: 'password',
		label: <div className="input-label">Password</div>,
		placeholder: 'Enter password',
		type: 'password',
		value: formik.values.password,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.password && Boolean(formik.errors.password),
		helperText: formik.touched.password && formik.errors.password,
		disabled: false,
		startIcon: <PasswordIcon />,
	};
};

export const frequencyAttributes = (formik) => {
	return {
		id: 'frequency',
		name: 'frequency',
		displayEmpty: true,
		label: <div className="input-label">Frequency</div>,
		multiple: false,
		// placeholder: "Select the frequency",
		type: 'text',
		value: formik.values.frequency || 'daily',
		onChange: (event) => {
			formik.setFieldValue('frequency', event.target.value);
		},
		onBlur: formik.handleBlur('frequency'),
		error: formik.touched.frequency && Boolean(formik.errors.frequency),
		helperText: formik.touched.frequency && formik.errors.frequency,
		disabled: false,
		options: [
			{
				label: 'Daily',
				value: 'daily',
			},
			{
				label: 'weekly',
				value: 'weekly',
			},
		],
		startIcon: <DateIcon />,
	};
};

export const poolSelectionAttributes = (formik) => {
	return {
		id: 'pool',
		name: 'pool',
		displayEmpty: true,
		label: <div className="input-label">Pool Selection</div>,
		multiple: false,
		placeholder: 'Select a pool',
		type: 'text',
		value: formik.values.pool,
		onChange: (event) => {
			formik.setFieldValue('pool', event.target.value);
		},
		onBlur: formik.handleBlur('pool'),
		error: formik.touched.pool && Boolean(formik.errors.pool),
		helperText: formik.touched.pool && formik.errors.pool,
		disabled: false,
		options: [
			{
				label: 'Pool 2',
				value: 'pool2',
			},
			{
				label: 'Pool1',
				value: 'pool1',
			},
		],
		isSearch: true,
	};
};

export const timeAttributes = (formik) => {
	return {
		id: 'time',
		name: 'time',
		displayEmpty: true,
		multiple: false,
		label: (
			<div className="input-label">
				Select the time based on daily Frequence
				<span style={{ color: 'red' }}>*</span>
			</div>
		),
		// placeholder: "Select the time",
		type: 'text',
		value: formik.values.time || '01:00',
		onChange: (event) => {
			formik.setFieldValue('time', event.target.value);
		},
		onBlur: formik.handleBlur('time'),
		error: formik.touched.time && Boolean(formik.errors.time),
		helperText: formik.touched.time && formik.errors.time,
		disabled: false,
		options: [
			{
				label: '01:00',
				value: '01:00',
			},
			{
				label: '02:00',
				value: '02:00',
			},
			{
				label: '03:00',
				value: '03:00',
			},
			{
				label: '04:00',
				value: '04:00',
			},
			{
				label: '05:00',
				value: '05:00',
			},
			{
				label: '06:00',
				value: '06:00',
			},
			{
				label: '07:00',
				value: '07:00',
			},
			{
				label: '08:00',
				value: '08:00',
			},
			{
				label: '09:00',
				value: '09:00',
			},
			{
				label: '10:00',
				value: '10:00',
			},
			{
				label: '11:00',
				value: '11:00',
			},
			{
				label: '12:00',
				value: '12:00',
			},
			{
				label: '13:00',
				value: '13:00',
			},
			{
				label: '14:00',
				value: '14:00',
			},
			{
				label: '15:00',
				value: '15:00',
			},
			{
				label: '16:00',
				value: '16:00',
			},
			{
				label: '17:00',
				value: '17:00',
			},
			{
				label: '18:00',
				value: '18:00',
			},
			{
				label: '19:00',
				value: '19:00',
			},
			{
				label: '20:00',
				value: '20:00',
			},

			{
				label: '21:00',
				value: '21:00',
			},
			{
				label: '22:00',
				value: '22:00',
			},
			{
				label: '23:00',
				value: '23:00',
			},
			{
				label: '24:00',
				value: '24:00',
			},
		],
	};
};

export const noOfTimeAttributes = (formik) => {
	return {
		id: 'noOfTime',
		name: 'noOfTime',
		label: <div className="input-label">No. of Time</div>,
		placeholder: 'No. of Time',
		type: 'number',
		value: formik.values.noOfTime,
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
		error: formik.touched.noOfTime && Boolean(formik.errors.noOfTime),
		helperText: formik.touched.noOfTime && formik.errors.noOfTime,
		disabled: false,
	};
};
