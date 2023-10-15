import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const InputTextField = ({ label, name, value, onChange, onBlur }) => {
  return (
    <Box sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography variant="body1" component="h2" sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
      <TextField
        fullWidth
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Box>
  );
};

export default InputTextField;
