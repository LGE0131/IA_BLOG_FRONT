import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { CustomIMGS, imgs } from "../ImgUrl";

export default function MultiActionAreaCard({}) {
  const map = new Map();

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 310, zIndex: 90 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={map()} alt="sushi" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            sushi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Assorted Sushi
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
