import React from "react";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Container, Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useSelector } from "react-redux";

const Info = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const allProduct = useSelector((state) => state.allProducts);
  const [currentProduct, setCurrentProduct] = React.useState({});

  React.useLayoutEffect(() => {
    const currentProductId = parseInt(id);
    const currentProductArray = allProduct.data.filter(
      (currentProduct) => currentProduct.id === currentProductId
    );
    setCurrentProduct(currentProductArray[0]);
  }, [id, allProduct]);

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
            Optimite E-Commerce App
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            sx={{ fontWeight: "600", width: 250, height: 50 }}
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <Container
        sx={{
          borderRadius: "0.8rem",
          padding: "2rem",
          backgroundColor: "white",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            component="div"
            style={{
              fontWeight: 800,
              textTransform: "capitalize",
              marginBottom: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "rgb(90, 103, 126)",
            }}
          >
            Product Information
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              image={currentProduct?.image}
              alt="car"
              sx={{
                objectFit: "fill",
                width: "80%",
                borderRadius: "1rem",
                height: "30rem",
                transition: "all ease 0.5s",
                cursor: "pointer",
                ":hover": {
                  scale: "1.1",
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              component="div"
              style={{
                fontWeight: 700,
                textTransform: "capitalize",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
              }}
            >
              {currentProduct?.title}
            </Typography>
            <Typography
              variant="body-1"
              component="div"
              style={{
                fontWeight: 700,
                textTransform: "capitalize",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
              }}
            >
              {currentProduct?.description}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Typography
                variant="h6"
                component="div"
                style={{
                  fontWeight: 700,
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  color: "blue",
                }}
              >
                {currentProduct?.rating?.count} in stock
              </Typography>
              <Typography
                variant="h6"
                component="div"
                style={{
                  fontWeight: 700,
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: "green",
                }}
              >
                {currentProduct?.rating?.rate} out of 5
              </Typography>
            </Stack>
            <Typography
              variant="h5"
              component="div"
              style={{
                fontWeight: 700,
              }}
            >
              Rs {currentProduct.price}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Info;
