import React from 'react';
import {AppBar, Typography, Toolbar, Button, Container} from "@material-ui/core";


function App() {
  return (<>
      <AppBar>
        <Toolbar>
          <Typography variant="h1" className="app__brand">
            Orchard CMD
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <p>Hello World</p>
      </Container>
    </>
  );
}

export default App;
