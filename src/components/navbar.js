import React from "react";
import { Link } from "react-router-dom";

// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  button: {
    marginRight: theme.spacing(2)
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to='/'><HomeIcon /></Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Advertise on Podcasts
          </Typography>
          <Link to="/podcasts">
            <Button color="inherit" className={classes.button}>
              Podcasts
            </Button>
          </Link>
          <Link to="/advertisers">
            <Button color="inherit" className={classes.button}>
              Advertisers
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
