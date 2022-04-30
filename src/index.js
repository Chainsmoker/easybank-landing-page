const btn = document.querySelector('#btnAbrir'),
      btnCerrar  = document.querySelector('#btnCerrar'),
      navegacion = document.querySelector('.seccion1__navegacion');

// Open menu
btn.addEventListener('click', function() {
    navegacion.classList.add('translate');
});

// Close menu
btnCerrar.addEventListener('click', function() {
    navegacion.classList.remove('translate');
});