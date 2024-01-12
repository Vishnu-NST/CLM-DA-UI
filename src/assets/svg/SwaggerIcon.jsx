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
    <g clip-path="url(#clip0_2530_40081)">
      <path
        d="M10 0C4.48609 0 0 4.48594 0 10.0002C0 15.5142 4.48609 20 10 20C15.5139 20 20 15.5141 20 10.0002C20 4.48609 15.5139 0 10 0ZM6.79797 4.88953C6.97375 4.88797 7.15547 4.89469 7.35422 4.89469V5.98688C7.24313 5.99469 7.14672 6.00984 7.04688 6.00984C6.38156 5.98656 6.34687 6.21344 6.29688 6.76703C6.26594 7.10922 6.30828 7.46313 6.28531 7.80906C6.25844 8.15531 6.21594 8.49766 6.14687 8.83969C6.05078 9.32812 5.74687 9.6975 5.32781 10.005C6.14328 10.5356 6.23531 11.3586 6.28906 12.1931C6.31594 12.6431 6.30453 13.0967 6.35063 13.5428C6.38516 13.8888 6.52 13.9772 6.87781 13.9888C7.02391 13.9923 7.17344 13.9888 7.34297 13.9888V15.0575C6.28547 15.2383 5.41266 14.9383 5.19703 14.0423C5.12625 13.7132 5.08256 13.3789 5.06641 13.0427C5.04344 12.685 5.08141 12.3272 5.05469 11.9697C4.97781 10.9891 4.85094 10.6584 3.91281 10.6122V9.39344C3.97998 9.3781 4.04795 9.36652 4.11641 9.35875C4.63172 9.33172 4.85078 9.17437 4.96234 8.66672C5.01625 8.38234 5.04734 8.09391 5.05875 7.80156C5.09734 7.24422 5.08187 6.67484 5.17797 6.12094C5.31234 5.325 5.80453 4.94062 6.62359 4.89437C6.68141 4.89156 6.73922 4.89 6.79781 4.88937L6.79797 4.88953ZM13.1977 4.89625C14.1677 4.88953 14.8077 5.35437 14.8758 6.38594C14.9105 6.90125 14.9064 7.42063 14.9373 7.93594C14.9528 8.21297 14.9948 8.49359 15.0642 8.7625C15.1755 9.18563 15.3989 9.33594 15.8448 9.355H15.8452C15.918 9.35906 15.9873 9.37016 16.0873 9.38172V10.6011C16.0337 10.6196 15.9782 10.6325 15.9219 10.6394C15.3258 10.6778 15.0527 10.9241 14.9952 11.52C14.9567 11.9006 14.9605 12.2887 14.9337 12.6736C14.9221 13.0935 14.8835 13.5121 14.8181 13.927C14.6644 14.6809 14.1953 15.0578 13.4186 15.1039C13.1686 15.1192 12.9189 15.1039 12.6458 15.1039V14.0156C12.7919 14.0078 12.9187 13.9959 13.0494 13.9922C13.5148 13.9806 13.6761 13.8306 13.6994 13.3694C13.7263 12.8616 13.7377 12.3542 13.7569 11.8506C13.7914 11.1158 13.9917 10.462 14.672 10.0045C14.2839 9.72781 13.9722 9.38953 13.8877 8.93578C13.7912 8.38578 13.7608 7.82063 13.7069 7.26313C13.6798 6.98203 13.68 6.70141 13.6531 6.42453C13.6262 6.12063 13.4186 6.01688 13.1455 6.01328C12.9725 6.00974 12.7994 6.00834 12.6264 6.00906V4.94781C12.8151 4.91583 13.0062 4.89859 13.1977 4.89625ZM7.56172 9.29703H7.57734C7.96562 9.30484 8.27703 9.62406 8.26922 10.0123V10.0509C8.24609 10.4316 7.91953 10.7238 7.53875 10.7005H7.49234C7.10781 10.6817 6.80797 10.3509 6.82719 9.96266C6.84656 9.57812 7.17719 9.27797 7.56172 9.29703ZM9.98828 9.29703V9.2975C10.4152 9.29359 10.6961 9.57 10.6998 9.98938C10.6998 10.4237 10.4342 10.7008 10.0114 10.7008C9.58062 10.7008 9.29609 10.4314 9.29609 10.0125C9.29219 9.98938 9.29219 9.97031 9.29219 9.94703C9.30359 9.57781 9.61516 9.28547 9.98828 9.29703ZM12.4572 9.29703C12.8494 9.29703 13.1952 9.62781 13.1763 10.0087C13.1531 10.42 12.7956 10.762 12.4416 10.7006H12.4337C12.3408 10.7009 12.2487 10.6828 12.1628 10.6473C12.0769 10.6119 11.9988 10.5598 11.933 10.4941C11.8673 10.4284 11.8152 10.3503 11.7797 10.2644C11.7443 10.1785 11.7262 10.0864 11.7264 9.99344C11.7322 9.80463 11.8121 9.62569 11.9489 9.49536C12.0856 9.36503 12.2683 9.29378 12.4572 9.29703Z"
        fill="#C4161C"
      />
    </g>
    <defs>
      <clipPath id="clip0_2530_40081">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;

SVGComponent.propTypes = {
  fill: PropTypes.string,
};
