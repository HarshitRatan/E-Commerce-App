import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductCard from "../component/ProductCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import {
  sortProductHighToLow,
  sortProductLowToHigh,
} from "../redux/slices/productSlice";
import AddProductModal from "../component/AddProductModal";

const Home = () => {
  const dispatch = useDispatch();
  const [sortByPriceValue, setSortByPriceValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const allProduct = useSelector((state) => state.allProducts);

  React.useEffect(() => {
    if (sortByPriceValue === 1) {
      dispatch(sortProductHighToLow());
    } else if (sortByPriceValue === 2) {
      dispatch(sortProductLowToHigh());
    }
  }, [sortByPriceValue, dispatch]);
  return (
    <Box sx={{ marginTop: "25px", marginBottom: "50px" }}>
      <Grid
        container
        spacing={2}
        sx={{
          borderRadius: "1rem",
          padding: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        <Grid item sm={12} md={6}>
          <Typography
            variant="h5"
            component="div"
            style={{
              fontSize: "2rem",
              color: "#5a677e",
              fontWeight: "800",
              textTransform: "capitalize",
            }}
          >
            Ratan E-Commerce App
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControl>
            <Select
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              value={sortByPriceValue}
              onChange={(e) => {
                setSortByPriceValue(e.target.value);
              }}
              sx={{ width: 250, height: 50 }}
            >
              <MenuItem value={0} disabled>
                Sort by price
              </MenuItem>
              <MenuItem value={1}>High To Low</MenuItem>
              <MenuItem value={2}>Low To High</MenuItem>
            </Select>
          </FormControl>

          <Button
            sx={{ fontWeight: "600", width: 250, height: 50 }}
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Add Product
          </Button>
        </Grid>
      </Grid>

      {allProduct.isLoading && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!allProduct.isLoading && allProduct.data.length > 0 && (
        <Grid container spacing={2} mb={2}>
          {allProduct.data.map((value, index) => (
            <Grid item key={index} xs={6} sm={6} md={4} lg={3} xl={2}>
              <ProductCard {...value} />
            </Grid>
          ))}
        </Grid>
      )}
      {!allProduct.isLoading && allProduct.data.length === 0 && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box> No Product Found Please Add Some Products</Box>
            <Box> or</Box>
            <Box>Connect To Internet And Refresh The Page.</Box>
          </Box>
        </Box>
      )}
      <AddProductModal open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Home;
