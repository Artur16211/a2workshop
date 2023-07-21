// Function to formatear la fecha y hora
function formatFechaHora(fechaHoraString) {
  var fechaHora = new Date(fechaHoraString);
  var opcionesFecha = { day: 'numeric', month: 'long' };
  var opcionesHora = { hour: 'numeric', minute: 'numeric' };

  var dia = fechaHora.toLocaleDateString('es-ES', opcionesFecha);
  var hora = fechaHora.toLocaleTimeString('es-ES', opcionesHora);

  return `${dia} a las ${hora}`;
}

// Function to decodificar el token desde Base64
function decodeToken(encodedToken) {
  return atob(encodedToken);
}

async function displayComments(jsonData) {
  try {
    const commentsObj = JSON.parse(jsonData);
    var commentsContainer = document.getElementById('comments');

    commentsObj.comments.forEach(function (comment) {
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
    console.log('Displayed comments.');
  } catch (error) {
    console.error('Error displaying comments:', error);
  }
}

async function downloadLatestWorkflowArtifact(url, accessToken, workflowName) {
  // Try to retrieve the cached JSON data from localStorage
  const cachedJsonData = localStorage.getItem('cachedJsonData');

  if (cachedJsonData) {
    // Display the cached JSON data
    displayComments(cachedJsonData);
  }

  // If data is not available in cache, proceed with the fetch request
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    const artifacts = data.artifacts;

    if (artifacts && artifacts.length > 0) {
      // Filter artifacts that match the specified workflow name
      const workflowArtifacts = artifacts.filter(artifact => artifact.name === workflowName);

      if (workflowArtifacts.length === 0) {
        console.error(`No artifacts found for the workflow "${workflowName}".`);
        return;
      }

      // Sort the workflow artifacts by creation date in descending order
      workflowArtifacts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      // Get the latest artifact for the specified workflow
      const latestWorkflowArtifact = workflowArtifacts[0];

      // Download the latest workflow artifact
      const downloadResponse = await fetch(latestWorkflowArtifact.archive_download_url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const blob = await downloadResponse.blob();

      // Extract the ZIP archive
      const zip = new JSZip();
      const zipData = await zip.loadAsync(blob);
      const jsonFile = zipData.files['comments.json'];

      if (!jsonFile) {
        console.error('JSON file not found in the ZIP archive.');
        return;
      }

      // Read the contents of the JSON file
      const jsonData = await jsonFile.async('text');

      // Show the comments directly in the page
      displayComments(jsonData);

      // Store the JSON data in localStorage
      localStorage.setItem('cachedJsonData', jsonData);
    } else {
      console.error('No artifacts found.');
    }
  } catch (error) {
    console.error('Error fetching or downloading artifact:', error);
  }
}

// Llamamos a la función downloadLatestWorkflowArtifact() con el URL de la API de GitHub, el token de acceso y el nombre del flujo de trabajo
const apiURL = 'https://api.github.com/repos/Artur16211/steamguide_comments/actions/artifacts';
const encodedToken = 'Z2hwX051NzV5TFZtZ01oYlZGUElMaEFQeDRNdFRTa0xHbzExd0hHTQ==';
const accessToken = decodeToken(encodedToken);
if (accessToken) {
  const workflowName = 'comments'; // Reemplaza esto con el nombre del flujo de trabajo deseado
  downloadLatestWorkflowArtifact(apiURL, accessToken, workflowName);
} else {
  console.error('Invalid token format.');
}

// Clear the cached data when the page is reloaded
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('cachedJsonData');
});
