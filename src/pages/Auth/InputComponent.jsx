import { useState } from 'react';
import { Box, InputAdornment, TextField, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const InputComponent = ({
	id,
	name,
	placeholder,
	type,
	helperText,
	startIcon,
	customWidth,
	isSubmitted,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const dynamicPwdType = showPassword ? 'text' : 'password';
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const [inputValue, setInputValue] = useState('');
	const [fieldTouched, setFieldTouched] = useState(false);
	const submitButton = document.getElementById('submitBtn');
	const onChange = (inputValue) => {
		setInputValue(inputValue);
		setFieldTouched(inputValue.trim().length > 0 ? true : false);
		if (fieldTouched) {
			submitButton.style.backgroundColor = '#C4161C';
			submitButton.style.cursor = 'pointer';
		}
	};
	return (
		<Box>
			<TextField
				required
				style={{
					width: customWidth,
					fontFamily: 'Poppins , sans-serif',
					fontSize: 11,
				}}
				variant="outlined"
				size="small"
				id={id}
				name={name}
				placeholder={placeholder}
				type={id === 'password' ? dynamicPwdType : type}
				value={inputValue}
				onChange={(e) => onChange(e.target.value)}
				error={isSubmitted && !fieldTouched && !inputValue.trim()}
				helperText={
					isSubmitted && !fieldTouched && !inputValue.trim()
						? helperText
						: ''
				}
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
						fontFamily: "'Poppins', sans-serif",
						fontSize: '0.68rem !important',
						borderRadius: '0.5rem',
					},
				}}
			/>
		</Box>
	);
};

export default InputComponent;
