import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
function App() {
  const[cartItems,setcartItems]=useState([]);
  // console.log(cartItems);
  
  return (
    <div className="App">
      
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center' />
        <Header cartItems={cartItems}/>
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Search' element={<Home/>}/>
      <Route path='product/:id' element={ <ProductDetails cartItems={cartItems} setcartItems={setcartItems}/>}/>
       <Route path='/cart' element={<Cart cartItems={cartItems} setcartItems={setcartItems}/>}/>
        </Routes>
        <Footer/>
        </div>
      </Router>
      
          </div>
  );
}

export default App;
