import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import imgProduto from "../../assets/pizza.png";
import ModalEditarProduto from "../ModalEditarProduto";
import { useEffect } from "react";

const useStyles = makeStyles(() => ({
  paper: {
    width: "592px",
    height: "238px",
    boxShadow: "0px 4px 6px 0px hsla(0, 0%, 20%, 0.24)",
    borderRadius: "24px",
    padding: "32px",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },
  nomeProduto: {
    fontSize: "20px",
    fontFamily: '"Montserrat", sans-serif',
    color: "hsla(223, 4%, 34%, 1)",
    fontWeight: 600,
  },
  infos: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  tagPreco: {
    background:
      "linear-gradient(0deg, rgba(13, 138, 79, 0.1), rgba(13, 138, 79, 0.1)), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
    color: "hsla(152, 100%, 19%, 1)",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "10px",
    padding: "4px 15px",
    width: "max-content",
    borderRadius: "4px",
    marginTop: "16px",
  },
  imgProduto: {
    width: "174px",
    height: "174px",
    borderRadius: "16px",
  },
  hoverCard: {
    position: "absolute",
    backgroundColor: "hsl(0, 0%, 100%, 0.6)",
    width: "592px",
    height: "238px",
    top: 0,
    left: 0,
    borderRadius: "24px",
    backdropFilter: "blur(6px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function CardProduto({ nome, descricao, preco, id, ativo, permiteObservacoes }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);  
  const [open, setOpen] = useState(false);

  useEffect(() => {

  }, [open]);

  const handleHoverOver = () => {
    setHover(true);
  };

  const handleHoverLeave = () => {
    setHover(false);
  };

  return (
    <Paper
      className={classes.paper}
      onMouseOver={handleHoverOver}
      onMouseLeave={handleHoverLeave}
    >
      <div className={classes.infos}>
        <h3 className={classes.nomeProduto}>{nome}</h3>
        <p>{descricao}</p>
        <div className={classes.tagPreco}>
          R$ {String((preco / 100).toFixed(2)).replace(".", ",")}
        </div>
      </div>
      <img src={imgProduto} alt="" className={classes.imgProduto} />
      <div
        className={classes.hoverCard}
        style={{ display: `${hover ? "flex" : "none"}` }}
      >
        <ModalEditarProduto id={id} nome={nome} descricao={descricao} preco={preco} ativo={ativo} permiteObservacoes={permiteObservacoes} open={open} setOpen={setOpen} />
      </div>
    </Paper>
  );
}
