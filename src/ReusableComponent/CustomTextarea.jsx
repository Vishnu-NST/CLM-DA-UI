// import React from 'react';
// import Textarea from '@mui/joy/Textarea';

// const CustomTextarea = ({ field, form, ...props }) => {
//   return <Textarea {...field} {...props} />;
// };

// export default CustomTextarea;

import React from 'react';
import { Box, FormHelperText, InputAdornment } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

const CustomTextarea = ({
	rows,
	value,
	onChange,
	onBlur,
	error,
	helperText,
	label,
	startIcon,
	...props
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
			<Textarea
				multiline={true}
				rows={rows}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				error={error}
				startAdornment={
					<InputAdornment position="start">{startIcon}</InputAdornment>
				}
				{...props}
				sx={{
					width: '100%',
					// Customize additional styles as needed
				}}
			/>
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

export default CustomTextarea;
