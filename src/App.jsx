import Layout from "./components/Layout/Layout";
import Counter from "./pages/Counter/Counter";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/counter" element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
