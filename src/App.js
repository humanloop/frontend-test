import logo from "./loop-black.svg";
import "./App.css";
import Annotator from "./Annotator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload (and delete me )
        </p>
        <Annotator />
      </header>
    </div>
  );
}

export default App;
