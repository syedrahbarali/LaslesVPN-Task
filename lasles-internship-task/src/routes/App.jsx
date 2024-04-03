import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
