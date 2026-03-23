import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/index.jsx";
import Formulario from "./components/Formulario/index.jsx";
import Area from "./components/Area/index.jsx";

function App() {
  const secoes = [
    {
      nome: "Computadores",
      corPrimaria: "#004691",
      corSecundaria: "#51a2ff",
    },
    {
      nome: "Acessórios",
      corPrimaria: "#f59700",
      corSecundaria: "#ffc04b",
    },
    {
      nome: "Impressoras",
      corPrimaria: "#00e1ff",
      corSecundaria: "#77efff",
    },
    {
      nome: "Games",
      corPrimaria: "#ff0400",
      corSecundaria: "#ff6f76",
    },
    {
      nome: "Gadgets",
      corPrimaria: "#00ff55",
      corSecundaria: "#92ffbc",
    },
  ];

  const listaSecoes = secoes.map((area) => area.nome);

  const [produtos, setProdutos] = useState([]);

  const adicionaProduto = (produto) => {
    const listaNova = produtos.slice();
    listaNova.push(produto);
    setProdutos(listaNova);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario secoes={listaSecoes} aoProdutoCadastrado={(produto) => adicionaProduto(produto)} />
      {secoes.map((area) => (
        <Area
          key={area.nome}
          nome={area.nome}
          corPrimaria={area.corPrimaria}
          corSecundaria={area.corSecundaria}
          produtos={produtos.filter(produto => produto.secao === area.nome)}  
        />
      ))}
    </div>
  );
}

export default App;
