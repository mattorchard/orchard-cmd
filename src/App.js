import React from 'react';
import SiteHeader from "./components/SiteHeader";
import Container from "@material-ui/core/Container";


function App() {
  return (<>
      <SiteHeader/>
      <Container>
        <p>Hello World</p>
      </Container>
    </>
  );
}

export default App;
