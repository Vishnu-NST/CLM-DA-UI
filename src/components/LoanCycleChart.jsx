import ReactEcharts from 'echarts-for-react';

const LoanCycleChart = () => {
	const option = {
		legend: {
			bottom: '5%',
			left: 'center',
			// doesn't perfectly work with our tricks, disable it
			selectedMode: false,
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				smooth: true,
				radius: ['40%', '70%'],
				center: ['50%', '70%'],
				// adjust the start angle
				startAngle: 180,
				itemStyle: {
					normal: {
						label: {
							show: false,
						},
						labelLine: {
							show: false,
						},
					},
				},
				data: [
					{ value: 30, name: 'First Loan Pool Cycle' },
					{ value: 20, name: 'Second Loan Pool Cycle' },
					{
						value: 30 + 20,
						itemStyle: {
							// stop the chart from rendering this piece
							color: 'none',
							decal: {
								symbol: 'none',
							},
						},
						label: {
							show: false,
						},
					},
				],
			},
		],
	};
	return (
		<ReactEcharts
			option={option}
			style={{ height: '13.7rem' }}
			notMerge={true}
		/>
	);
};

export default LoanCycleChart;
