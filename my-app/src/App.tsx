import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Catalog from "./pages/catalog";
import ProductCard from "./pages/product-card";

function App() {
  return (    
    <div className="App">      
      <Header title = "" cart_price={1000}/>
      <Routes>          
          <Route path="/" element={<Catalog />}/>          
          <Route path="product-card" element={<ProductCard />}/>
        </Routes>
      
    </div>
  );
}

export default App;
