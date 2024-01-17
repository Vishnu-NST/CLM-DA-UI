import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomDrawer from '@/NBFC/components/CustomDrawer';
import PoolQueryList from './PoolQueryList';
import DueDiligenceDrawer from './DueDiligenceDrawer';
import './DueDiligence.scss';

const arr = [1, 2, 3];

const DueDiligence = () => {
	const [drawerState, setDrawerState] = React.useState(false);

	return (
		<>
			<div className="due-diligence-block">
				{arr?.map((item, idx) => {
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
													QID | 761AD April 26-1
												</div>
												<div className="pool-detail-btns">
													<div
														className="btn"
														style={{
															background:
																'linear-gradient(to bottom,rgba(247, 135, 54, 0.2),rgba(247, 135, 54, 0))',
															color: '#F78736',
														}}
													>
														On going
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
												Raised on 26 Dec, 2023 at 05:30 PM
											</div>
										</div>
										<div className="sub-txt">
											Pool Details &nbsp;
										</div>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<PoolQueryList
										onCheckQueryClick={() =>
											setDrawerState(true)
										}
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
				Component={DueDiligenceDrawer}
			/>
		</>
	);
};

export default DueDiligence;
