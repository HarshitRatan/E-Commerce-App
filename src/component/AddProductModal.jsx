import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputTextField from "./InputTextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { addProduct } from "../redux/slices/productSlice";
import { useDispatch } from "react-redux";

const AddProductModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30rem",
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{ fontWeight: 600 }}
        >
          Add Product
        </Typography>
        <InputTextField label="Image URL" />
        <InputTextField label="Heading" />
        <InputTextField label="Description" />
        <InputTextField label="Price" />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Button
            sx={{ fontWeight: "600", width: 150, height: 50 }}
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <Button
            sx={{ fontWeight: "600", width: 150, height: 50 }}
            variant="contained"
            onClick={() => {
              dispatch(addProduct());
            }}
          >
            Add Product
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
