import { Button, TextField } from "@mui/material";
import { useState } from "react";

import "./styles.css"

function FormEndereco() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const buscarEndereco = () => {
    fetch(`http://viacep.com.br/ws/${cep}/json`)
      .then((res) => res.json())
      .then((dados) => {
        setBairro(dados.bairro);
        setLogradouro(dados.logradouro);
        setCidade(dados.localidade);
        setEstado(dados.uf);
      });
  };
  return (
    <>
      <div className="endereco">
        <fom className="form">
          <TextField
            onBlur={buscarEndereco}
            onChange={(event) => setCep(event.target.value)}
            value={cep}
            id="standard-basic"
            label="CEP"
            variant="standard"
          />

          <TextField
            value={logradouro}
            id="standard-basic"
            label="Logradouro"
            variant="standard"
          />

          <TextField
            value={bairro}
            id="standard-basic"
            label="Bairro"
            variant="standard"
          />

          <TextField
            value={cidade}
            id="standard-basic"
            label="Cidade"
            variant="standard"
          />

          <TextField
            value={estado}
            id="standard-basic"
            label="Estado"
            variant="standard"
          />
        </fom>
      </div>
    </>
  );
}

export default FormEndereco;
