function generarNavbar() {
    // Crea el código HTML del navbar utilizando Bootstrap
    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-black bg-navbar">
        <div class="container">
            <button class="custom-navbar-toggler navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="iconify"
                    data-icon="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"
                    style="color: white;"></span>
            </button>
            <a class="nav-link active text-white hide-desktop titlepage" aria-current="page" href="../index.html">
                <img class="img" src="../assets/img/Logo.png" alt="A2 Workshop" width="100px" />
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active text-white hide-mobile" aria-current="page" href="../index.html"><img
                                class="img" src="../assets/img/a2logo.png" alt="A2 Workshop" width="200px" /></a>
                    </li>
                    <li class="nav-item dropdown hide-mobile2">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown5" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Traducciones
                        </a>
                        <ul class="dropdown-menu megamenu text-white bg-black" aria-labelledby="navbarDropdown5">
                            <div class="row">
                                <div class="col">
                                    <img class="img" src="../assets/img/bo3logo.png" alt="imagen1" width="100%" />
                                    <ul class="list-unstyled mb-0 mt-4">
                                        <li>
                                            <a href="../traducciones/bo3deluxe.html"><img class="img-zoom rounded"
                                                    src="../assets/img/2819323099_preview_BO3-Banner.png" alt="imagen1"
                                                    width="100%" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col">
                                    <img class="img" src="../assets/img/bologo.png" alt="imagen1" width="100%" />
                                    <ul class="list-unstyled mb-0 mt-4">
                                        <li>
                                            <a href="../traducciones/bolatino.html"><img class="img-zoom rounded"
                                                    src="../assets/img/2908022077_preview_LOGOBANNER.png" alt="imagen1"
                                                    width="100%" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col">
                                    <img class="img" src="../assets/img/p5.png" alt="imagen1" width="100%" />
                                    <ul class="list-unstyled mb-0 mt-4">
                                        <li>
                                            <a href="https://gamebanana.com/mods/54473"><img class="img-zoom rounded"
                                                    src="../assets/img/gamebanana.png" alt="imagen1" width="100%" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li class="hide-desktop2 nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown2" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Traducciones
                        </a>
                        <ul aria-labelledby="navbarDropdown2">
                            <li>
                                <a href="../traducciones/bo3deluxe.html">Call of Duty: Black Ops III - Español Latino
                                    (Mod Deluxe)</a>
                            </li><br>
                            <li>
                                <a href="../traducciones/bolatino.html">Call of Duty: Black Ops - Español Latino</a>
                            </li>
                            <br>
                            <li>
                                <a href="https://gamebanana.com/mods/54473">Persona 5 PS3 - Español Mod</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown hide-mobile2">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown4" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Guías
                        </a>
                        <ul class="dropdown-menu megamenu text-white bg-black" aria-labelledby="navbarDropdown4">
                            <div class="row">
                                <!-- <div class="col">
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="../guias/legodimensionslatino.html"><img class="rounded"
                                                    src="../assets/img/LD_logo.png" alt="imagen1" width="100%" /></a>
                                        </li>
                                    </ul>
                                </div> -->
                                <div class="col">
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="../guias/pq2espanol.html"><img class="rounded"
                                                    src="../assets/img/pq2esp.png" alt="imagen1" width="100%" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li class="hide-desktop2 nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown2" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Guías
                        </a>
                        <!-- <ul aria-labelledby="navbarDropdown2">
                            <li>
                                <a href="../guias/legodimensionslatino.html">Lego Dimensions - Español Latino PC</a>
                            </li><br>
                        </ul> -->
                        <ul aria-labelledby="navbarDropdown2">
                            <li>
                                <a href="../guias/pq2espanol.html">Persona Q2 - Spanish Mod</a>
                            </li><br>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-white" href="../contacto.html">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    const navbar2 = `
        <nav class="navbar navbar-expand-lg navbar-black bg-navbar">
        <div class="container">
        <button class="custom-navbar-toggler navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="iconify"
            data-icon="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"
            style="color: white;"></span>
        </button>
        <a class="nav-link active text-white hide-desktop titlepage" aria-current="page" href="index.html">
            <img class="img" src="assets/img/Logo.png" alt="A2 Workshop" width="100px" />
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active text-white hide-mobile" aria-current="page" href="index.html"><img class="img"
                    src="assets/img/a2logo.png" alt="A2 Workshop" width="200px" /></a>
            </li>
            <li class="nav-item dropdown hide-mobile2">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Traducciones
                </a>
                <ul class="dropdown-menu megamenu text-white bg-black" aria-labelledby="navbarDropdown">
                <div class="row">
                    <div class="col">
                    <img class="img" src="assets/img/bo3logo.png" alt="imagen1" width="100%" />
                    <ul class="list-unstyled mb-0 mt-4">
                        <li>
                        <a href="/traducciones/bo3deluxe.html"><img class="img-zoom rounded"
                            src="assets/img/2819323099_preview_BO3-Banner.png" alt="imagen1" width="100%" /></a>
                        </li>
                    </ul>
                    </div>
                    <div class="col">
                    <img class="img" src="assets/img/bologo.png" alt="imagen1" width="100%" />
                    <ul class="list-unstyled mb-0 mt-4">
                        <li>
                        <a href="/traducciones/bolatino.html"><img class="img-zoom rounded"
                            src="assets/img/2908022077_preview_LOGOBANNER.png" alt="imagen1" width="100%" /></a>
                        </li>
                    </ul>
                    </div>
                    <div class="col">
                    <img class="img" src="assets/img/p5.png" alt="imagen1" width="100%" />
                    <ul class="list-unstyled mb-0 mt-4">
                        <li>
                        <a href="https://gamebanana.com/mods/54473"><img class="img-zoom rounded"
                            src="assets/img/gamebanana.png" alt="imagen1" width="100%" /></a>
                        </li>
                    </ul>
                    </div>
                </div>
                </ul>
            </li>
            <li class="hide-desktop2 nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown2" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Traducciones
                </a>
                <ul aria-labelledby="navbarDropdown2">
                <li>
                    <a href="/traducciones/bo3deluxe.html">Call of Duty: Black Ops III - Español Latino (Mod Deluxe)</a>
                </li><br>
                <li>
                    <a href="/traducciones/bolatino.html">Call of Duty: Black Ops - Español Latino</a>
                </li>
                <br>
                <li>
                    <a href="https://gamebanana.com/mods/54473">Persona 5 PS3 - Español Mod</a>
                </li>
                </ul>
            </li>
            <li class="nav-item dropdown hide-mobile2">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Guías
                </a>
                <ul class="dropdown-menu megamenu text-white bg-black" aria-labelledby="navbarDropdown">
                <div class="row">
                    <!-- <div class="col">
                    <ul class="list-unstyled">
                        <li>
                        <a href="guias/legodimensionslatino.html"><img class="rounded" src="assets/img/LD_logo.png"
                            alt="imagen1" width="100%" /></a>
                        </li>
                    </ul>
                    </div> -->
                    <div class="col">
                    <ul class="list-unstyled">
                        <li>
                        <a href="guias/pq2espanol.html"><img class="rounded" src="assets/img/pq2esp.png" alt="imagen1"
                            width="100%" /></a>
                        </li>
                    </ul>
                    </div>
                </div>
                </ul>
            </li>
            <li class="hide-desktop2 nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown2" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Guías
                </a>
                <!-- <ul aria-labelledby="navbarDropdown2">
                <li>
                    <a href="guias/legodimensionslatino.html">Lego Dimensions - Español Latino (WIP)</a>
                </li><br>
                </ul> -->
                <ul aria-labelledby="navbarDropdown2">
                <li>
                    <a href="guias/pq2espanol.html">Persona Q2 - Español Mod</a>
                </li><br>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link text-white" href="/contacto.html" id="contacto">Contacto</a>
            </li>
            </ul>
        </div>
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
