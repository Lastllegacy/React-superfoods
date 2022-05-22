import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Contact from "./components/pages/Contact";
import List from "./components/pages/List";
import MainInfo from "./components/pages/MainInfo";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainInfo />} />
        <Route path="/list" element={<List />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
