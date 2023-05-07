import Board from "./component/Board/Board";
import Title from "./component/Title/Title";
import Button from "./component/Button/Button";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Title />
      <Board size={5} />
      <Button />
    </div>
  );
};

export default App;
