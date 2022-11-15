import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TextField, Button, Divider } from "@mui/material";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function Edit() {
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

export default Edit;
