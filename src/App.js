import React from "react";
import Item from "./components/Item";

const App = () => {
  return (
    <>
      <ul class="list-group list-group-flush">
        <Item>Teste 1</Item>
        <Item>Teste 2</Item>
        <Item>Teste 3</Item>
      </ul>
    </>
  );
};

export default App;
