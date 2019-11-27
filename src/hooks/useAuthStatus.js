import {useEffect, useState} from "react";
import firebase from "firebase/app";
import "firebase/auth";


const useAuthStatus = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => firebase.auth().onAuthStateChanged(setCurrentUser), []);
  return currentUser;
};

export default useAuthStatus;