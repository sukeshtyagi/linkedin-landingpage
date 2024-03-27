import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Premium from "./components/Premium";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Premium child="signup"/>} />
        <Route path="/signin" element={<Premium child="signin"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
