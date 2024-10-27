import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"; // Importar el módulo de autenticación

const firebaseConfig = {
    apiKey: "AIzaSyD7NP4K_HdK00HleJRhfePXuO7oGJYrdMM",
    authDomain: "p1h1html.firebaseapp.com",
    projectId: "p1h1html",
    storageBucket: "p1h1html.appspot.com",
    messagingSenderId: "781970864816",
    appId: "1:781970864816:web:fc5a88d03ec3667a811975",
    measurementId: "G-QDC73P63PE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Bienvenido ' + user.email + '!');
            window.location.href = 'home.html';
            localStorage.setItem("email", JSON.stringify(user.email));
        })
        .catch((error) => {
            alert('El correo ingresado o la contraseña, es incorrecta!');
        });
});