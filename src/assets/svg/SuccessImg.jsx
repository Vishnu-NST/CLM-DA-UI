/* eslint-disable no-unused-vars */
import * as React from 'react';

import PropTypes from 'prop-types';

const SVGComponent = ({ fill, ...rest }) => (
	<svg
		width="21"
		height="20"
		viewBox="0 0 21 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M10.3079 1.6665C5.71628 1.6665 1.97461 5.40817 1.97461 9.99984C1.97461 14.5915 5.71628 18.3332 10.3079 18.3332C14.8996 18.3332 18.6413 14.5915 18.6413 9.99984C18.6413 5.40817 14.8996 1.6665 10.3079 1.6665ZM14.2913 8.08317L9.56628 12.8082C9.44961 12.9248 9.29128 12.9915 9.12461 12.9915C8.95794 12.9915 8.79961 12.9248 8.68294 12.8082L6.32461 10.4498C6.08294 10.2082 6.08294 9.80817 6.32461 9.5665C6.56628 9.32484 6.96628 9.32484 7.20794 9.5665L9.12461 11.4832L13.4079 7.19984C13.6496 6.95817 14.0496 6.95817 14.2913 7.19984C14.5329 7.4415 14.5329 7.83317 14.2913 8.08317Z"
			fill="#00B85E"
		/>
	</svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
	fill: PropTypes.string,
};
