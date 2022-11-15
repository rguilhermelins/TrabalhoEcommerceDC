import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import FormEndereco from "./pages/FormEndereco";
import Products from "./pages/Products";
import Carrinho from "./pages/Carrinho";
import Navbar from "./components/Navbar";
import FavoriteT  from "./pages/FavoriteT";

import Edit from "./pages/FavoriteT/Edit/editFavorite";


export default function () {
  return (
    <>
      <div className="card">
        
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<h1>Hello Word</h1>} />
            <Route path="produtos" element={<Products />} />
            <Route path="endereco" element={<FormEndereco />} />
            <Route path="carrinho" element={<Carrinho />} />
            <Route path="favorito" element={<FavoriteT/>} />
            <Route path="/edit/:id" element={<Edit/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
