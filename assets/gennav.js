function generarNavbar() {
    const navbar = `
        <nav>
            <div class="nav-container">
                <a href="/index.html"><img src="../assets/img/logo.png" alt="logo" class="logo_nav"></a>
                <div class="megamenu">
                    <a href="#">Proyectos</a>
                    <div class="megamenu-content">
                    <button class="close-btn">&times;</button>
                    <a href="/traducciones/blackopsiiilatino.html">
                        <img src="../assets/img/bo3logo.png" alt="bo3lalogo"> (PC) Call of Duty: Black Ops III Traducción Español
                        Latino
                    </a>
                    <a href="/traducciones/blackopslatino.html">
                        <img src="../assets/img/latinbo.jpg" alt="bolalogo">
                        (PC) Call of Duty: Black Ops Traducción Español Latino
                    </a>
                    <a href="/traducciones/pq2espanol.html">
                        <img src="../assets/img/pq2.png" alt="pq2eslogo"> (3DS) Persona Q2 Traducción al Español
                    </a>
                    </div>
                </div>
                <a href="/contacto.html">Contacto</a>
            </div>
        </nav>
    `;

    // Inserta el navbar en el elemento con id "navbar-container"
    // if in the url is "index.html or contact.html" show another navbar
    if (window.location.href.includes("index.html") || window.location.href.includes("contacto.html")) {
        document.getElementById("navbar-container").innerHTML = navbar2;
    } else {
        document.getElementById("navbar-container").innerHTML = navbar;
    }

    // exec message
    // console.log("Navbar generado");
}

// Llama a la función al cargar la página
generarNavbar();
