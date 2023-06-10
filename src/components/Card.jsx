import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomButton from "./CustomButton";
import { Link } from 'react-router-dom';

export default function MediaCard(props) {
  const { image, name, bredFor } = props;
  const linkTo = `/${name}`;
  return (
    <Card sx={{ maxWidth: 345, height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bred For: {bredFor}
        </Typography>
      </CardContent>
      <CardActions style={{ alignSelf: "flex-end" }}>
        <Link to={`/${name}`} style={{ textDecoration: "none" }}>
          <CustomButton
            backgroundColor="#A22948"
            color="#fff"
            buttonText="Learn more"
            to={`/${name}`}
          >
            Learn more
          </CustomButton>
        </Link>
      </CardActions>
    </Card>
  );
}
