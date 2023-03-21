import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Catalog from './pages/catalog';
import ProductCard from './pages/product-card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Layout />}/>
          <Route index element={<Catalog />}/>
          <Route path="product-card" element={<ProductCard />}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
