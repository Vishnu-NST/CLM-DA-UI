import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83268 3.33317C5.83268 2.89114 6.00828 2.46722 6.32084 2.15466C6.6334 1.8421 7.05732 1.6665 7.49935 1.6665H12.4993C12.9414 1.6665 13.3653 1.8421 13.6779 2.15466C13.9904 2.46722 14.166 2.89114 14.166 3.33317V4.99984H17.4993C17.7204 4.99984 17.9323 5.08764 18.0886 5.24392C18.2449 5.4002 18.3327 5.61216 18.3327 5.83317C18.3327 6.05418 18.2449 6.26615 18.0886 6.42243C17.9323 6.57871 17.7204 6.6665 17.4993 6.6665H16.6085L15.886 16.7848C15.8561 17.2053 15.6679 17.5988 15.3594 17.8861C15.051 18.1735 14.6451 18.3332 14.2235 18.3332H5.77435C5.3528 18.3332 4.9469 18.1735 4.63842 17.8861C4.32994 17.5988 4.14178 17.2053 4.11185 16.7848L3.39102 6.6665H2.49935C2.27834 6.6665 2.06637 6.57871 1.91009 6.42243C1.75381 6.26615 1.66602 6.05418 1.66602 5.83317C1.66602 5.61216 1.75381 5.4002 1.91009 5.24392C2.06637 5.08764 2.27834 4.99984 2.49935 4.99984H5.83268V3.33317ZM7.49935 4.99984H12.4993V3.33317H7.49935V4.99984ZM5.06102 6.6665L5.77518 16.6665H14.2243L14.9385 6.6665H5.06102ZM8.33268 8.33317C8.5537 8.33317 8.76566 8.42097 8.92194 8.57725C9.07822 8.73353 9.16602 8.94549 9.16602 9.1665V14.1665C9.16602 14.3875 9.07822 14.5995 8.92194 14.7558C8.76566 14.912 8.5537 14.9998 8.33268 14.9998C8.11167 14.9998 7.89971 14.912 7.74343 14.7558C7.58715 14.5995 7.49935 14.3875 7.49935 14.1665V9.1665C7.49935 8.94549 7.58715 8.73353 7.74343 8.57725C7.89971 8.42097 8.11167 8.33317 8.33268 8.33317ZM11.666 8.33317C11.887 8.33317 12.099 8.42097 12.2553 8.57725C12.4116 8.73353 12.4993 8.94549 12.4993 9.1665V14.1665C12.4993 14.3875 12.4116 14.5995 12.2553 14.7558C12.099 14.912 11.887 14.9998 11.666 14.9998C11.445 14.9998 11.233 14.912 11.0768 14.7558C10.9205 14.5995 10.8327 14.3875 10.8327 14.1665V9.1665C10.8327 8.94549 10.9205 8.73353 11.0768 8.57725C11.233 8.42097 11.445 8.33317 11.666 8.33317Z"
      fill="#707EAE"
    />
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};
