import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.login);
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route
          path={isLoggedIn ? "dashboard" : "signin"}
          element={<Dashboard />}
        />
      </Route>
    </Routes>
  );
}

export default App;
