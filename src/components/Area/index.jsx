import React from "react";
import "./Area.css";
import Produto from "../Produtos/index";

const Area = (props) => {
  const corDeFundo = { backgroundColor: props.corSecundaria };
  const corSublinhado = { borderColor: props.corPrimaria };

  return (
    props.produtos.length > 0 ? (
      <section className="area" style={corDeFundo}>
        <h3 style={corSublinhado}>{props.nome}</h3>
        <div className="produtos">
          {props.produtos.map((produto) => (
            <Produto
              key={produto.nome}
              nome={produto.nome}
              marca={produto.marca}
              secao={produto.secao}
              preco={produto.preco}
              condicao={produto.condicao}
            />
          ))}
        </div>
      </section>
    ) : ''
  );
};

export default Area;