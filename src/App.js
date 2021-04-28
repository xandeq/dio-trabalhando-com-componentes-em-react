import React from "react";
import Item from "./components/Item";

const App = () => {
  return (
    <>
      <ul class="list-group list-group-flush">
        <Item className="list-group-item list-group-item-action">Teste 1</Item>
        <Item>Teste 2</Item>
        <Item>Teste 3</Item>
      </ul>
    </>
  );
};

export default App;
