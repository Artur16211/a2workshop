function generarNavbar() {
    const navbar = `
        <nav>
            <div class="nav-container">
                <a href="/index.html" class="hide-desktop"><img src="../assets/img/logo.png" alt="logo" class="logo_nav"></a>
                <a href="/index.html" class="hide-mobile"><img src="../assets/img/a2logo.png" alt="logo" class="logo_nav"></a>
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

    const navbar2 = `
        <nav>
            <div class="nav-container">
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

    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
        document.getElementById("navbar-container").innerHTML = navbar2;
    } else {
        document.getElementById("navbar-container").innerHTML = navbar;
    }
    

}

generarNavbar();
