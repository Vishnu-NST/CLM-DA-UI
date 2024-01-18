import ReportLoanReportLogo from '@/assets/svg/ReportLoanReportLogo';
import ReportMISLogo from '@/assets/svg/ReportMISLogo';
import ReportReconLogo from '@/assets/svg/ReportReconLogo';
import { Card, Grid, Radio, Typography } from '@mui/material';
import { useState } from 'react';

export default function ReportTypeCard() {
	const styles = {
		reportType: {
			fontFamily: 'Poppins, sans-serif',
			fontSize: '0.875rem',
			fontWeight: 500,
			color: '#1B1B1B',
			mt: 2,
			mb: 1.5,
		},
		reportTypeName: {
			fontFamily: 'Poppins, sans-serif',
			fontSize: '0.75rem',
			fontWeight: 400,
			color: '#8794C2',
		},
		card: {
			border: '1px solid rgba(135, 148, 194, 0.20)',
			borderRadius: '0.5rem',
			width: '18rem',
			height: '4rem',
		},
		selectedCard: {
			border: '1px solid #C4161C',
			borderRadius: '0.5rem',
			width: '18rem',
			height: '4rem',
		},
	};

	const data = [
		{
			logo: <ReportMISLogo />,
			reportType: 'MIS',
			reportTypeName: 'Management Information Report',
		},
		{
			logo: <ReportLoanReportLogo />,
			reportType: 'Loan Report',
			reportTypeName: 'Contains loan details of borrower',
		},
		{
			logo: <ReportReconLogo />,
			reportType: 'Reconciliation',
			reportTypeName: 'Contains Pool level report',
		},
	];

	const [selectedCardIndex, setSelectedCardIndex] = useState(null);

	const handleCardClick = (index) => {
		setSelectedCardIndex(index);
	};

	return (
		<>
			<Grid container spacing={0}>
				{data.map((data, index) => (
					<>
						<Grid item xs={3.25}>
							<Card
								elevation={0}
								sx={
									index === selectedCardIndex
										? styles.selectedCard
										: styles.card
								}
								onClick={() => handleCardClick(index)}
							>
								<Grid container spacing={0.5}>
									<Grid item xs={1} sx={{ mt: 2, ml: 2 }}>
										{data?.logo}
									</Grid>
									<Grid item xs={8.5}>
										<Typography sx={styles.reportType}>
											{data?.reportType}
										</Typography>
										<Typography sx={styles.reportTypeName}>
											{data?.reportTypeName}
										</Typography>
									</Grid>
									<Grid item xs={1} align="right">
										<Radio
											size="small"
											sx={{ color: '#C4161C' }}
											checked={index === selectedCardIndex}
										/>
									</Grid>
								</Grid>
							</Card>
						</Grid>
						<Grid item xs={0.2}></Grid>
					</>
				))}
			</Grid>
		</>
	);
}
