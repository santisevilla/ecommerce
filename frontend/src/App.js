import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Detail from "./screen/Detail";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">Amazon</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;