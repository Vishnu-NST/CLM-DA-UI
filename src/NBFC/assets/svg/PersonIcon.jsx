import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.66667 3.83331C10.5507 3.83331 11.3986 4.1845 12.0237 4.80962C12.6488 5.43474 13 6.28259 13 7.16665C13 8.0507 12.6488 8.89855 12.0237 9.52367C11.3986 10.1488 10.5507 10.5 9.66667 10.5C8.78261 10.5 7.93477 10.1488 7.30964 9.52367C6.68452 8.89855 6.33333 8.0507 6.33333 7.16665C6.33333 6.28259 6.68452 5.43474 7.30964 4.80962C7.93477 4.1845 8.78261 3.83331 9.66667 3.83331ZM9.66667 5.49998C9.22464 5.49998 8.80072 5.67557 8.48816 5.98814C8.1756 6.3007 8 6.72462 8 7.16665C8 7.60867 8.1756 8.0326 8.48816 8.34516C8.80072 8.65772 9.22464 8.83331 9.66667 8.83331C10.1087 8.83331 10.5326 8.65772 10.8452 8.34516C11.1577 8.0326 11.3333 7.60867 11.3333 7.16665C11.3333 6.72462 11.1577 6.3007 10.8452 5.98814C10.5326 5.67557 10.1087 5.49998 9.66667 5.49998ZM9.66667 11.3333C11.8917 11.3333 16.3333 12.4416 16.3333 14.6666V17.1666H3V14.6666C3 12.4416 7.44167 11.3333 9.66667 11.3333ZM9.66667 12.9166C7.19167 12.9166 4.58333 14.1333 4.58333 14.6666V15.5833H14.75V14.6666C14.75 14.1333 12.1417 12.9166 9.66667 12.9166Z"
      fill="#8794C2"
    />
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};