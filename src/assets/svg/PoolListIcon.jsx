/* eslint-disable no-unused-vars */
import * as React from 'react';

import PropTypes from 'prop-types';

const SVGComponent = ({ stroke, ...rest }) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="8.68408"
			y="4"
			width="12.3158"
			height="4"
			rx="0.915385"
			fill={stroke}
		/>
		<rect
			x="8.68408"
			y="10"
			width="12.3158"
			height="4"
			rx="0.915385"
			fill={stroke}
		/>
		<rect
			x="8.68408"
			y="16"
			width="12.3158"
			height="4"
			rx="0.915385"
			fill={stroke}
		/>
		<rect x="3" y="4" width="3.78947" height="4" rx="0.915385" fill={stroke} />
		<rect x="3" y="10" width="3.78947" height="4" rx="0.915385" fill={stroke} />
		<rect x="3" y="16" width="3.78947" height="4" rx="0.915385" fill={stroke} />
	</svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
	fill: PropTypes.string,
};
