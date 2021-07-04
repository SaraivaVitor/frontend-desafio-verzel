import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDaTk287tWTNz5HfUVE-odAzha1b6G6dnM",
    authDomain: "desafioverzel.firebaseapp.com",
    projectId: "desafioverzel",
    storageBucket: "desafioverzel.appspot.com",
    messagingSenderId: "685844886134",
    appId: "1:685844886134:web:cf86e77100e2677cd06557"
  };

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }