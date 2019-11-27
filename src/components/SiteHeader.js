import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import React from "react";

const SiteHeader = () => <AppBar position="static" className="site-header">
  <Toolbar>
    <Typography variant="h1" className="app__brand">
      Orchard CMD
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>;

export default SiteHeader;