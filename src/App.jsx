import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Vision from "./components/PageVision/Vision";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Missing404 from "./components/Missing 404/Missing404";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './contexts/CartContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/category/vision" element={<Vision />} />
            <Route exact path="/category/:category/" element={<ItemListContainer />} />
            <Route exact path="/detail/:id/" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<Missing404 />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
