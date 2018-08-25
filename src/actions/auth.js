import React from 'react';
import { firebase } from '../firebase/firebase';
import Intro_header from '../components/desktopView/IntroPage/Intro_header';


export const newAccount = (uid) => ({
  type: 'NEW_ACCOUNT',
  uid
});

export const startnewAccount = (email,password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorMessage = error.message;
      console.log(errorMessage)
    });;
  };
};
