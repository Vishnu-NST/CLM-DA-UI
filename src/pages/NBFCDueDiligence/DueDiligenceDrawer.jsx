import TimerIcon from '../../assets/svg/TimerIcon';

const DueDiligenceDrawer = () => {
	return (
		<div className="drawer-header">
			<div className="flex">
				<TimerIcon />
				<div className="title">MUTH-JLG April 23-1</div>
				<div
					className="tag"
					style={{
						background: 'rgba(135, 148, 194, 0.2)',
						color: 'rgba(135, 148, 194, 1)',
					}}
				>
					1 pool
				</div>
				&nbsp; &nbsp; &nbsp;
				<div
					className="tag"
					style={{
						background:
							'linear-gradient(to bottom,rgba(247, 135, 54, 0.2),rgba(247, 135, 54, 0))',
						color: '#F78736',
					}}
				>
					On going
				</div>
			</div>
			<div className="">end</div>
		</div>
	);
};

export default DueDiligenceDrawer;
