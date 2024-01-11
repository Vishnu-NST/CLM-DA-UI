import {
	Box,
	FormHelperText,
	InputAdornment,
	MenuItem,
	OutlinedInput,
	Select,
} from '@mui/material';
import { capitalizeString } from '../utils/utils';

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
			<Select
				className="select-block"
				multiple={multiple}
				displayEmpty={displayEmpty}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				error={error}
				startAdornment={
					<InputAdornment position="start">{startIcon}</InputAdornment>
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
						paddingLeft: '0rem !important',
					},
				}}
			>
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
				{options?.map((option) => {
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
