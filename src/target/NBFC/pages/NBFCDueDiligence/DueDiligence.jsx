import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomDrawer from '@/components/CustomDrawer';
import PoolQueryList from './PoolQueryList';
import DueDiligenceDrawer from './DueDiligenceDrawer';
import SearchIcon from '../../../../assets/svg/SearchIcon';
import InputComponent from '@/components/InputComponent';
import CustomButton from '@/components/CustomButton';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import './DueDiligence.scss';
import SelectComponent from '@/components/SelectComponent';
import HeaderComp from '@/components/HeaderComponent';
import useGetQueryList from '@/store/useGetQueryList';
import { capitalizeString, changeDateFormatForDd } from '@/utils/common';

const arrowBtnStyle = {
	border: '1px solid rgba(112, 126, 174, 0.5)',
	borderRadius: '7px',
	padding: '0.3rem 0.2rem',
	width: 'fit-content',
	minWidth: 'fit-content',
	color: '#C4161C',
	backgroundColor: 'white',
};

const DueDiligence = () => {
	const [drawerState, setDrawerState] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState();
	const [filterValue, setFilterValue] = React.useState('');
	const queryData = useGetQueryList();
	const [checkQueryData, setCheckQueryData] = React.useState();

	const searchQueryAttributes = {
		id: 'searchQuery',
		name: 'searchQuery',
		placeholder: `Search queries`,
		type: 'text',
		value: searchValue,
		onChange: (event) => {
			setSearchValue(event.target.value);
		},
		onkeydown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		disabled: false,
		endIcon: <SearchIcon />,
	};

	const queryFilterListAttributes = {
		id: 'queryFilter',
		name: 'queryFilter',
		displayEmpty: true,
		multiple: false,
		placeholder: 'Select query type',
		type: 'text',
		value: filterValue,
		onChange: (event) => {
			setFilterValue(event.target.value);
		},
		disabled: false,
		options: [
			{
				label: 'All Queries',
				value: 'all',
			},
			{
				label: 'On going Queries',
				value: 'ongoing',
			},
			{
				label: 'Closed Queries',
				value: 'closed',
			},
			{
				label: 'Pending Queries',
				value: 'pending',
			},
		],
	};

	return (
		<>
			<HeaderComp
				title={'Due Diligence Queries'}
				breadCrumbs={[{ data: 'Due Diligence Queries', path: null }]}
			/>
			<div className="due-diligence-block">
				<Grid container>
					<Grid item sm={4}>
						<InputComponent {...searchQueryAttributes} />
					</Grid>
					<Grid
						item
						sm={8}
						className="flex-end"
						sx={{
							display: 'flex',
							alignItems: 'flex-start',
						}}
					>
						<div
							style={{
								width: '30%',
							}}
						>
							<SelectComponent {...queryFilterListAttributes} />
						</div>
						&nbsp; &nbsp; &nbsp;
						<div className="flex">
							<div className="pagination-txt">01-10 of 100</div>
							&nbsp;
							<div className="flex">
								<CustomButton customStyle={arrowBtnStyle}>
									<KeyboardArrowLeftOutlinedIcon />
								</CustomButton>
								&nbsp;
								<CustomButton customStyle={arrowBtnStyle}>
									<KeyboardArrowRightOutlinedIcon />
								</CustomButton>
							</div>
						</div>
					</Grid>
				</Grid>
				{queryData?.data?.map((item, idx) => {
					return (
						<div className="query-card" key={idx}>
							<Accordion
								sx={{
									'&.MuiAccordion-root': {
										boxShadow: 'none',
									},
								}}
							>
								<AccordionSummary
									expandIcon={
										<ExpandMoreIcon
											sx={{
												color: '#8794C2',
											}}
										/>
									}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<div
										className="flex-between"
										style={{ width: '100%' }}
									>
										<div className="flex-column">
											<div className="flex">
												<div className="title">
													QID | {item?.query_id}
												</div>
												<div className="pool-detail-btns">
													<div
														className="btn"
														style={{
															background:
																'linear-gradient(to bottom,rgba(0, 184, 94, 0.1),rgba(0, 184, 94, 0))',
															color: '#00B85E',
														}}
													>
														{capitalizeString(
															item?.data?.status,
														)}
													</div>
													&nbsp; &nbsp;
													<div
														className="btn"
														style={{
															background:
																'rgba(135, 148, 194, 0.2)',
															color: 'rgba(135, 148, 194, 1)',
														}}
													>
														1 pool
													</div>
												</div>
											</div>
											<div
												className="sub-txt"
												style={{
													paddingTop: '0.3rem',
												}}
											>
												Raised on{' '}
												{changeDateFormatForDd(
													new Date(item?.data?.created_at),
												)}
											</div>
										</div>
										<div className="sub-txt">
											Pool Details &nbsp;
										</div>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<PoolQueryList
										poolData={item?.pooldata}
										onCheckQueryClick={() => {
											setCheckQueryData(item);
											setDrawerState(true);
										}}
									/>
								</AccordionDetails>
							</Accordion>
						</div>
					);
				})}
			</div>
			<CustomDrawer
				anchor="right"
				state={drawerState}
				queryData={checkQueryData}
				Component={DueDiligenceDrawer}
				onClose={() => setDrawerState(false)}
			/>
		</>
	);
};

export default DueDiligence;
