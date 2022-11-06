import React, { useEffect, useState } from "react";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import "./styles.css";

function Favorite() {
  const [item, setItem] = useState([]);
  const [remove, setRemove] = useState([]); 

 
  const removeFavorite = (id) => {
    if (false === window.confirm('Tem certeza?')) {
      return;
    }

    fetch('http://localhost:8000/favorito/'+id, {
      method: 'DELETE'
    });

    setRemove(
      // collaborators.filter((cadaCoach) => {
      //   return cadaCoach.id !== id;
      // })
      remove.filter((cadaFavorite) => cadaFavorite.id !== id)
    )
  }


  useEffect(() => {
    fetch("http://localhost:8000/favorito")
      .then((res) => res.json())
      .then((dados) => setItem(dados));
  }, []);

  return (
    <>
      <h1>PAGINA DE FAVORITOS</h1>
      <div className="container-favorite">
        {item.map((cadaItem) => (
          <div>
            <section className="card-favorite">
              <article className="content-image">
                <img className="image" src={cadaItem.foto} />
              </article>
              <article className="title-favorite">
                <span>{cadaItem.nome}</span>
              </article>
              <article className="content-favorite">
                <span>Valor: {cadaItem.valor}</span>
                <div className="content-preco">
                  <ModeEditOutlineOutlinedIcon />
                  <DeleteForeverOutlinedIcon onClick={() => removeFavorite(cadaItem.id)} />
                </div>
              </article>
            </section>
          </div>
        ))}
      </div>
    </>
  );
}

export default Favorite;
