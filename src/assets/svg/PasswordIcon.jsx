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
      d="M12.4993 3C11.7966 2.99984 11.1037 3.16428 10.4761 3.48015C9.84841 3.79603 9.30346 4.25454 8.88489 4.81896C8.46633 5.38337 8.18578 6.038 8.06574 6.73037C7.94569 7.42274 7.98949 8.13361 8.19361 8.806L3 14V17H5.99978L11.1934 11.806C11.8123 11.9939 12.4644 12.0461 13.1053 11.9591C13.7463 11.8722 14.3609 11.648 14.9074 11.302C15.4538 10.956 15.9193 10.4962 16.272 9.95405C16.6247 9.41187 16.8564 8.8 16.9513 8.16017C17.0462 7.52033 17.002 6.86755 16.8219 6.24632C16.6417 5.62509 16.3297 5.05002 15.9071 4.56028C15.4846 4.07054 14.9615 3.67766 14.3734 3.40841C13.7853 3.13915 13.1461 2.99985 12.4993 3ZM12.4993 11C12.1551 10.9998 11.8128 10.9489 11.4834 10.849L10.9099 10.675L10.4864 11.0985L8.89606 12.689L8.20661 12L7.49966 12.707L8.18911 13.3965L7.39617 14.1895L6.70672 13.5L5.99978 14.207L6.68922 14.8965L5.58581 16H3.99993V14.414L8.90056 9.513L9.32453 9.0895L9.15054 8.516C8.93685 7.8115 8.95073 7.05754 9.19021 6.36138C9.4297 5.66523 9.88259 5.06231 10.4845 4.63841C11.0863 4.21451 11.8065 3.99121 12.5426 4.00027C13.2787 4.00932 13.9932 4.25028 14.5845 4.68886C15.1758 5.12744 15.6137 5.74131 15.836 6.44315C16.0582 7.14499 16.0536 7.89906 15.8226 8.59809C15.5917 9.29713 15.1462 9.90553 14.5495 10.3368C13.9529 10.768 13.2354 11.0001 12.4993 11Z"
      fill="#8794C2"
    />
    <path
      d="M12.5 10C13.8807 10 15 8.88071 15 7.5C15 6.11929 13.8807 5 12.5 5C11.1193 5 10 6.11929 10 7.5C10 8.88071 11.1193 10 12.5 10Z"
      fill="#8794C2"
    />
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};
