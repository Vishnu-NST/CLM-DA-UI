import React from "react";

import { Box, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import PropTypes from "prop-types";

const defaultButtonStyles = {
  borderRadius: 2,
  width: "100%",
  height: "100%",
  border: "none",
  textTransform: "none",
  fontWeight: "600",
};

const CustomButton = ({
  customStyle,
  buttonType,
  buttonVariant,
  buttonDisabled,
  disabledColor,
  disabledBackground,
  btnLoaderEnabled,
  className,
  children,
  ...props
}) => {
  const buttonStyles = {
    ...defaultButtonStyles,
    ...customStyle, // Allow users to override default styles
  };

  const CircularProgressStyle = {
    // color: theme.palette.primary.light,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-12px",
    marginLeft: "-12px",
  };
  const disabledStyle = {
    ".Mui-disabled": {
      color: disabledColor,
      backgroundColor: disabledBackground,
      borderColor: disabledColor,
      cursor: "no-drop",
    },
  };

  return (
    <Box sx={disabledStyle}>
      <Button
        type={buttonType}
        variant={buttonVariant}
        sx={buttonStyles}
        className={className}
        disabled={buttonDisabled}
        {...props}
      >
        {btnLoaderEnabled ? (
          <CircularProgress size={24} sx={CircularProgressStyle} />
        ) : (
          <>{children}</>
        )}
      </Button>
    </Box>
  );
};

CustomButton.propTypes = {
  customStyle: PropTypes.object,
  buttonVariant: PropTypes.string,
  buttonType: PropTypes.string,
  buttonDisabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  disabledBackground: PropTypes.string,
  btnLoaderEnabled: PropTypes.bool,
  className: PropTypes.string,
  buttonStarticon: PropTypes.node,
  buttonEndicon: PropTypes.node,
  children: PropTypes.node,
};

export default CustomButton;
