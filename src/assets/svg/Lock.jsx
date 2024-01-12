import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99984 14.1667C10.4601 14.1667 10.8332 13.7936 10.8332 13.3333C10.8332 12.8731 10.4601 12.5 9.99984 12.5C9.5396 12.5 9.1665 12.8731 9.1665 13.3333C9.1665 13.7936 9.5396 14.1667 9.99984 14.1667Z"
      stroke={fill}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.8333 8.33337H4.16667C3.24619 8.33337 2.5 9.07957 2.5 10V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V10C17.5 9.07957 16.7538 8.33337 15.8333 8.33337Z"
      stroke={fill}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 8V5.33333C6 4.44928 6.42143 3.60143 7.17157 2.97631C7.92172 2.35119 8.93913 2 10 2C11.0609 2 12.0783 2.35119 12.8284 2.97631C13.5786 3.60143 14 4.44928 14 5.33333V8"
      stroke={fill}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};
