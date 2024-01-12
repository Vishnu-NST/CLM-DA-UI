import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";

export default function CustomDrawer({ anchor, state, Component, ...props }) {
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    state.value = false;
  };

  return (
    <div>
      <Drawer
        anchor={anchor}
        open={state}
        onClose={toggleDrawer()}
        sx={{
          height: "100%",
          ".MuiDrawer-paper": {
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
          },
        }}
      >
        <Box
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 510 }}
          role="presentation"
        >
          <Component {...props} state={state} />
        </Box>
      </Drawer>
    </div>
  );
}
