import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDMLRVH92HxpfY_xAeeFw0BoszMVxiWTys",
    authDomain: "todoapp-smallstep.firebaseapp.com",
    databaseURL: "https://todoapp-smallstep.firebaseio.com",
    projectId: "todoapp-smallstep",
    storageBucket: "todoapp-smallstep.appspot.com",
    messagingSenderId: "616869968323"
}

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }; 
