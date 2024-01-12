import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill={fill}
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.2732 5.38332V3.5H4.72656V5.38332H8.0823C9.33063 5.38332 10.3843 6.17243 10.7813 7.26664H4.72656V9.14996H10.7813C10.5845 9.69917 10.2193 10.1751 9.73609 10.5123C9.25282 10.8495 8.67511 11.0315 8.0823 11.0333H4.72656V13.3065L10.0823 18.5666H12.7938L7.04106 12.9166H8.0823C9.18678 12.9152 10.257 12.5397 11.1124 11.8536C11.9679 11.1674 12.5563 10.2126 12.7784 9.14996H15.2732V7.26664H12.7784C12.6314 6.5813 12.3286 5.93747 11.8925 5.38332H15.2732Z"
      fill="#707EAE"
    />
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};
