import React from 'react';
import SiteHeader from "./components/SiteHeader";
import useCurrentUser from "./hooks/useCurrentUser";
import LogTable from "./components/LogTable";
import LogLink from "./components/LogLink";


function App() {
  const currentUser = useCurrentUser();
  return (<>
      <SiteHeader/>
      {currentUser === undefined && "Loading"}
      {currentUser && <>
        <LogLink uid={currentUser.uid}/>
        <LogTable uid={currentUser.uid}/>
      </>}
    </>
  );
}

export default App;
