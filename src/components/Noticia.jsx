import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActions,
  Link,
} from '@mui/material';
import React from 'react';

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        <CardMedia
          component="img"
          alt={`Noticia de ${title}`}
          image={urlToImage}
          height={250}
        />
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" color="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            variant="button"
            width={'100%'}
            textAlign="center"
            sx={{
              textDecoration: 'none',
            }}
          >
            Leer noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticia;
