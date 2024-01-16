import React from 'react';

const DashboardIcon = (props) => {
	return (
		<svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Icon/dashboard" clipPath="url(#clip0_5006_26169)">
				<path
					id="Vector"
					d="M4 6.16667C4 5.72464 4.17559 5.30072 4.48816 4.98816C4.80072 4.67559 5.22464 4.5 5.66667 4.5H10.6667V19.5H5.66667C5.22464 19.5 4.80072 19.3244 4.48816 19.0118C4.17559 18.6993 4 18.2754 4 17.8333V6.16667ZM14 4.5H19C19.442 4.5 19.866 4.67559 20.1785 4.98816C20.4911 5.30072 20.6667 5.72464 20.6667 6.16667V10.3333H14V4.5ZM14 13.6667H20.6667V17.8333C20.6667 18.2754 20.4911 18.6993 20.1785 19.0118C19.866 19.3244 19.442 19.5 19 19.5H14V13.6667Z"
					stroke={props.stroke}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5006_26169">
					<rect
						width="24"
						height="24"
						fill="white"
						transform="translate(0 0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default DashboardIcon;
