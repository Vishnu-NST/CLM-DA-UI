import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.06023 8.50016C10.9585 8.50016 12.4974 7.00778 12.4974 5.16683C12.4974 3.32588 10.9585 1.8335 9.06023 1.8335C7.16193 1.8335 5.62305 3.32588 5.62305 5.16683C5.62305 7.00778 7.16193 8.50016 9.06023 8.50016Z"
      stroke="#1B1B1B"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.9644 15.1667C14.9644 12.5867 12.3178 10.5 9.05937 10.5C5.80092 10.5 3.1543 12.5867 3.1543 15.1667"
      stroke="#1B1B1B"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};
