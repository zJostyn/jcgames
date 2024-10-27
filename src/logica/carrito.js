import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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
const db = getFirestore(app);

const cartItems = document.getElementById("cart-items");
let total = 0;

const loadCart = async () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    for (const productId of carrito) {
        const productRef = doc(db, "productos", `producto_${productId}`);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
            const product = productSnap.data();
            total += product.precio;
            cartItems.innerHTML += `
            <tr>
                <td class="p-4 border-b border-gray-400">
                    <img src="${product.imagen}" alt="${product.nombre}" class="w-20 h-auto object-contain rounded-l-lg" style="width:100px;heigh:100px; position: relative; left: 90px;">
                </td>
                <td class="p-4 border-b border-gray-400 text-xl font-semibold">${product.nombre}</td>
                <td class="p-4 border-b border-gray-400 text-xl font-bold">$${product.precio.toFixed(2)}</td>
                <td class="p-4 border-b border-gray-400">
                    <button onclick="eliminardelCarrito('${productId}')">Eliminar</button>
                </td>
            </tr>
        `;
        }
    }

    cartItems.innerHTML += `<h1 class="p-4 border-b border-gray-400 text-xl font-bold">Total: $${total}</h1>`;
};

loadCart();


window.eliminardelCarrito = (productId) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(id => id !== productId);
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

window.procederCompra = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if(carrito.length > 0) {
        window.location.href = "factura.html";
        localStorage.setItem("total", JSON.stringify(total));
    } else {
        alert("No hay productos en el carrito.");
    }
};

window.regresarProductos = () => {
    window.location.href = "productos.html";
};

window.eliminarTodo = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if(carrito.length > 0) {
        localStorage.removeItem('carrito');
        window.location.reload();
    } else {
        alert("No hay productos para eliminar.");
    }
};

if (localStorage.getItem('email') == null) {
    window.location.href = './../../index.html';
}