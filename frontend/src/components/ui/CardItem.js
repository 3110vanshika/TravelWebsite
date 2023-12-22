import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardItem({imageUrl, title, price, buttonTxt}) {
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={imageUrl}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            &#8377;{price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {buttonTxt}
        </Button>
      </CardActions>
    </Card>
  )
}
