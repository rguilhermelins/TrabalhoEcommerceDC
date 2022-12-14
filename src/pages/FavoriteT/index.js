import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TextField, Button, Divider } from "@mui/material";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import "./styles.css";

function Favorite() {
  const [item, setItem] = useState([]);
  const [remove, setRemove] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/favorito")
      .then((res) => res.json())
      .then((dados) => setItem(dados));
  }, []);

  const removeFavorite = (id) => {
    if (
      false ===
      window.confirm(
        "Tem certeza que deseja remover?" && window.location.reload()
      )
    ) {
      return;
    }
    fetch("http://localhost:8000/favorito/" + id, {
      method: "DELETE",
    });
    setRemove(remove.filter((cadaFavorite) => cadaFavorite.id !== id));
  };

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
                  <Link to={"/edit/" + cadaItem.id}>
                    <ModeEditOutlineOutlinedIcon />
                  </Link>
                  <DeleteForeverOutlinedIcon
                    onClick={() => removeFavorite(cadaItem.id)}
                  />
                </div>
              </article>
            </section>
          </div>
        ))}
      </div>
    </>
  );
}

function EditFavorite() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [foto, setFoto] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleName = (event) => {
    setNome(event.target.value);
  };

  let params = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/favorito/" + params.id)
      .then((response) => response.json())
      .then((response) => {
        setNome(response.nome);
        setValor(response.valor);
        setFoto(response.foto);
      });
  }, [params]);

  const saveFavorite = () => {
    fetch("http://localhost:8000/favorito/" + params.id, {
      method: "PATCH",
      body: JSON.stringify({
        nome: nome,
        valor: valor,
        foto: foto,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("deu certo");
  };

  return (
    <div>
      <div className="d-flex flex-column">
        <p>editar</p>

        <div className="text-field">
          <TextField
            value={nome}
            onChange={handleName}
            fullWidth
            label="Nome"
            type="text"
          />
          <br />
          <br />
          <TextField
            value={valor}
            onChange={(event) => setValor(event.target.value)}
            fullWidth
            label="Valor"
            type="text"
          />
          <br />
          <br />
          <TextField
            value={foto}
            onChange={(event) => setFoto(event.target.value)}
            fullWidth
            label="Foto"
            type="url"
          />
          <br />
          <br />
        </div>
        <Button onClick={saveFavorite} variant="contained">
          Editar
        </Button>
      </div>
      
    </div>
  );
}

export default Favorite;
