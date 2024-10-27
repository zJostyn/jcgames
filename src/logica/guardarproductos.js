<script type="module" src="../../logica/guardarproductos.js"></script>

    
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import { getFirestore, doc, setDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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

    const products = [
        { id: 1, nombre: "Cyberpunk 2077", precio: 60, descripcion: "Es un videojuego de rol de acción desarrollado y publicado por CD Projekt.", imagen: "https://media.vandal.net/m/20029/cyberpunk-2077-201961217172698_1.jpg" },
        { id: 2, nombre: "Assassin's Creed Valhalla", precio: 70, descripcion: "Embárcate en una aventura vikinga épica mientras exploras la Inglaterra medieval y luchas por establecer tu propio clan.", imagen: "https://www.retroplace.com/pics/ps4/packshots/184880--assassins-creed-valhalla.png" },
        { id: 3, nombre: "GTA 6", precio: 120, descripcion: "Es un videojuego de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games. Será lanzado para las consolas PlayStation 5, Xbox One y PC.", imagen: "https://piks.eldesmarque.com/bin/2023/11/16/portada_gta_vi.jpg" },
        { id: 4, nombre: "Call of Duty: Black Ops 6", precio: 100, descripcion: "Es un próximo juego de disparos en primera persona, co-desarrollado por Treyarch y Raven Software y publicado por Activision.", imagen: "https://juegodigitalecuador.com/files/images/productos/1718042557-call-of-duty-black-ops-6-ps4-pre-orden-0.webp" },
    ];

    const saveProducts = async () => {
        for (const product of products) {
            const productRef = doc(db, "productos", `producto_${product.id}`);
            await setDoc(productRef, product);
        }
        console.log("Productos guardados en Firestore");
    };

    saveProducts();
