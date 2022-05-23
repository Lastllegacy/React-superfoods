import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AddNewFood from "./components/pages/AddNewFood";
import List from "./components/pages/List";
import MainInfo from "./components/pages/MainInfo";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainInfo />} />
        <Route path="/list" element={<List />} />
        <Route path="/addNewFood" element={<AddNewFood />} />
      </Routes>
    </Layout>
  );
}

export default App;
