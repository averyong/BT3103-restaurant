import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3aerBgsDmHd3tuTsrlLFwXmFB-XJWJ1s",
    authDomain: "bt3103-week-6-2a8bf.firebaseapp.com",
    databaseURL: "https://bt3103-week-6-2a8bf-default-rtdb.firebaseio.com",
    projectId: "bt3103-week-6-2a8bf",
    storageBucket: "bt3103-week-6-2a8bf.appspot.com",
    messagingSenderId: "563261182185",
    appId: "1:563261182185:web:bcc0b40a834973bbefa078",
    measurementId: "G-MFDST4YPM9"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;

