import { useState } from 'react';
import { Box, InputAdornment, TextField, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const InputComponent = ({
	id,
	name,
	placeholder,
	type,
	startIcon,
	customWidth,
	value,
	form,
	error,
	touched,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const dynamicPwdType = showPassword ? 'text' : 'password';
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	return (
		<Box>
			<TextField
				required
				style={{
					width: customWidth,
					fontSize: 11,
				}}
				variant="outlined"
				size="small"
				id={id}
				name={name}
				placeholder={placeholder}
				type={
					id === 'password' || id === 'confirmPassword'
						? dynamicPwdType
						: type
				}
				value={value}
				onChange={form.handleChange}
				error={Object.keys(form.errors).length}
				helperText={touched && error}
				onBlur={form.handleBlur}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">{startIcon}</InputAdornment>
					),
					endAdornment: (id === 'password' ||
						id === 'confirmPassword') && (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								edge="end"
								style={{ outline: 'none' }}
							>
								{!showPassword ? (
									<VisibilityOffIcon sx={{ fontSize: '1rem' }} />
								) : (
									<VisibilityIcon sx={{ fontSize: '1rem' }} />
								)}
							</IconButton>
						</InputAdornment>
					),
					sx: {
						fontSize: '0.68rem !important',
						borderRadius: '0.5rem',
					},
				}}
			/>
		</Box>
	);
};

export default InputComponent;
