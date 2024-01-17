import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import UserIcon from '../../assets/svg/UserIcon';
import ErrorIcon from '../../assets/svg/ErrorIcon';
import SuccessImg from '../../assets/svg/SuccessImg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function createData(poolName, customerCount, isKYC, isLoan, isOther) {
	return { poolName, customerCount, isKYC, isLoan, isOther };
}

const rows = [
	createData('MUTH-JLG April 23-1', 129, false, true, true),
	createData('TATA-JLG April 23-1', 149, false, true, false),
	createData('JL-JLG April 23-1', 130, false, true, true),
	createData('TATA-JLG April 23-1', 159, true, false, true),
	createData('KA-JLG April 23-1', 127, false, true, false),
	createData('BRUEA-JLG April 23-1', 100, true, true, false),
];

const PoolQueryList = ({ onCheckQueryClick }) => {
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
								align="right"
							>
								Customers
							</TableCell>
							<TableCell
								sx={{
									color: '#8794C2',
								}}
								align="right"
							>
								KYC docs
							</TableCell>
							<TableCell
								sx={{
									color: '#8794C2',
								}}
								align="right"
							>
								Loan docs
							</TableCell>
							<TableCell
								sx={{
									color: '#8794C2',
								}}
								align="right"
							>
								Other docs
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
						{rows.map((row, idx) => (
							<TableRow
								key={idx}
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
									{row.poolName}
								</TableCell>
								<TableCell
									align="center"
									className="flex-center"
									sx={{
										display: 'table-cell !important',
									}}
								>
									{row.customerCount}
									&nbsp;
									<UserIcon />
								</TableCell>
								<TableCell align="center">
									{row.isKYC ? <SuccessImg /> : <ErrorIcon />}
								</TableCell>
								<TableCell align="center">
									{row.isLoan ? <SuccessImg /> : <ErrorIcon />}
								</TableCell>
								<TableCell align="center">
									{row.isOther ? <SuccessImg /> : <ErrorIcon />}
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
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default PoolQueryList;
