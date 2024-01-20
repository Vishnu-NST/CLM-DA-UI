import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import UserIcon from '../../../../assets/svg/UserIcon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getCreditRatingColor } from '@/utils/common';

const PoolQueryList = ({ poolData, onCheckQueryClick }) => {
	return (
		<div className="">
			<TableContainer>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead
						sx={{
							background: '#F8F9FB',
							'.MuiTableCell-root': {
								fontSize: '0.875rem',
								padding: '0.5rem',
							},
						}}
					>
						<TableRow>
							<TableCell
								sx={{
									color: '#8794C2',
								}}
							>
								Pool Name
							</TableCell>
							<TableCell
								sx={{
									color: '#8794C2',
								}}
								align="center"
							>
								Customers
							</TableCell>
							<TableCell
								sx={{
									color: '#8794C2',
								}}
								align="center"
							>
								AUM
							</TableCell>
							<TableCell
								sx={{
									color: '#8794C2',
								}}
								align="center"
							>
								Credit Ratings
							</TableCell>
							<TableCell
								sx={{
									color: '#8794C2',
								}}
								align="center"
							>
								Average IRR
							</TableCell>
							<TableCell
								sx={{
									color: '#8794C2',
								}}
								align="center"
							>
								Action
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
								'.MuiTableCell-root': {
									fontSize: '0.875rem',
								},
							}}
						>
							<TableCell component="th" scope="row">
								{poolData.pool_name}
							</TableCell>
							<TableCell align="center" className="flex-center">
								{poolData?.customers}
								&nbsp;
								<UserIcon />
							</TableCell>
							<TableCell align="center">₹{poolData?.aum}cr</TableCell>
							<TableCell
								align="center"
								sx={{
									color: getCreditRatingColor(
										poolData?.credit_rating,
									),
								}}
							>
								{poolData?.credit_rating}
							</TableCell>
							<TableCell align="center">
								{poolData?.average_irr}
							</TableCell>
							<TableCell
								align="center"
								className="check-query-txt flex-center"
								sx={{
									display: 'table-cell !important',
									cursor: 'pointer',
								}}
								onClick={() => onCheckQueryClick()}
							>
								<div className="flex-center">
									Check query &nbsp;
									<ArrowForwardIosIcon fontSize="11" />
								</div>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default PoolQueryList;
