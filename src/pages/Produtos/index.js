import React, { useEffect, useState } from "react";
import "./style.css";
import profileImage from "../../assets/pizzaria.png";
import Ilustracao from "../../assets/illustration-2.svg";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ModalNovoProduto from "../../components/ModalNovoProduto";

export default function Dashboard() {
  const [produtosCadastrados, setProdutosCadastrados] = useState();
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
      if (produtosCadastrados === dados) return;
      setProdutosCadastrados(dados);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtosCadastrados]);

  return (
    <div className="Dashboard">
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(205.02deg, rgba(18, 18, 18, 0.2) 36.52%, rgba(18, 18, 18, 0.8) 77.14%), url(https://media.gazetadopovo.com.br/2021/07/09163516/receita-massa-pizza-bigstock-960x540.jpg)`,
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
      <div className="produtos">
        <p>
          Você ainda não tem nenhum produto no seu cardápio. <br />
          Gostaria de adicionar um novo produto?
        </p>
        <ModalNovoProduto />
      </div>
    </div>
  );
}
