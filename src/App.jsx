import logo from "./logo.svg";
import "./App.css";
import { createRoot } from "react-dom/client";
import Vehicle from "./Vehicle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <Vehicle name="Toyota"/>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
