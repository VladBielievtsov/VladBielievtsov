import { Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Museki from "./pages/Museki";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="museki" element={<Museki />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
