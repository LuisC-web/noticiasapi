import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material';
import useNoticias from '../hooks/useNoticias';
import { CATEGORIAS } from '../global/variablesGlobales';
const Formulario = () => {
  const { categoria, handleChangeCategoria } = useNoticias();
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select
          labe="categoria"
          onChange={handleChangeCategoria}
          value={categoria}
        >
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Formulario;
