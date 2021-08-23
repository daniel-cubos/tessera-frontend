import React, { useEffect, useState } from "react";
import TextField from "../Inputs/TextField";
import Select from "../Inputs/Select";
import useValidacaoForm from "../../hooks/useValidacaoForm";

const opcoes = [
  "Escolha uma categoria",
  "Diversos",
  "Lanches",
  "Carnes",
  "Massas",
  "Pizzas",
  "Japonesa",
  "Chinesa",
  "Mexicano",
  "Brasileira",
  "Italiana",
  "Árabe",
];

function FormPasso2({ register }) {
  const [nomeRestaurante, setNomeRestaurante] = useState();
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState();
  const { setErro, setMensagem, setAbrirMensagem } = useValidacaoForm();

  useEffect(() => {
    if (!nomeRestaurante || !categoria) {
      setMensagem({
        texto: "Campo obrigatório vazio!",
        severidade: "error"
      });
      setErro(true);
    } else if (
      nomeRestaurante === "" ||
      categoria === "" ||
      categoria === "0"
    ) {
      setMensagem({
        texto: "Campo obrigatório vazio!",
        severidade: "error"
      });
      setErro(true);
    } else {
      setMensagem({});
      setAbrirMensagem(false);
      setErro(false);
    }
  }, [nomeRestaurante, categoria]);

  return (
    <div className="FormPasso2">
      <label htmlFor="nomeRestaurante">Nome do restaurante</label>
      <TextField
        id="nomeRestaurante"
        type="text"
        value={nomeRestaurante}
        setValue={setNomeRestaurante}
        register={register}
      />
      <label htmlFor="categoria">Categoria do restaurante</label>
      <Select
        id="categoria"
        opcoes={opcoes}
        value={categoria}
        setValue={setCategoria}
        register={register}
      />
      <label htmlFor="descricao">Descrição</label>
      <TextField
        type="text"
        id="descricao"
        multiline={true}
        rows={2}
        inputProps={{ maxLength: "50" }}
        value={descricao}
        setValue={setDescricao}
        register={register}
      />
      <span className="avisoQtdCaracteres">Máx.: 50 caracteres</span>
    </div>
  );
}

export default FormPasso2;
