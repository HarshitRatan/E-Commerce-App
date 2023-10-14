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
  addProduct,
  sortProductHighToLow,
  sortProductLowToHigh,
} from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [sortByPriceValue, setSortByPriceValue] = React.useState(0);
  const allProduct = useSelector((state) => state.allProducts);

  const handleSortOptions = (value) => {
    if (value === 1) {
      dispatch(sortProductHighToLow());
    } else if (value === 2) {
      dispatch(sortProductLowToHigh());
    }
  };
  console.log("allProduct ::: ", allProduct);
  return (
    <Box sx={{ marginTop: "25px", marginBottom: "50px" }}>
      <Grid
        container
        spacing={2}
        sx={{
          borderRadius: "1rem",
          padding: "1rem",
          marginBottom: "2.5rem",
          backgroundColor: "#eaeff4",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
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
            Optimite E-Commerce App
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
                handleSortOptions(e.target.value);
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
            onClick={() => dispatch(addProduct())}
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
            <Grid item key={index} xs={12} sm={6} md={4}>
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
          No Product Found Please Add Some Product.
        </Box>
      )}
    </Box>
  );
};

export default Home;
