import React, { useContext } from 'react';
import NoticiasContexto from '../context/NoticiasProvide';
const useNoticias = () => {
  return useContext(NoticiasContexto);
};

export default useNoticias;
