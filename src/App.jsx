//import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import Missing404 from "./components/Missing 404/Missing404";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import LandingPage from "./components/LandingPage/LandingPage";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* <LandingPage /> */}
        <Route path="*" element={<Missing404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
