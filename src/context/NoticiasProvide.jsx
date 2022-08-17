import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import tablePaginationClasses from '@mui/base/TablePaginationUnstyled/tablePaginationUnstyledClasses';
const NoticiasContexto = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);
  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };
  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      setPagina(1);
    };
    consultarApi();
  }, [categoria]);
  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&page=${pagina}&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
    };
    consultarApi();
  }, [pagina]);
  const handleChangePagina = (e, valor) => {
    setPagina(valor);
  };

  return (
    <NoticiasContexto.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina,
      }}
    >
      {children}
    </NoticiasContexto.Provider>
  );
};

export { NoticiasProvider };
export default NoticiasContexto;
