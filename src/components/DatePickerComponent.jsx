import React from 'react';

import { Box, FormHelperText } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DateIcon from '../assets/svg/DateIcon';

const DatePickerComponent = ({
	label,
	error,
	helperText,
	handleDateChange,
	selectedDate,
}) => {
	return (
		<Box sx={{ marginBottom: '1.625rem' }}>
			<div
				style={{
					color: 'rgba(135, 148, 194, 1)',
					fontSize: '12px',
				}}
			>
				{label}
			</div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					format="DD/MM/YYYY"
					views={['year', 'month', 'day']}
					sx={{
						background: 'white',
						width: '100%',
						border: '1px solid rgba(112, 126, 174, 0.2)',
						borderRadius: '7px',
						'& .MuiOutlinedInput-input': {
							height: '1.5em',
							fontSize: 11,
						},
						'& .MuiOutlinedInput-notchedOutline': {
							border: error ? '1px solid red' : '1px solid #D9D9D9',
						},
					}}
					slots={{
						openPickerIcon: DateIcon,
					}}
					slotProps={{
						textField: {
							size: 'small',
						},
						inputAdornment: {
							position: 'start',
						},
					}}
					value={selectedDate}
					onChange={handleDateChange}
				/>
			</LocalizationProvider>
			{error && (
				<FormHelperText
					sx={{
						fontWeight: 400,
						fontSize: '0.75rem',
						lineHeight: '1.66',
						textAlign: 'left',
						marginTop: '3px',
						marginRight: '14px',
						marginLeft: '0.375rem',
						marginBottom: 0,
						color: '#f44336',
					}}
				>
					{helperText}
				</FormHelperText>
			)}
		</Box>
	);
};

export default DatePickerComponent;
