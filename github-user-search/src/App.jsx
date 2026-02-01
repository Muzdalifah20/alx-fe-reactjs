import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
