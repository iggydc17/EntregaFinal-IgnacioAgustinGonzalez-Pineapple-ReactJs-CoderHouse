import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Vision from "./components/PageVision/Vision";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import BuyerPersonalInfoForm from './components/BuyForms/BuyerPersonalInfoForm/BuyerPersonalInfoForm';
import ShippingForm from './components/BuyForms/ShippingForm/ShippingForm';
import PaymentForm from './components/BuyForms/PaymentForm/PaymentForm';
import CheckSummaryInfo from './components/CheckSummaryInfo/CheckSummaryInfo';
import SuccessfulPurchase from './components/SuccessfulPurchase/SuccessfulPurchase';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from "./components/Footer/Footer";
import Missing404 from "./components/Missing 404/Missing404";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './contexts/CartContext';
import { OrderProvider } from './contexts/OrderContext';
import { NotificationProvider } from './contexts/NotificationContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <OrderProvider>
              <NavBar />
              <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/store" element={<Store />} />
                <Route exact path="/category/vision" element={<Vision />} />
                <Route exact path="/category/:category/" element={<ItemListContainer />} />
                <Route exact path="/detail/:id/" element={<ItemDetailContainer />} />
                <Route exact path="/cart/" element={<Cart />} />
                <Route exact path="/buyer-personal-info-form/" element={<BuyerPersonalInfoForm />} />
                <Route exact path="/shipping-form/" element={<ShippingForm />} />
                <Route exact path="/payment-form/" element={<PaymentForm />} />
                <Route exact path="/check-summary-info/" element={<CheckSummaryInfo />} />
                <Route exact path="/successful-purchase/" element={<SuccessfulPurchase />} />
                <Route exact path="/aboutUs/" element={<AboutUs />} />
                <Route exact path="/contactDev/" element={<ContactUs />} />
                <Route path="*" element={<Missing404 />} />
              </Routes>
            </OrderProvider>
          </CartProvider>
          <Footer />
        </NotificationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
