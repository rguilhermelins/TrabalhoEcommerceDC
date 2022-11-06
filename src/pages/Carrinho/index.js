import React, { useEffect, useState } from "react";
import "./styles.css";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";

function Carrinho() {
  const [items, setItems] = useState([]);
  useEffect (() => {
    fetch ('http://localhost:8000/carinho')
    .then((res)  => res.json())
    .then((dados) =>  setItems (dados));
  }, [])
  
  return (
    <>
      <div className="content-carrinho">
        <h1> - Carrinho - </h1>
      </div>
      {items.map (cadaItem => (
        <div className="container-carrinho">
        <span>{cadaItem.nome}</span>
        <span>{cadaItem.quantidade}</span>
        <span>{cadaItem.valor}</span>
      </div>
      ))}
      
      <Divider />
    </>
  );
}

export default Carrinho;
