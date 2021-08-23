import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import TextField from "./Inputs/TextField";
import InputAmount from "../Inputs/InputAmount";
import Switch from "./Switch";
import { useForm } from "react-hook-form";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "1000px",
    backgroundColor: "hsla(0, 0%, 100%, 1)",
    padding: "64px",
    borderRadius: "16px",
    boxShadow: "0px 4px 16px rgba(50, 50, 50, 0.4)",
    display: "flex",
    flexDirection: "column",
  },
  contained: {
    marginRight: theme.spacing(1),
    borderRadius: "20px",
    boxShadow: "none",
    height: "40px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "600",
    fontSize: "14px",
    color: "hsla(0, 0%, 100%, 1)",
    backgroundColor: "hsla(14, 99%, 41%, 1)",
    paddingLeft: "40px",
    paddingRight: "40px",
    "&:hover": {
      backgroundColor: "hsla(14, 84%, 36%, 1)",
      boxShadow: "none",
    },
    "&:disabled": {
      backgroundColor: "hsla(218, 8%, 80%, 1)",
      color: "hsla(210, 3%, 45%, 1)",
    },
  },
  button: {
    marginRight: theme.spacing(1),
    borderRadius: "20px",
    textTransform: "none",
    boxShadow: "none",
    height: "40px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "600",
    fontSize: "14px",
  },
  text: {
    color: "hsla(14, 99%, 41%, 1)",
    "&:hover": {
      color: "hsla(14, 84%, 36%, 1)",
      boxShadow: "none",
      background: "none",
    },
    "&:disabled": {
      color: "hsla(218, 8%, 80%, 1)",
    },
  },
  buttonsStepper: {
    margin: "auto 0 0 auto",
    display: "flex",
    flexDirection: "row",
  },
}));

export default function SimpleModal({ labelBotao }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle());
  const [open, setOpen] = useState(false);
  const [nomeProduto, setNomeProduto] = useState();
  const [descricaoProduto, setDescricaoProduto] = useState();
  const [valor, setValor] = useState();
  const [ativarProduto, setAtivarProduto] = useState(true);
  const [permiteObservacao, setPermiteObservacao] = useState(true);
  const { register, handleSubmit } = useForm();


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    localStorage.clear();
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const body = (
    <form
      style={modalStyle}
      className={classes.paper}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="FormNovoProduto">
        <h1>Novo produto</h1>
        <label htmlFor="nome">Nome</label>
        <TextField
          id="nomeProduto"
          type="text"
          value={nomeProduto}
          setValue={setNomeProduto}
          register={register}
        />
        <label htmlFor="email">Descrição</label>
        <TextField
          type="text"
          id="descricaoProduto"
          multiline={true}
          rows={2}
          inputProps={{ maxLength: "50" }}
          value={descricaoProduto}
          setValue={setDescricaoProduto}
          register={register}
        />
        <span className="avisoQtdCaracteres">Máx.: 50 caracteres</span>
        <label htmlFor="valor">Valor</label>
        <InputAmount
          id="valor"
          value={valor}
          setValue={setValor}
          register={register}
          width="176px"
        />
        <Switch
          id="ativarProduto"
          label="Ativar produto"
          register={register}
          value={ativarProduto}
          setValue={setAtivarProduto}
        />
        <Switch
          id="permiteObservacao"
          label="Permite observações"
          register={register}
          value={permiteObservacao}
          setValue={setPermiteObservacao}
        />
      </div>
      <div className={classes.buttonsStepper}>
        <Button
          onClick={handleClose}
          className={clsx(classes.button, classes.text)}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          variant="contained"
          className={clsx(classes.button, classes.contained)}
        >
          {labelBotao}
        </Button>
      </div>
    </form>
  );

  return (
    <div>
      <Button
        type="button"
        variant="contained"
        onClick={handleOpen}
        className={clsx(classes.button, classes.contained)}
      >
        {labelBotao}
      </Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}