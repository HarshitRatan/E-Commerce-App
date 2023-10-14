import React from "react";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
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
      <Container>
        <Box>
          <Typography
            variant="h4"
            component="div"
            style={{
              fontWeight: 800,
              textTransform: "capitalize",
              marginTop: 10,
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
              image={currentProduct.image}
              alt="car"
              style={{
                objectFit: "cover",
                width: "70%",
                borderRadius: "1rem",
                height: "15rem",
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
              variant="h5"
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
              {currentProduct.title}
            </Typography>
            <Typography
              variant="subtitle-1"
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
              {currentProduct.description}
            </Typography>
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
