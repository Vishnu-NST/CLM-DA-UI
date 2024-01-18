import React, { useState, useMemo } from 'react';
import {
	Box,
	FormControl,
	Select,
	MenuItem,
	ListSubheader,
	TextField,
	InputAdornment,
	Checkbox,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const containsText = (text, searchText) =>
	text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

export default function SearchFilter({
	title = 'NBFC Branch Name',
	options = [],
	defaultOption = '',
	width = '20%',
	background = '#F8F9FB',

	placeholder = 'Search NBFC Name',
}) {
	const [selectedOption, setSelectedOption] = useState(defaultOption);
	const [selectAll, setSelectAll] = useState(false);
	const [searchText, setSearchText] = useState('');

	const displayedOptions = useMemo(
		() => options.filter((option) => containsText(option, searchText)),
		[options, searchText],
	);

	const handleSelectAll = () => {
		setSelectAll(!selectAll);
		setSelectedOption(selectAll ? '' : 'Select All');
	};

	const handleOptionToggle = (option) => {
		if (selectAll) {
			setSelectAll(false);
			setSelectedOption(option);
		} else {
			setSelectedOption(option);
		}
	};

	return (
		<Box>
			<div
				style={{
					color: '#8794C2',
					fontSize: '0.75rem',
					marginBottom: '0.5rem',
				}}
			>
				{title}
			</div>
			<FormControl sx={{ width, background }}>
				<Select
					MenuProps={{ autoFocus: false }}
					id="search-select"
					value={selectedOption}
					onChange={(e) => handleOptionToggle(e.target.value)}
					onClose={() => setSearchText('')}
					renderValue={(value) => (
						<div
							style={{
								color:
									value === defaultOption ? '#8794C2' : 'inherit',
							}}
						>
							{value}
						</div>
					)}
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
							borderRadius: '7px',
							paddingLeft: '1rem !important',
						},
					}}
				>
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
							onChange={(e) => setSearchText(e.target.value)}
							onKeyDown={(e) => {
								if (e.key !== 'Escape') {
									e.stopPropagation();
								}
							}}
						/>
					</ListSubheader>
					<MenuItem
						key="select-all"
						sx={{ fontSize: '0.75rem', fontWeight: '500' }}
					>
						<Checkbox checked={selectAll} onChange={handleSelectAll} />
						Select All
					</MenuItem>
					{displayedOptions.map((option, i) => (
						<MenuItem
							key={i}
							value={option}
							sx={{ fontSize: '0.75rem', fontWeight: '500' }}
						>
							<Checkbox
								checked={selectAll || selectedOption === option}
								onChange={() => handleOptionToggle(option)}
							/>
							{option}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}
