import React from 'react';

import { Box, InputAdornment, TextField, Typography } from '@mui/material';

const MultilineInputComponent = ({
	id,
	name,
	label,
	placeholder,
	type,
	value,
	onChange,
	onBlur,
	error,
	helperText,
	disabled,
	startIcon,
	multiline,
	rows,
	bgColor,
}) => {
	return (
		<Box sx={{ marginBottom: '1.625rem' }}>
			<Typography>{label}</Typography>
			<TextField
				disabled={disabled}
				fullWidth
				id={id}
				name={name}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				error={error}
				helperText={helperText}
				multiline={multiline}
				rows={rows}
				sx={{
					'& .MuiInputBase-root': {
						background: bgColor ? bgColor : 'white',
					},
					'& .MuiOutlinedInput-input': {
						height: '0.1375em',
						fontSize: 11,
						background: bgColor ? bgColor : 'white',
						borderRadius: '5px',
					},
					'& .MuiOutlinedInput-notchedOutline': {
						border: '1px solid #D9D9D9',
						borderRadius: '5px',
						'&:hover': {
							border: '1px solid #D9D9D9',
							borderRadius: '5px',
						},
					},
					'& .MuiFormHelperText-root': {
						marginLeft: '0.375rem',
					},
				}}
				InputProps={{
					startAdornment: startIcon && (
						<InputAdornment
							position="start"
							sx={{ background: 'white' }}
						>
							{startIcon}
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};
export default MultilineInputComponent;
