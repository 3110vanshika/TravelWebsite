import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery, Popover, Paper } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Navigation() {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [submenuAnchor, setSubmenuAnchor] = React.useState(null);
  const [isSticky, setSticky] = useState(false); // Make header sticky

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleSubmenuOpen = (event) => {
    setSubmenuAnchor(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setSubmenuAnchor(null);
  };

  return (
    <div>
      <div className={`navbar ${isSticky ? "sticky" : ""}`}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography className="brand_name"
              variant="h4"
              component="div"
              sx={{ display: { xs: "none", sm: "block", color: "#000" } }}
            >
              Adventure
            </Typography>
          </div>
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleDrawerOpen}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} to="/user">
                <AccountCircleIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} to="/cart">
                <ShoppingCartIcon />
              </IconButton>
            </div>
          )}
          {!isMobile && (
            <List
              className="navbar_nav"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItem className="nav_item" button component={Link} to="/">
                <ListItemText className="nav_link" primary="Home" />
              </ListItem>
              <ListItem
                className="nav_item"
                button
                component={Link}
                to="/about"
              >
                <ListItemText className="nav_link" primary="About" />
              </ListItem>
              <ListItem
                className="nav_item"
                button
                component={Link}
                to="/room"
                onClick={handleDrawerClose}
              >
                <ListItemText className="nav_link" primary="Room" />
              </ListItem>
              <ListItem
                className="nav_item"
                button
                component={Link}
                to="/destination"
                onClick={handleDrawerClose}
              >
                <ListItemText className="nav_link" primary="Destination" />
              </ListItem>
              <ListItem
                className="nav_item"
                button
                aria-describedby="submenu"
                onClick={handleSubmenuOpen}
              >
                <ListItemText className="nav_link" primary="Pages" />
                <ExpandMoreIcon />
              </ListItem>
              <Popover
                id="submenu"
                open={Boolean(submenuAnchor)}
                anchorEl={submenuAnchor}
                onClose={handleSubmenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Paper>
                  <List className="submenu">
                    <ListItem
                      className="nav_item"
                      button
                      component={Link}
                      to="/cart"
                      onClick={handleSubmenuClose}
                    >
                      <ListItemText className="nav_link" primary="Cart" />
                    </ListItem>
                    <ListItem
                      className="nav_item"
                      button
                      component={Link}
                      to="/checkout"
                      onClick={handleSubmenuClose}
                    >
                      <ListItemText className="nav_link" primary="Checkout" />
                    </ListItem>
                    <ListItem
                      className="nav_item"
                      button
                      component={Link}
                      to="/login"
                      onClick={handleSubmenuClose}
                    >
                      <ListItemText className="nav_link" primary="Login" />
                    </ListItem>
                    <ListItem
                      className="nav_item"
                      button
                      component={Link}
                      to="/register"
                      onClick={handleSubmenuClose}
                    >
                      <ListItemText className="nav_link" primary="Register" />
                    </ListItem>
                    <ListItem
                      className="nav_item"
                      button
                      component={Link}
                      to="/services"
                      onClick={handleSubmenuClose}
                    >
                      <ListItemText className="nav_link" primary="Services" />
                    </ListItem>
                  </List>
                </Paper>
              </Popover>
              <ListItem
                className="nav_item"
                button
                component={Link}
                to="/contact"
                onClick={handleDrawerClose}
              >
                <ListItemText className="nav_link" primary="Contact" />
              </ListItem>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              >
                <IconButton color="inherit" component={Link} to="/user">
                  <AccountCircleIcon />
                </IconButton>
                <IconButton color="inherit" component={Link} to="/cart">
                  <ShoppingCartIcon />
                </IconButton>
              </div>
            </List>
          )}
        </Toolbar>
      </div>

      {isMobile && (
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          style={{ border: "2px solid #000" }}
        >
          <List>
            <ListItem
              className="nav_item"
              button
              component={Link}
              to="/"
              onClick={handleDrawerClose}
            >
              <ListItemText className="nav_link" primary="Home" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/about"
              onClick={handleDrawerClose}
            >
              <ListItemText className="nav_link" primary="About" />
            </ListItem>
            <ListItem
              className="nav_item"
              button
              component={Link}
              to="/room"
              onClick={handleDrawerClose}
            >
              <ListItemText className="nav_link" primary="Room" />
            </ListItem>
            <ListItem
              className="nav_item"
              button
              component={Link}
              to="/destination"
              onClick={handleDrawerClose}
            >
              <ListItemText className="nav_link" primary="Destination" />
            </ListItem>
            <ListItem
              className="nav_item"
              button
              aria-describedby="submenu"
              onClick={handleSubmenuOpen}
            >
              <ListItemText className="nav_link" primary="Pages" />
              <ExpandMoreIcon />
            </ListItem>
            <Popover
              id="submenu"
              open={Boolean(submenuAnchor)}
              anchorEl={submenuAnchor}
              onClose={handleSubmenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Paper>
                <List>
                  <ListItem
                    className="nav_item"
                    button
                    component={Link}
                    to="/cart"
                    onClick={handleSubmenuClose}
                  >
                    <ListItemText className="nav_link" primary="Cart" />
                  </ListItem>
                  <ListItem
                    className="nav_item"
                    button
                    component={Link}
                    to="/checkout"
                    onClick={handleSubmenuClose}
                  >
                    <ListItemText className="nav_link" primary="Checkout" />
                  </ListItem>
                  <ListItem
                    className="nav_item"
                    button
                    component={Link}
                    to="/login"
                    onClick={handleSubmenuClose}
                  >
                    <ListItemText className="nav_link" primary="Login" />
                  </ListItem>
                  <ListItem
                    className="nav_item"
                    button
                    component={Link}
                    to="/register"
                    onClick={handleSubmenuClose}
                  >
                    <ListItemText className="nav_link" primary="Register" />
                  </ListItem>
                  <ListItem
                    className="nav_item"
                    button
                    component={Link}
                    to="/services"
                    onClick={handleSubmenuClose}
                  >
                    <ListItemText className="nav_link" primary="Services" />
                  </ListItem>
                </List>
              </Paper>
            </Popover>
            <ListItem
              button
              component={Link}
              to="/contact"
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
      )}
    </div>
  );
}
