import { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { NoticiasProvider } from './context/NoticiasProvide';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
function App() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography
            align="center"
            sx={{
              fontWeight: 'bold',
            }}
            component="h1"
            variant="h3"
          >
            Buscador de noticias
          </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} xs={12} lg={4}>
            <Formulario></Formulario>
          </Grid>
        </Grid>
        <ListadoNoticias></ListadoNoticias>
      </Container>
    </NoticiasProvider>
  );
}

export default App;
