import PersonIcon from '../../../../../assets/svg/PersonIcon';
import PasswordIcon from '../../../../../assets/svg/PasswordIcon';
import DateIcon from '../../../../../assets/svg/DateIcon';

export const userNameAttributes = (formik) => {
	return {
		id: 'sftp_username',
		name: 'sftp_username',
		label: <div className="input-label">User Name</div>,
		placeholder: 'Enter the user name',
		type: 'text',
		value: formik.values.sftp_username,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.sftp_username && Boolean(formik.errors.sftp_username),
		helperText: formik.touched.sftp_username && formik.errors.sftp_username,
		disabled: false,
		startIcon: <PersonIcon />,
	};
};

export const fileNameAttributes = (formik) => {
	return {
		id: 'sftp_filename',
		name: 'sftp_filename',
		label: <div className="input-label">File Name</div>,
		placeholder: 'Enter file name',
		type: 'text',
		value: formik.values.sftp_filename,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.sftp_filename && Boolean(formik.errors.sftp_filename),
		helperText: formik.touched.sftp_filename && formik.errors.sftp_filename,
		disabled: false,
	};
};

export const passwordAttributes = (formik) => {
	return {
		id: 'sftp_password',
		name: 'sftp_password',
		label: <div className="input-label">Password</div>,
		placeholder: 'Enter password',
		type: 'password',
		value: formik.values.sftp_password,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.sftp_password && Boolean(formik.errors.sftp_password),
		helperText: formik.touched.sftp_password && formik.errors.sftp_password,
		disabled: false,
		startIcon: <PasswordIcon />,
	};
};

export const urlAttributes = (formik) => {
	return {
		id: 'sftp_url',
		name: 'sftp_url',
		label: <div className="input-label">URL</div>,
		placeholder: 'Enter URL',
		type: 'text',
		value: formik.values.sftp_url,
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched.sftp_url && Boolean(formik.errors.sftp_url),
		helperText: formik.touched.sftp_url && formik.errors.sftp_url,
		disabled: false,
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

export const timeAttributes = (formik) => {
	return {
		id: 'sftp_time',
		name: 'sftp_time',
		displayEmpty: true,
		multiple: false,
		label: (
			<div className="input-label">
				Select the time based on daily Frequence
				<span style={{ color: 'red' }}>*</span>
			</div>
		),
		placeholder: 'Select the time',
		type: 'text',
		value: formik.values.sftp_time || '01:00',
		onChange: (event) => {
			formik.setFieldValue('sftp_time', event.target.value);
		},
		onBlur: formik.handleBlur('sftp_time'),
		error: formik.touched.sftp_time && Boolean(formik.errors.sftp_time),
		helperText: formik.touched.sftp_time && formik.errors.sftp_time,
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
