import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Divider,
  Button,
} from "@mui/material";

//button favorite material icons
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from '@mui/icons-material/Add';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

//CSS
import "./styles.css";

const Products = () => {
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/produtos")
      .then((res) => res.json())
      .then((dados) => setItems(dados));
    //   npx json-server db.json --port 8000
  }, []);

  const addProduto = (nome, valor) => {
    fetch("http://localhost:8000/carinho", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nome,
        valor: valor,
        quantidade: 1,
      }),
    });

    alert("pronto");
  };

  
  const addFavorite = (nome, valor, foto) => {
    fetch ("http://localhost:8000/favorito", {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ({
          nome: nome,
          valor: valor,
          foto: foto,
      }),
    });

    alert('ADICIONADO AOS FAVORITOS')
  }


  const CadaProduto = (props) => {
    return (
      <>
        <Card style={{ marginTop: "10px" }} className="card-products" >
          <CardActionArea>
            {/* <img src={pizza} /> */}
            <CardMedia component="img" height="200" image={props.foto} />
            <CardContent>
              <Typography variant="h5">{props.nome}</Typography>
            </CardContent>
          </CardActionArea>
          <CardContent>
            <Divider />
            <div className="content-button">
              <Typography>{props.valor}</Typography>
              
              <div className="favoriteButtons">
                <FavoriteOutlinedIcon className="addButton" onClick={() => addFavorite(props.nome, props.valor, props.foto)}
                />

                <AddIcon className="addButton" onClick={() => addProduto(props.nome, props.valor)} />
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    );
  };

  return (
    <>
      <div className="page-products">
        <h2 className="">Quantidade de Itens {items.length}</h2>
        <hr />

        <div className="content-card">
          {items.map((cadaItem) => (
            <CadaProduto
              nome={cadaItem.nome}
              valor={cadaItem.valor}
              foto={cadaItem.foto}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
