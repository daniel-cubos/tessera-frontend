import illustrationRestaurantes from '../../../assets/illustration-2.svg';
import headerImagem from '../../../assets/bg-pizzaria.png';
import profileImg from '../../../assets/profile.svg';
import useStyles from './style';
import Header from '../../../components/HeaderCliente';
import { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useAuth from '../../../hooks/useAuth';
import CardRestaurante from '../../../components/CardRestaurante';

const { get } = require("../../../requisicoes");

function RestauranteCliente() {
  const classes = useStyles();
  const { token } = useAuth();
  const [restaurantes, setRestaurantes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState('');
  const [restaurantesFiltrados, setRestaurantesFiltrados] = useState([]);



  useEffect(() => {
    const buscarRestaurantes = async () => {
      setLoading(true);
      try {
        const resposta = await get("restaurante", token);
        if (!resposta) {
          Error('Erro ao buscar restaurantes.');
          setLoading(false);
          return;
        }
        const dados = await resposta.json();
        setRestaurantes(dados);
      } catch (error) {
        Error('Erro ao buscar restaurantes.');
      }
      setLoading(false);
    };

    buscarRestaurantes();
  }, []);

  useEffect(() => {
    if (busca.length > 0) {
      const filtroRestaurante = restaurantes.filter((item) => {
        if (item.nome.toLowerCase().includes(busca.toLowerCase())) {
          return item;
        } else {
          return;
        }
      });
      setRestaurantesFiltrados(filtroRestaurante);
    }
  }, [busca]);

  return (
    <div className={classes.containerPaginaProdutos}>
      <div className={loading ? classes.backdrop : classes.noBackdrop}>
        <CircularProgress />
      </div>
      <Header
        banner={headerImagem}
        imagem={profileImg}
        nome='Restaurantes'
      />
      <div className={classes.restaurantesContainer}>
        <input
          type='text'
          placeholder='Buscar'
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        {restaurantes.length > 0 &&
          busca.length === 0 &&
          restaurantes.map((item) => (
            <CardRestaurante
              key={item.id}
              titulo={item.nome}
              descricao={item.descricao}
              preco={item.valor_minimo_pedido}
              imagem={item.imagem}
              id={item.id}
            />
          ))}
        {busca.length > 0 &&
          restaurantesFiltrados.map((item) => (
            <CardRestaurante
              key={item.id}
              titulo={item.nome}
              descricao={item.descricao}
              preco={item.valor_minimo_pedido}
              imagem={item.imagem}
              id={item.id}
            />
          ))}
        {((busca.length > 0 && restaurantesFiltrados.length === 0) ||
          restaurantes.length === 0) && (
            <div className={classes.semRestaurantes}>
              <p>Desculpe, nenhum restaurante encontrado.</p>
            </div>
          )}
      </div>
    </div>
  );
}

export default RestauranteCliente;
