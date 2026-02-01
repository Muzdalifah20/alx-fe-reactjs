import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
