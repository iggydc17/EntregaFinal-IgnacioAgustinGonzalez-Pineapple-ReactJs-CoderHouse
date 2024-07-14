//import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import Missing404 from "./components/Missing 404/Missing404";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from "./components/Store/Store";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/category/:category/" element={<ItemListContainer />} />
        <Route exact path="/detail/:id/" element={<ItemDetailContainer />} />
        <Route path="*" element={<Missing404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
