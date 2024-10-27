    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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

    const productList = document.getElementById("product-list");

    const displayProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        querySnapshot.forEach((doc) => {
            const product = doc.data();
            productList.innerHTML += `
                <div class="max-w-sm rounded overflow-hidden shadow-lg" style="width: 400px; height: 400px; margin-bottom: 10px; margin-top: 90px; margin-left: 10px;">
                    <img class="w-full" src="${product.imagen}" alt="${product.nombre}" style="position: relative;width: 180px; height: 180px; left: 110px;"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2" style="margin-top: 5px;">${product.nombre}</div>
                        <p class="text-gray-700 text-base" style="margin-top: 5px;">${product.descripcion}</p>
                        <p>Precio: $${product.precio}</p>
                        <div style="position: relative; margin-top: 10px;">
                        <button style="background-color: red; border-radius: 5px; width: 100px; height: 30px;" onclick="addToCart(${product.id})">Añadir</button>
                        </div>
                    </div>
                </div>
            `;
        });
    };

    displayProducts();

    window.addToCart = (productId) => {
        if (localStorage.getItem('email') == null) {
            alert("Inicia sesión para añadir productos al carrito!");
            window.location.href = './../../index.html';
        } else { 
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push(productId);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert("Se agrego al carrito!");
        }
    };
