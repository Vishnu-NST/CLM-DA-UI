import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.3086 1.25C5.49609 1.25 1.55859 5.1875 1.55859 10C1.55859 14.8125 5.49609 18.75 10.3086 18.75C15.1211 18.75 19.0586 14.8125 19.0586 10C19.0586 5.1875 15.1211 1.25 10.3086 1.25ZM9.62109 5H10.9961V11.875H9.62109V5ZM10.3086 15.625C9.80859 15.625 9.37109 15.1875 9.37109 14.6875C9.37109 14.1875 9.80859 13.75 10.3086 13.75C10.8086 13.75 11.2461 14.1875 11.2461 14.6875C11.2461 15.1875 10.8086 15.625 10.3086 15.625Z"
      fill="#C4161C"
    />
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};
