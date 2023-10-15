import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack, Divider, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../redux/slices/productSlice.js";
import { useDispatch } from "react-redux";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingAnimation, setLoadingAnimation] = React.useState(false);
  return (
    <Card
      sx={{
        margin: "auto",
        position: "relative",
        maxWidth: "20rem",
        height: "34rem",
        backgroundColor: "#ffffff",
        borderRadius: "1rem",
        padding: "0.5rem",
        transition: "all ease 0.5s",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        ":hover": {
          backgroundImage:
            "linear-gradient(to top, #cfd9df70 0%, #e2ebf000 100%)",
          "& .child-Image": {
            scale: "1.2",
          },
        },
      }}
    >
      <CardMedia
        component="img"
        image={props.image}
        alt="product"
        sx={{
          objectFit: "fill",
          width: "100%",
          borderRadius: "1rem",
          height: "20rem",
          cursor: "pointer",
          transition: "all ease 0.5s",
        }}
        className="child-Image"
        onClick={() => {
          navigate(`/info/${props.id}`);
        }}
      />
      <CardContent style={{ marginTop: "0.5rem" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          sx={{ cursor: "pointer", height: "6rem" }}
          onClick={() => {
            navigate(`/info/${props.id}`);
          }}
        >
          <Typography
            variant="h6"
            component="div"
            style={{
              fontWeight: 700,
              textTransform: "capitalize",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.title}
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Typography
              variant="subtitle-1"
              component="div"
              style={{
                fontWeight: 700,
                textTransform: "capitalize",
                whiteSpace: "nowrap",
                overflow: "hidden",
                color: "blue",
              }}
            >
              {props.rating.count} in stock
            </Typography>
            <Typography
              variant="subtitle-1"
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
              {props.rating.rate} out of 5
            </Typography>
          </Stack>
        </Stack>

        <Divider style={{ margin: "1.2rem 0" }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="h5"
            component="div"
            style={{
              fontWeight: 700,
            }}
          >
            Rs {props.price}
          </Typography>

          <Button
            size="medium"
            color="error"
            variant="contained"
            style={{
              borderRadius: "0.75rem",
              fontWeight: 600,
              height: "100%",
              padding: "0.5rem",
            }}
            // startIcon={<DeleteIcon />}
            disabled={loadingAnimation}
            startIcon={
              loadingAnimation ? <PublishedWithChangesIcon /> : <DeleteIcon />
            }
            onClick={() => {
              setLoadingAnimation(true);
              setTimeout(() => {
                dispatch(deleteProduct(props.id));
                setLoadingAnimation(false);
              }, [250]);
            }}
          >
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
