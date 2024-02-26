document.querySelector('.tecnologia').addEventListener('click', function () {
  window.location.href = 'pages/noticia.html';
});

function voltarPaginaAnterior() {
  history.back();
}

function mostrarModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
  document.getElementById('modalSombra').classList.add('modal-sombra-visivel');
}

function esconderModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
  document
    .getElementById('modalSombra')
    .classList.remove('modal-sombra-visivel');
}

function confirmarInscricao() {
  esconderModal('modalConfirmacao');
  mostrarModal('modalSucesso');
}

function validarEmail() {
  console.log('Botão "Inscrever" clicado');
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value.trim();

  if (email === '') {
    mostrarModal('modalInformeEmail');
  } else {
    mostrarModal('modalConfirmacao');
  }
}

const newsItems = document.querySelectorAll('.news-item');

newsItems.forEach((newsItem) => {
  newsItem.addEventListener('click', () => {
    const href = newsItem.querySelector('a').getAttribute('href');

    window.location.href = href;
  });

  const newsImage = newsItem.querySelector('.news-imagem');
  const overlay = newsItem.querySelector('.overlay');
  const newsText = newsItem.querySelector('.news-texto');

  newsImage.addEventListener('mouseover', () => {
    overlay.style.opacity = '0.7';
    newsText.style.opacity = '1';
  });

  newsImage.addEventListener('mouseout', () => {
    overlay.style.opacity = '0';
    newsText.style.opacity = '0';
  });
});

function fecharModal() {
  const modals = document.querySelectorAll('.modal-sm');
  modals.forEach((modal) => {
    modal.style.display = 'none';
  });
  document
    .getElementById('modalSombra')
    .classList.remove('modal-sombra-visivel');
}

function fecharAoClicarForaModal(event) {
  if (event.target.classList.contains('modal-sombra')) {
    fecharModal();
  }
}

document.addEventListener('click', fecharAoClicarForaModal);

const verMaisButton = document.querySelector('.btn-ver-mais');

verMaisButton.addEventListener('click', () => {
  window.location.href = '/news/pages/tecnologia.html';
});
