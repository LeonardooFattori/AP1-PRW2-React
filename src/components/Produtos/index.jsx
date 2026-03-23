import React from "react";
import "./Produtos.css";

const logos = {
  HP: "/imagens/HP-Logo.jpg",
  Positivo: "/imagens/Positivo-Logo.jpg",
  Dell: "/imagens/Dell-Logo.png",
  Asus: "/imagens/Asus-Logo.png",
  "Xing Ling": "/imagens/XingLing-Logo.png",
};

const Produto = (props) => {
  return (
    <div className="produto">
      <div className="cabecalho">
        <img src={logos[props.marca]} alt={props.marca} />
      </div>
      <div className="rodape">
        <h4 className="produto-nome">{props.nome}</h4>
        <p><strong>Marca:</strong> {props.marca}</p>
        <p><strong>Seção:</strong> {props.secao}</p>
        <p><strong>Preço:</strong> R$ {props.preco}</p>
        <p><strong>Condição:</strong> {props.condicao}</p>
      </div>
    </div>
  );
};

export default Produto;