/* eslint-disable no-unused-vars */
import * as React from 'react';

import PropTypes from 'prop-types';

const SVGComponent = ({ fill, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 19 20"
		fill="none"
		// style={{ marginTop: '0.5rem' }}
	>
		<path
			d="M10.8558 1.6665C6.26413 1.6665 2.52246 5.40817 2.52246 9.99984C2.52246 14.5915 6.26413 18.3332 10.8558 18.3332C15.4475 18.3332 19.1891 14.5915 19.1891 9.99984C19.1891 5.40817 15.4475 1.6665 10.8558 1.6665ZM14.8391 8.08317L10.1141 12.8082C9.99746 12.9248 9.83913 12.9915 9.67246 12.9915C9.50579 12.9915 9.34746 12.9248 9.23079 12.8082L6.87246 10.4498C6.63079 10.2082 6.63079 9.80817 6.87246 9.5665C7.11413 9.32484 7.51413 9.32484 7.75579 9.5665L9.67246 11.4832L13.9558 7.19984C14.1975 6.95817 14.5975 6.95817 14.8391 7.19984C15.0808 7.4415 15.0808 7.83317 14.8391 8.08317Z"
			fill={fill}
		/>
	</svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
	fill: PropTypes.string,
};
