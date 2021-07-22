import Home from "./Components/Home";
import { CountryProvider } from "./Contexts/CountryContext";
import "./Css/App.css";

function App() {
  return (
    <div className="App">
      <CountryProvider>
        <Home />
      </CountryProvider>
    </div>
  );
}

export default App;
