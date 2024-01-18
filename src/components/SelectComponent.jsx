import { capitalizeString } from '@/utils/common';
import {
	Box,
	FormHelperText,
	InputAdornment,
	ListSubheader,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Import the search icon
import React from 'react';

const SelectComponent = ({
	multiple,
	displayEmpty,
	value,
	onChange,
	input,
	MenuProps,
	inputProps,
	placeholder,
	options,
	label,
	onBlur,
	error,
	helperText,
	startIcon,
	isSearch,
}) => {
	const [searchTerm, setSearchTerm] = React.useState('');

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredOptions = options?.filter((option) =>
		option?.label.toLowerCase().includes(searchTerm.toLowerCase()),
	);

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
			<Select
				className="select-block"
				multiple={multiple}
				displayEmpty={displayEmpty}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				error={error}
				startAdornment={
					startIcon && (
						<InputAdornment position="start">{startIcon}</InputAdornment>
					)
				}
				input={
					input || (
						<OutlinedInput
							style={{
								border: '1px solid rgba(112, 126, 174, 0.2)',
								borderRadius: '7px',
							}}
						/>
					)
				}
				MenuProps={MenuProps}
				inputProps={inputProps || { 'aria-label': 'Without label' }}
				sx={{
					width: '100%',
					'& .MuiOutlinedInput-input': {
						display: 'flex',
						alignItems: 'center',
					},
					'& .MuiSelect-select': {
						height: '0.1375em !important',
						fontSize: 11,
						background: 'white',
						padding: '9.5px 14px !important',
						borderRadius: '5px',
						paddingLeft: startIcon
							? '0rem !important'
							: '0.875rem !important',
					},
				}}
			>
				{isSearch && (
					<ListSubheader>
						<TextField
							size="small"
							autoFocus
							placeholder={placeholder}
							fullWidth
							InputProps={{
								endAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
								sx: {
									height: '2rem', // Adjust the height value as needed
								},
							}}
							onChange={handleSearchChange}
							onKeyDown={(e) => {
								if (e.key !== 'Escape') {
									e.stopPropagation();
								}
							}}
						/>
					</ListSubheader>
				)}
				{!isSearch && (
					<MenuItem disabled value="">
						<em
							style={{
								color: 'rgba(135, 148, 194, 0.6)',
								fontStyle: 'normal',
								fontSize: '12px',
							}}
						>
							{placeholder}
						</em>
					</MenuItem>
				)}
				{filteredOptions?.map((option) => {
					return (
						<MenuItem
							key={option?.label}
							value={option?.value}
							sx={{
								fontSize: '0.875rem',
							}}
						>
							{capitalizeString(option?.label)}
						</MenuItem>
					);
				})}
			</Select>
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

export default SelectComponent;
