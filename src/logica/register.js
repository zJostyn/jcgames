import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"; // Importar el módulo de autenticación

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
const auth = getAuth(app); // Inicializar el servicio de autenticación

// Capturar el evento de submit del formulario
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Registrar usuario con Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Usuario registrado correctamente
            const user = userCredential.user;
            alert('Registro exitoso: ' + user.email);

            // Redirigir al index.html
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // Manejo de errores
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error (${errorCode}): ${errorMessage}`);
        });
});