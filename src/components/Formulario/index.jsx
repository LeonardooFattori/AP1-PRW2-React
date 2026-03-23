import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/index.jsx";
import ListaSuspensa from "../ListaSuspensa/index.jsx";
import CondicaoRadio from "../CondicaoRadio/index.jsx";
import Botao from "../Botao/index.jsx";

const Formulario = (props) => {
  const marcas = ["HP", "Positivo", "Dell", "Asus", "Xing Ling"];

  const [secao, setSecao] = useState("Computadores");
  const [marca, setMarca] = useState("HP");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [condicao, setCondicao] = useState("Novo");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoProdutoCadastrado({ secao, marca, nome, preco, condicao });
    setSecao("Computadores");
    setMarca("HP");
    setNome("");
    setPreco("");
    setCondicao("Novo");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do Produto:</h2>
        <ListaSuspensa
          label="Seção"
          itens={props.secoes}
          valor={secao}
          aoAlterado={(valor) => setSecao(valor)}
        />
        <ListaSuspensa
          label="Marca"
          itens={marcas}
          valor={marca}
          aoAlterado={(valor) => setMarca(valor)}
        />
        <CampoTexto
          label="Nome"
          placeholder="Digite o nome do produto"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Preço"
          placeholder="Digite o preço do produto"
          valor={preco}
          aoAlterado={(valor) => setPreco(valor)}
        />
        <CondicaoRadio
          label="Condição"
          itens={["Novo", "Usado"]}
          valor={condicao}
          aoAlterado={(valor) => setCondicao(valor)}
        />
        <Botao>Inserir Produto</Botao>
      </form>
    </section>
  );
};

export default Formulario;
