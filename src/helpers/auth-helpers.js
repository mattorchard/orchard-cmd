
import firebase from "firebase/app";
import "firebase/auth";

export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  if ("touchevents" in window) {
    return firebase.auth().signInWithRedirect(provider);
  } else {
    return firebase.auth().signInWithPopup(provider);
  }
};

export const logout = () => firebase.auth().signOut();
