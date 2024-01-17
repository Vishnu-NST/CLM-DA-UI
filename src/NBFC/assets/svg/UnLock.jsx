import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4998 14.1667C10.9601 14.1667 11.3332 13.7936 11.3332 13.3333C11.3332 12.8731 10.9601 12.5 10.4998 12.5C10.0396 12.5 9.6665 12.8731 9.6665 13.3333C9.6665 13.7936 10.0396 14.1667 10.4998 14.1667Z"
      stroke={fill}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.3333 8.33337H4.66667C3.74619 8.33337 3 9.07957 3 10V16.6667C3 17.5872 3.74619 18.3334 4.66667 18.3334H16.3333C17.2538 18.3334 18 17.5872 18 16.6667V10C18 9.07957 17.2538 8.33337 16.3333 8.33337Z"
      stroke={fill}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.3335 8.33335V5.83335C6.33354 4.91616 6.63621 4.02461 7.19458 3.29697C7.75294 2.56932 8.5358 2.04624 9.42174 1.80885C10.3077 1.57146 11.2472 1.63303 12.0946 1.984C12.942 2.33497 13.6499 2.95573 14.1085 3.75002"
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
