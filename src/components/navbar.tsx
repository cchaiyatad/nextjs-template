import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  toolbarLink: {
    paddingRight: theme.spacing(4),
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <Link color="inherit" href="/" className={classes.title}>
            <Typography variant="h6" color="inherit" noWrap>
              Home
            </Typography>
          </Link>
          <Link
            color="inherit"
            href="/design/style"
            className={classes.toolbarLink}
          >
            <Typography color="inherit" noWrap>
              Style
            </Typography>
          </Link>
          <Link color="inherit" href="/design/template">
            <Typography color="inherit" noWrap>
              Template
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};
