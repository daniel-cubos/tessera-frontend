import { useEffect, useState } from "react";
import "./style.css";
import profileImage from "../../assets/pizzaria.png";
import Ilustracao from "../../assets/illustration-2.svg";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ModalNovoProduto from "../../components/ModalNovoProduto";
import Snackbars from "../../components/Snackbar";
import CardProduto from "../../components/CardProduto";

function Dashboard() {
  const [produtosCadastrados, setProdutosCadastrados] = useState();
  const [qtdProdutos, setQtdProdutos] = useState(0);
  const [open, setOpen] = useState(false);
  const { deslogar, token } = useAuth();
  const history = useHistory();

  const redirLogin = () => {
    history.push("/");
  };

  const { get } = require("../../requisicoes");

  const buscarProdutos = async () => {
    try {
      const resposta = await get("produtos", token);
      const dados = await resposta.json();
      if (JSON.stringify(dados) === JSON.stringify(produtosCadastrados)) return;
      setProdutosCadastrados(dados);
      setQtdProdutos(dados.length);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    buscarProdutos();
  }, [open]);

  return (
    <div className="Dashboard">
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(205.02deg, rgba(18, 18, 18, 0.2) 36.52%, rgba(18, 18, 18, 0.8) 77.14%), url('https://lh3.googleusercontent.com/d/1OLCQnzBu9xwUyNocAhAgqsK1LarpSSTN')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={profileImage} alt="" className="profileImage" />
        <div className="cabecalho">
          <h1>Pizza Pizzaria & Delivery</h1>
          <button className="logout" onClick={() => deslogar(redirLogin)}>
            Logout
          </button>
        </div>
        <img src={Ilustracao} alt="" className="desenhoBanner" />
      </div>
      {qtdProdutos === 0 ? (
        <div className="dashboardSemProdutos">
          <p>
            Você ainda não tem nenhum produto no seu cardápio. <br />
            Gostaria de adicionar um novo produto?
          </p>
          <ModalNovoProduto open={open} setOpen={setOpen} />
          <Snackbars />
        </div>
      ) : (
        <div className="produtos">
          {produtosCadastrados.map((produto) => (
            <CardProduto
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              id={produto.id}
              ativo={produto.ativo}
              permiteObservacoes={produto.permite_observacoes}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
