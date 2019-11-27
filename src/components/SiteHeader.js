import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import useAuthStatus from "../hooks/useAuthStatus";
import {login, logout} from "../helpers/auth-helpers";


const SiteHeader = () => {
  const currentUser = useAuthStatus();
  return <AppBar position="static" className="site-header">
    <Toolbar>
      <Typography variant="h1" className="app__brand">
        Orchard CMD
      </Typography>
      {currentUser
        ? <Button onClick={logout} color="inherit">Logout</Button>
        : <Button onClick={login} color="inherit">Login</Button>}
    </Toolbar>
  </AppBar>;
};

export default SiteHeader;