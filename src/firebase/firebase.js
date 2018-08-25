import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCOXmJFEn0pPBs43Grx2kcMs31lwqLs3c4",
    authDomain: "expensify-927c4.firebaseapp.com",
    databaseURL: "https://expensify-927c4.firebaseio.com",
    projectId: "expensify-927c4",
    storageBucket: "expensify-927c4.appspot.com",
    messagingSenderId: "427872302830"
};

firebase.initializeApp(config);
    console.log(firebase);

const database = firebase.database();

export  {firebase, database as default} ;
