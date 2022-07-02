import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="titulo">
      <h1>Tarefas</h1>
      <Form />
      <List />
    </div>
  );
}

export function Form() {
  const handleOnSubmit = () => {};

  const [InputTarefas, setTarefas] = React.useState([]);

  return (
    <div>
      <span>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="tarefa"></label>
        </form>
        <input id="tarefa" name="tarefa" placeholder="Minha Tarefa" />
      </span>
      <button className="adicionar">Adicionar</button>
    </div>
  );
}

export function List() {
  return (
    <div>
      <div>
        <input className="inputs_all Input1" />
        <button className="bts_excluir Excluir1">Excluir</button>
      </div>
      <div>
        <input className=" inputs_all Input2" />
        <button className="bts_excluir Excluir2">Excluir</button>
      </div>
      <div>
        <input className="inputs_all Input3" />
        <button className="bts_excluir Excluir3">Excluir</button>
      </div>
    </div>
  );
}
