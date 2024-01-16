/* eslint-disable no-unused-vars */
import * as React from 'react';

import PropTypes from 'prop-types';

const SVGComponent = ({ fill, ...rest }) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 17 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M5.91806 14.2262H5.58818C2.95421 14.2262 1.63672 13.5433 1.63672 10.132V6.71752C1.63672 3.9908 2.95387 2.62744 5.58818 2.62744H10.8581C13.4924 2.62744 14.8096 3.99184 14.8096 6.72063V10.1351C14.8096 12.8639 13.4924 14.2282 10.8581 14.2282H10.5333C10.4311 14.229 10.3305 14.2541 10.2392 14.3014C10.1479 14.3488 10.0682 14.4172 10.0065 14.5014L9.01385 15.863C8.92943 16.0009 8.81272 16.1144 8.67458 16.193C8.53643 16.2717 8.38132 16.3129 8.22366 16.3129C8.066 16.3129 7.91089 16.2717 7.77274 16.193C7.6346 16.1144 7.51789 16.0009 7.43347 15.863L6.44485 14.4983C6.37952 14.4183 6.29911 14.3529 6.20854 14.3061C6.11796 14.2593 6.01912 14.2321 5.91806 14.2262Z"
			stroke="#8794C2"
			strokeWidth="1.25"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M4.10938 6.60498H12.3422"
			stroke="#8794C2"
			strokeWidth="1.25"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M4.47266 10.1558H9.41274"
			stroke="#8794C2"
			strokeWidth="1.25"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
	fill: PropTypes.string,
};
