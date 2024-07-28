/* sidebar */
$(document).ready(function () {
    // Obtén el botón y el panel lateral por sus ID
    const $sidebarToggle = $("#sidebar-toggle");
    const $sidebarClose = $("#sidebar-close");
    const $sidebar = $("#sidebar");

    // Agrega un evento click al botón de cierre
    $sidebarClose.on("click", function () {
        // Oculta el panel lateral
        $sidebar.removeClass("show");
    });

    // Agrega un evento click al botón de mostrar/ocultar
    $sidebarToggle.on("click", function () {
        // Alterna la clase 'show' para mostrar u ocultar el panel
        $sidebar.toggleClass("show");
    });
});
$(window).resize(function () {
    if ($(window).width() > 992) {
        $("#sidebar").removeClass("show");
    }
});

/* tab mobile */

// when the user changes the select option, show the corresponding tab
const select = document.querySelector('.hide-desktop select');
select.addEventListener('change', function () {
    if (this.value === '1') {
        showTab('tab2');
    } else if (this.value === '2') {
        showTab('tab1');
    } else {
        console.error('Invalid tab:', this.value);
    }
});

// tab
function showTab(tab) {
    const tab1Comments = document.getElementById('tab1-comments');
    const tab2Comments = document.getElementById('tab2-comments');

    if (tab === 'tab1') {
        tab1Comments.style.display = 'block';
        tab2Comments.style.display = 'none';
    } else if (tab === 'tab2') {
        tab1Comments.style.display = 'none';
        tab2Comments.style.display = 'block';
    } else {
        console.error('Invalid tab:', tab);
    }
}

// when the page loads, show the first tab
showTab('tab2');

// when the user clicks on a tab change the background color of the warning button
const tabButtons = document.querySelectorAll('.nav-pills .btn');
for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function () {
        for (let j = 0; j < tabButtons.length; j++) {
            tabButtons[j].classList.remove('activeborder');
        }
        this.classList.add('activeborder');
    });
}

// index-container
var indexContainer = document.getElementById('index-container');
var cards = document.getElementsByClassName('card');
var lastCard = cards[cards.length - 1];
var containerOffsetTop = indexContainer.offsetTop;
var lastCardOffsetTop = lastCard.offsetTop + lastCard.offsetHeight;
var windowHeight = window.innerHeight;
var isFixed = false;

window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;

    // Si el scroll llega por debajo de la posición original y el índice no está en modo "fixed", lo fijamos.
    if (scrollPosition >= containerOffsetTop && !isFixed) {
        indexContainer.classList.add('position-fixed');
        indexContainer.style.bottom = '0';
        isFixed = true;
    }

    // Si el scroll está por encima de la posición original y el índice está en modo "fixed", lo devolvemos a su posición original.
    if (scrollPosition < containerOffsetTop && isFixed) {
        indexContainer.classList.remove('position-fixed');
        indexContainer.style.bottom = '';
        isFixed = false;
    }
});

// comment text
var textarea = document.getElementById('comment-text');

textarea.addEventListener('click', function () {
    window.location.href = 'https://steamcommunity.com/sharedfiles/filedetails/?id=2819323099#commentthread_PublishedFile_Public_76561198851405406_2819323099_area';
});

// card hover
// Obtén todos los elementos con la clase "card-hover"
var cards = document.getElementsByClassName("card-hover");

// Agrega eventos de escucha para el evento "mouseenter" (entrar) y "mouseleave" (salir)
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", function () {
        this.classList.add("card-hover"); // Agrega la clase "card-hover"
    });

    cards[i].addEventListener("mouseleave", function () {
        this.classList.remove("card-hover"); // Elimina la clase "card-hover"
    });
}

//list group item
$(document).ready(function () {
    // Escuchar los clics en los enlaces de la lista
    $('.list-group-item').click(function () {
        // Remover la clase 'active' de todos los enlaces
        $('.list-group-item').removeClass('active');

        // Agregar la clase 'active' al enlace clicado
        $(this).addClass('active');
    });
});
// change mobile
// Función que verifica la resolución y cambia la clase del div
function updateDivClass() {
    const divElement = document.getElementById('changemobile');

    if (window.matchMedia('(max-width: 1199px)').matches) {
        // Si la resolución es menor a 1200 píxeles, cambia la clase
        divElement.classList.remove('col-9');
        divElement.classList.add('col');
    } else {
        // Si la resolución es 1200 píxeles o mayor, restablece la clase original
        divElement.classList.remove('col');
        divElement.classList.add('col-9');
    }
}

// Llama a la función al cargar la página y cada vez que la ventana cambie de tamaño
window.addEventListener('load', updateDivClass);
window.addEventListener('resize', updateDivClass);

// changemobile2
// Función que verifica la resolución y cambia la clase del div
function updateDivClass() {
    const divElement = document.getElementById('changemobile2');

    if (window.matchMedia('(max-width: 1199px)').matches) {
        // Si la resolución es menor a 1200 píxeles, cambia la clase
        divElement.classList.remove('col-9');
        divElement.classList.add('col');
    } else {
        // Si la resolución es 1200 píxeles o mayor, restablece la clase original
        divElement.classList.remove('col');
        divElement.classList.add('col-9');
    }
}

// Llama a la función al cargar la página y cada vez que la ventana cambie de tamaño
window.addEventListener('load', updateDivClass);
window.addEventListener('resize', updateDivClass);