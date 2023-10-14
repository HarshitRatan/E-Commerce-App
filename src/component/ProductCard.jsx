import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack, Divider, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductCard = (props) => {
  return (
    <Card
      sx={{
        margin: "auto",
        position: "relative",
        maxWidth: 400,
        maxHeight: 480,
        backgroundColor: "#f2f5fc",
        borderRadius: "1rem",
        padding: "0.5rem",
        transition: "all ease 1s",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        ":hover": {
          backgroundColor: "#f3f6fd",
        },
      }}
    >
      <CardMedia
        component="img"
        image={props.image}
        alt="car"
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "1rem",
          height: "15rem",
        }}
      />
      <CardContent style={{ marginTop: "0.5rem" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Typography
            variant="h5"
            component="div"
            style={{
              fontWeight: 700,
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.title}
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
            }}
          >
            {props.description}
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
                textOverflow: "ellipsis",
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
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
