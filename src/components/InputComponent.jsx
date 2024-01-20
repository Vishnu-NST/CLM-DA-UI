import React from 'react';

import { Box, InputAdornment, TextField } from '@mui/material';

const InputComponent = ({
	id,
	name,
	label,
	placeholder,
	type,
	value,
	onChange,
	onBlur,
	onkeydown,
	error,
	helperText,
	disabled,
	startIcon,
	height,
	endIcon,
	mbVal,
}) => {
	return (
		<Box sx={{ marginBottom: mbVal || '1.625rem' }}>
			<div
				style={{
					color: 'rgba(135, 148, 194, 1)',
					fontSize: '12px',
				}}
			>
				{label}
			</div>
			<TextField
				disabled={disabled}
				fullWidth
				id={id}
				name={name}
				placeholder={placeholder}
				type={type}
				onKeyDown={onkeydown}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				error={error}
				helperText={helperText}
				sx={{
					'& .MuiOutlinedInput-input': {
						height: height ? `${height}rem` : '0.1375em',
						fontSize: 11,
						background: 'white !important',
						borderRadius: '8px',
					},
					'& .MuiOutlinedInput-notchedOutline': {
						border: '1px solid rgba(112, 126, 174, 0.5)',
						borderRadius: '7px',
						'&:hover': {
							border: '1px solid rgba(112, 126, 174, 0.5)',
							borderRadius: '7px',
						},
					},
					'& .MuiInputBase-input::placeholder': {
						color: 'rgba(135, 148, 194)',
						fontStyle: 'normal',
						fontSize: '12px',
					},
					'& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button':
						{
							'-webkit-appearance': 'none',
							margin: 0,
						},
					'& .MuiFormHelperText-root': {
						marginLeft: '0.375rem',
						fontWeight: 400,
						fontSize: '0.75rem',
						lineHeight: '1.66',
						textAlign: 'left',
						marginTop: '3px',
						marginRight: '14px',
						marginBottom: 0,
						color: '#f44336',
					},
				}}
				InputProps={{
					inputProps:
						type === 'number'
							? { inputMode: 'numeric', step: 'any' }
							: undefined,
					startAdornment: startIcon && (
						<InputAdornment
							position="start"
							sx={{ background: 'white' }}
						>
							{startIcon}
						</InputAdornment>
					),
					endAdornment: endIcon && (
						<InputAdornment
							position="start"
							sx={{ backgroundColor: 'white' }}
						>
							{endIcon}
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};
export default InputComponent;
