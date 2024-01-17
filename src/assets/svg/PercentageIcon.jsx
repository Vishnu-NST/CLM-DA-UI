import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill={"none"}
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.98438 16L15.651 4.33334"
      stroke="#707EAE"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.65137 8.5C7.03208 8.5 8.15137 7.38071 8.15137 6C8.15137 4.61929 7.03208 3.5 5.65137 3.5C4.27066 3.5 3.15137 4.61929 3.15137 6C3.15137 7.38071 4.27066 8.5 5.65137 8.5Z"
      stroke="#707EAE"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.9844 16.8333C15.3651 16.8333 16.4844 15.7141 16.4844 14.3333C16.4844 12.9526 15.3651 11.8333 13.9844 11.8333C12.6037 11.8333 11.4844 12.9526 11.4844 14.3333C11.4844 15.7141 12.6037 16.8333 13.9844 16.8333Z"
      stroke="#707EAE"
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
