import * as React from "react";

import PropTypes from "prop-types";

const SVGComponent = ({ fill, ...rest }) => (
  <svg
    width="26"
    height="28"
    viewBox="0 0 26 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4881_63344)">
      <path
        d="M5.77538 16.4925C5.56577 15.4812 5.49751 14.4429 5.57277 13.4106C5.7254 11.3752 6.51679 9.45213 7.82126 7.94671C9.12574 6.44128 10.8685 5.43984 12.7728 5.10142C14.6771 4.76301 16.6337 5.10702 18.332 6.07883C20.0302 7.05064 21.3727 8.59452 22.1462 10.4653C22.9198 12.3361 23.08 14.4265 22.6014 16.4045C22.1229 18.3826 21.0331 20.1349 19.505 21.3832C17.9769 22.6314 16.0982 23.3041 14.1672 23.2943C12.2362 23.2845 10.3637 22.5929 8.84695 21.3292"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.9192 17.8195L2.83545 14.4985"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.91797 17.8193L8.63406 14.4705"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g clip-path="url(#clip1_4881_63344)">
        <path
          d="M17.7323 17.6348L14.6323 15.6787C14.3468 15.4767 14.1096 15.2072 13.9395 14.8916C13.7694 14.5759 13.6711 14.2228 13.6523 13.86L13.6523 9.5249"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_4881_63344">
        <rect
          width="25.3683"
          height="24.0087"
          fill="white"
          transform="matrix(0.0740089 -0.997258 0.996576 0.082685 0 25.6753)"
        />
      </clipPath>
      <clipPath id="clip1_4881_63344">
        <rect
          width="5.8622"
          height="9.98346"
          fill="white"
          transform="translate(12.9023 8.73193) scale(0.999283 1.00064)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};
