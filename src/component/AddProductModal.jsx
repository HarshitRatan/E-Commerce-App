import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputTextField from "./InputTextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { addProduct } from "../redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

const AddProductModal = ({ open, setOpen }) => {
  const [loadingAnimation, setLoadingAnimation] = React.useState(false);
  const validation = Yup.object({
    image: Yup.string().url("Invalid URL").required("Image URL is required"),
    title: Yup.string().required("Heading is Required *"),
    description: Yup.string().required("Description is Required *"),
    price: Yup.number().min(1).required("Price is Required *"),
    rating: Yup.object({
      count: Yup.number().required("Stock is Required *"),
    }),
  });
  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      price: "",
      category: "default",
      rating: {
        count: 100,
        rate: 4.1,
      },
    },
    validationSchema: validation,
    onSubmit: (value, action) => {
      dispatch(addProduct(value));
      handleClose();
      action.resetForm();
    },
  });
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    handleReset();
  };
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
        <InputTextField
          name="image"
          label="Image URL"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched?.image && errors?.image && (
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{ fontWeight: 400, color: "red" }}
          >
            {errors?.image}
          </Typography>
        )}
        <InputTextField
          name="title"
          label="Heading"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched?.title && errors?.title && (
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{ fontWeight: 400, color: "red" }}
          >
            {errors?.title}
          </Typography>
        )}
        <InputTextField
          name="description"
          label="Description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched?.description && errors?.description && (
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{ fontWeight: 400, color: "red" }}
          >
            {errors?.description}
          </Typography>
        )}
        <InputTextField
          name="price"
          label="Price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched?.price && errors?.price && (
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{ fontWeight: 400, color: "red" }}
          >
            {errors?.price}
          </Typography>
        )}
        <InputTextField
          name="rating.count"
          label="In Stock"
          value={values.rating.count}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched?.rating?.count && errors?.rating?.count && (
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{ fontWeight: 400, color: "red" }}
          >
            {errors?.rating?.count}
          </Typography>
        )}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%", marginTop: 2 }}
        >
          <Button
            sx={{ fontWeight: "600", width: 150, height: 50 }}
            variant="contained"
            color="error"
            onClick={() => handleClose()}
          >
            Close
          </Button>
          <Button
            disabled={loadingAnimation}
            startIcon={loadingAnimation ? <PublishedWithChangesIcon /> : ""}
            sx={{ fontWeight: "600", width: 170, height: 50 }}
            variant="contained"
            onClick={() => {
              setLoadingAnimation(true);
              setTimeout(() => {
                handleSubmit();
                setLoadingAnimation(false);
              }, [250]);
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
