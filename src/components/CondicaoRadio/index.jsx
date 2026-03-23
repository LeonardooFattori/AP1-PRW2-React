import React from "react";
import "./CondicaoRadio.css";

const CondicaoRadio = (props) => {
  return (
    <div className="condicao-radio">
      <label className="condicao-radio__label">{props.label}</label>
      <div className="condicao-radio__opcoes">
        {props.itens.map((item) => (
          <label className="condicao-radio__item" key={item}>
            <input
              type="radio"
              value={item}
              checked={props.valor === item}
              onChange={(e) => props.aoAlterado(e.target.value)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CondicaoRadio;