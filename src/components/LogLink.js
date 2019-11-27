import React from "react";

const LogLink = ({uid}) => {
  const link = `https://orchard-cmd.web.app/api/log/${uid}`;
  return <aside>
    <h2>Here's you're link</h2>
    <a href={link}>{link}</a>
    <p>
      Any requests sent to that url get logged out here.
    </p>
  </aside>
};

export default LogLink;