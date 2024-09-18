import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import AddPage from "./pages/AddPage";
import UpdatePage from "./pages/UpdatePage";
import AccomplishedPage from "./pages/AccomplishedPage";
import ContactPage from "./pages/ContactPage";
import Taches from "./pages/Taches";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/accomplished" element={<AccomplishedPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/taches" element={<Taches />} />
      </Routes>
    </>
  );
}

export default App;
