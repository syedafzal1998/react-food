import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuIcon from "@material-ui/icons/Menu";
import Cards from './card'
// import {
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';




const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));


const nav = {
  background: '#e30966',
  boxShadow: "inset 0px 0px 2px #a00",
};

export default function Navbar() {
  const classes = useStyles();




  return (
    <div className={classes.root}>
      <AppBar position="static" style={nav} >
        <Toolbar>

          {/* <Button variant="contained" {...bindTrigger(popupState)}>
            Open Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Cake</MenuItem>
            <MenuItem onClick={popupState.close}>Death</MenuItem>
          </Menu> */}

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu">
            <MenuIcon />

          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Food App
          </Typography>

          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit" onClick={() => window.location = '/card'}> Order </Button>

          <Button color="inherit"  >logout</Button>
        </Toolbar>
      </AppBar>
    </div>


  );
}
