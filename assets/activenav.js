// if the url is "pq2espanol.html" text in navbar "Guías" change to "Guías | Persona Q2 - Spanish Mod"
if (window.location.href.includes("pq2espanol.html")) {
    document.getElementById("navbarDropdown4").innerHTML = "Guías | Persona Q2 - Spanish Mod";
    // subrayar el texto
    document.getElementById("navbarDropdown4").classList.add("fw-bold");
    document.getElementById("navbarDropdown4").classList.add("text-decoration-underline");
    // document.getElementById("navbarDropdown2").innerHTML = "Guías | Persona Q2 - Spanish Mod";
} else if (window.location.href.includes("bo3deluxe.html")) {
    document.getElementById("navbarDropdown5").innerHTML = "Traducciones | Black Ops III - Español Latino";
    // subrayar el texto
    document.getElementById("navbarDropdown5").classList.add("fw-bold");
    document.getElementById("navbarDropdown5").classList.add("text-decoration-underline");
} else if (window.location.href.includes("bolatino.html")) {
    document.getElementById("navbarDropdown5").innerHTML = "Traducciones | Black Ops - Español Latino";
    // subrayar el texto
    document.getElementById("navbarDropdown5").classList.add("fw-bold");
    document.getElementById("navbarDropdown5").classList.add("text-decoration-underline");
} else if (window.location.href.includes("contacto.html")) {
    // subrayar el texto
    document.getElementById("contacto").classList.add("fw-bold");
    document.getElementById("contacto").classList.add("text-decoration-underline");
}