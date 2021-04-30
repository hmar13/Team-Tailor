import "./App.css";
import BodyComponent from "./components/BodyComponent";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__header__title">Chuck Norris Jokes</h1>
      </header>
      <div className="app__body">
        <BodyComponent />
      </div>
    </div>
  );
}

export default App;
