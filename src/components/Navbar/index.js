import * as React from "react";
//ROTAS PARA COMPONENTES DO MATERIAL UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
//ROTAS PARA PEGAR IMAGEM DO MATERIAL ICONS
import MenuIcon from "@mui/icons-material/Menu";
import NavigationIcon from "@mui/icons-material/Navigation";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import "./styles.css";

export default function Navbar() {
  const [menu, setMenu] = React.useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const redirect = (url) => {
    navigate(url);
    setMenu(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer open={menu} onClose={handleMenu}>
        <div className="open-modal">
          <WidgetsTwoToneIcon />
          Menu
        </div>
        <Divider />

        <List>
          <ListItem onClick={() => redirect("/endereco")} button>
            <ListItemIcon>
              <NavigationIcon />
            </ListItemIcon>
            <ListItemText>Endereço</ListItemText>
          </ListItem>
          <ListItem onClick={() => redirect("/carrinho")} button>
            <ListItemIcon>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText>Carrinho</ListItemText>
          </ListItem>
          <ListItem onClick={() => redirect("/produtos")} button>
            <ListItemIcon>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText>Cardápio</ListItemText>
          </ListItem>
          <ListItem onClick={() => redirect("/favorito")} button>
            <ListItemIcon>
              <FavoriteTwoToneIcon />
            </ListItemIcon>
            <ListItemText>Favoritos</ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meu app
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
