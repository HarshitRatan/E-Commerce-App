import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const InputTextField = ({ label, error }) => {
  return (
    <Box sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography variant="body1" component="h2" sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
      <TextField fullWidth />
      {error && (
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{ fontWeight: 400, color: "red" }}
        >
          *Required
        </Typography>
      )}
    </Box>
  );
};

export default InputTextField;
