/* eslint-disable no-unused-vars */
import * as React from 'react';

import PropTypes from 'prop-types';

const SVGComponent = ({ stroke, ...rest }) => (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="2.12646"
			y="4.07423"
			width="6.1377"
			height="3.68262"
			rx="0.859278"
			fill={stroke}
		/>
		<rect
			x="2.12646"
			y="10.2119"
			width="8.59278"
			height="3.68262"
			rx="0.859278"
			fill={stroke}
		/>
		<rect
			x="2.12646"
			y="16.3497"
			width="19.6406"
			height="3.68262"
			rx="0.859278"
			fill={stroke}
		/>
		<g clipPath="url(#clip0_7401_89893)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.9851 8.37181C12.1476 7.07972 12.8167 5.90509 13.8452 5.10632C14.8737 4.30755 16.1774 3.95006 17.4695 4.11251C18.7615 4.27496 19.9362 4.94403 20.7349 5.97254C21.5337 7.00105 21.8912 8.30475 21.7288 9.59683C21.5663 10.8889 20.8972 12.0635 19.8687 12.8623C18.8402 13.6611 17.5365 14.0186 16.2444 13.8561C14.9524 13.6937 13.7777 13.0246 12.979 11.9961C12.1802 10.9676 11.8227 9.66389 11.9851 8.37181ZM16.3168 11.0345L19.5625 7.88074L19.1068 7.4117L16.3393 10.0997L14.8227 8.47518L14.3442 8.92178L16.3167 11.0351L16.3168 11.0345Z"
				fill={stroke}
			/>
		</g>
		<defs>
			<clipPath id="clip0_7401_89893">
				<rect
					width="9.82032"
					height="9.82032"
					fill={stroke}
					transform="translate(12.5977 3.5) rotate(7.16596)"
				/>
			</clipPath>
		</defs>
	</svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
	fill: PropTypes.string,
};
