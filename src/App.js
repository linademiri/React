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
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <div className="flex-1 max-w-7xl mx-auto p-6 w-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}



export default App;