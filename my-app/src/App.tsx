import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header";


import Catalog from "./pages/catalog/catalog";
import ProductCard from "./pages/product-card";

function App() {
  return (    
    <div className="App">      
      <Header title = "" cart_price={1000}/>
      <Routes>          
          <Route path="/catalog" element={<Catalog />}/>          
          <Route path="/product-card" element={<ProductCard />}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
