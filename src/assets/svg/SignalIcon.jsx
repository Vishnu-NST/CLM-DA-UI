import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M2.5 18.3333V11.5H5.83333V18.3333H2.5ZM8.33333 18.3333V5.50004H11.6667V18.3333H8.33333ZM14.1667 18.3333V4.00543e-05H17.5V18.3333H14.1667Z"
      fill={fill}
    />
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};
