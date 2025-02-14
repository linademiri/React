import { Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products/Products';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
