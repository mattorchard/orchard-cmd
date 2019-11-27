import {useEffect, useState} from "react";
import firebase from "firebase/app";
import "firebase/auth";


const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => firebase.auth().onAuthStateChanged(setCurrentUser), []);
  return currentUser;
};

export default useCurrentUser;