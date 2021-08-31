import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from './rotas';
import ModalCarrinho from "./components/ModalCarrinho";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ModalCarrinho />
  </React.StrictMode>,
  document.getElementById('root')
);
