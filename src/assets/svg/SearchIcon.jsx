import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="13"
    height="15"
    viewBox="0 0 13 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="5.90909"
      cy="6.40909"
      r="5.20909"
      stroke="#707EAE"
      stroke-width="1.4"
    />
    <line
      x1="12.0101"
      y1="13.5"
      x2="9.45455"
      y2="10.9445"
      stroke="#707EAE"
      stroke-width="1.4"
      stroke-linecap="round"
    />
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};
