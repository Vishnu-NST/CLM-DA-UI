/* eslint-disable no-unused-vars */
import * as React from 'react';

import PropTypes from 'prop-types';

const SVGComponent = ({ fill, ...rest }) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 17 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M8.125 6.76887V2.08984L6.76953 3.42671"
			stroke="#8794C2"
			strokeWidth="1.25"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M8.125 2.08984L9.48047 3.42671"
			stroke="#8794C2"
			strokeWidth="1.25"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M1.33594 9.44238H4.32478C4.44956 9.44249 4.57183 9.47697 4.6778 9.54195C4.78377 9.60692 4.86923 9.6998 4.92454 9.81012L5.71724 11.3737C5.82965 11.5971 6.00314 11.7849 6.21811 11.9161C6.43309 12.0473 6.68097 12.1166 6.93376 12.1161H9.32583C9.57812 12.116 9.82537 12.0465 10.0398 11.9153C10.2541 11.7842 10.4272 11.5966 10.5394 11.3737L11.3321 9.81012C11.388 9.7003 11.4736 9.60786 11.5794 9.54297C11.6853 9.47808 11.8072 9.44328 11.9318 9.44238H14.8867"
			stroke="#8794C2"
			strokeWidth="1.25"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M4.73634 4.18164C2.33727 4.52966 1.34766 5.91976 1.34766 8.77391V10.7792C1.34766 14.1214 2.70313 15.4582 6.09181 15.4582H10.1582C13.5469 15.4582 14.9024 14.1214 14.9024 10.7792V8.77391C14.9024 5.91976 13.9128 4.52966 11.5137 4.18164"
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
