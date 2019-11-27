import {useState, useEffect} from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useWebHookLogs = (uid) => {
  const [webhookLogs, setWebhookLogs] = useState(null);

  useEffect(() =>
      firebase.firestore()
      .collection("webhooks")
      .doc(uid)
      .collection("logs")
      .onSnapshot(logs =>
        setWebhookLogs(logs.docs.map(snap =>
            ({...snap.data(), id: snap.id})
          )
        )
      )
    , [uid]);
  return webhookLogs;
};

export default useWebHookLogs;