import "./App.css";
import BodyComponent from "./components/BodyComponent";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>Chuck Norris Jokes</h1>
      </header>
      <div className="App__body">
        <BodyComponent />
      </div>
    </div>
  );
}

export default App;
