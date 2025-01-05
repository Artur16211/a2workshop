// if the url is "pq2espanol.html" text in navbar "Guías" change to "Guías | Persona Q2 - Spanish Mod"
if (window.location.href.includes("pq2espanol.html")) {
    document.getElementById("navbarDropdown4").innerHTML = "Proyectos | Persona Q2 Traducción al Español";
    // subrayar el texto
    document.getElementById("navbarDropdown4").classList.add("fw-bold");
    document.getElementById("navbarDropdown4").classList.add("text-decoration-underline");
    // document.getElementById("navbarDropdown2").innerHTML = "Guías | Persona Q2 - Spanish Mod";
} else if (window.location.href.includes("blackopsiiilatino.html")) {
    document.getElementById("navbarDropdown5").innerHTML = "Proyectos | Black Ops III PC Español Latino";
    // subrayar el texto
    document.getElementById("navbarDropdown5").classList.add("fw-bold");
    document.getElementById("navbarDropdown5").classList.add("text-decoration-underline");
} else if (window.location.href.includes("blackopslatino.html")) {
    document.getElementById("navbarDropdown5").innerHTML = "Proyectos | Black Ops Español Latino";
    // subrayar el texto
    document.getElementById("navbarDropdown5").classList.add("fw-bold");
    document.getElementById("navbarDropdown5").classList.add("text-decoration-underline");
} else if (window.location.href.includes("contacto.html")) {
    // subrayar el texto
    document.getElementById("contacto").classList.add("fw-bold");
    document.getElementById("contacto").classList.add("text-decoration-underline");
}