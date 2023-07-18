function formatFechaHora(fechaHoraString) {
    var fechaHora = new Date(fechaHoraString);
    var opcionesFecha = { day: 'numeric', month: 'long' };
    var opcionesHora = { hour: 'numeric', minute: 'numeric' };
    
    var dia = fechaHora.toLocaleDateString('es-ES', opcionesFecha);
    var hora = fechaHora.toLocaleTimeString('es-ES', opcionesHora);
    
    return `${dia} a las ${hora}`;
  }

  fetch('../comments.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(commentsObj) {
      var commentsContainer = document.getElementById('comments');

      commentsObj.comments.forEach(function(comment) {
        // Crear elementos HTML para cada comentario
        var commentElement = document.createElement('div');
        commentElement.classList.add('card-body', 'p-4');

        var dFlexElement = document.createElement('div');
        dFlexElement.classList.add('d-flex', 'flex-start');

        var avatarElement = document.createElement('img');
        avatarElement.classList.add('rounded-circle', 'shadow-1-strong', 'me-3');
        avatarElement.src = comment.avatar;
        avatarElement.alt = 'avatar';
        avatarElement.width = 60;
        avatarElement.height = 60;

        var contentContainer = document.createElement('div');

        var authorElement = document.createElement('h6');
        authorElement.classList.add('fw-bold', 'mb-1');
        authorElement.textContent = comment.author;

        var timestampElement = document.createElement('div');
        timestampElement.classList.add('d-flex', 'align-items-center', 'mb-3');

        var timestampTextElement = document.createElement('p');
        timestampTextElement.classList.add('mb-0');
        var formattedFechaHora = formatFechaHora(comment.timestamp);
        timestampTextElement.textContent = formattedFechaHora;

        var contentElement = document.createElement('p');
        contentElement.classList.add('mb-0');
        contentElement.textContent = comment.comment;

        // Construir la estructura del comentario
        timestampElement.appendChild(timestampTextElement);
        contentContainer.appendChild(authorElement);
        contentContainer.appendChild(timestampElement);
        contentContainer.appendChild(contentElement);
        dFlexElement.appendChild(avatarElement);
        dFlexElement.appendChild(contentContainer);
        commentElement.appendChild(dFlexElement);
        commentsContainer.appendChild(commentElement);
      });
    })
    .catch(function(error) {
      console.log('Error al obtener el archivo JSON:', error);
    });